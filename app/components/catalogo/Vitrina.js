"use client";
import { fetchCatalogo } from "../endpoint";
import '@splidejs/react-splide/css';
import TarjetaLibro from './TarjetaLibro';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LOOP } from '@splidejs/splide';
import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import Link from "next/link";

  
const Vitrina = () => {

    const [ data, setData ] = useState([]);
    useEffect(
        () => {
            fetchCatalogo().then((res) => setData(res));
        }, []
    );


    return (
        <Box
            maxW="90vw"
            mx="auto"
            mt={8}
            overflow="auto"
            position="relative"
        >
            <Heading 
                as="h2" 
                size="lg" 
                textAlign="left" 
                mb={4}
            >
                Recomendaciones
            </Heading>
            <Splide
                options={{
                    type: LOOP,
                    perPage: 6,
                    gap: "1rem",
                    breakpoints: {
                        1024: { perPage: 4 },
                        768: { perPage: 3 },
                        480: { perPage: 2 },
                    },
                    pagination: false,
                    arrows: true,
                    focus: "left",
                    fade: true
                }}
                aria-labelledby="reactivity-example-heading"
            >
                {data.libros?.slice(0, 12).map((libro) => {
                    return (
                        <Link href={`https://dlp-prestamo.vercel.app/drlp/libro?=${libro.id}`}>
                            <SplideSlide key={libro.id}>
                                <TarjetaLibro infoLibro={libro}/>
                            </SplideSlide>
                        </Link>
                    );
                })}
            </Splide>
        </Box>
    );
};

export default Vitrina;