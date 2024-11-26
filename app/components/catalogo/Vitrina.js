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
            maxW="85vw"
            mx="auto"
            mt="5vh"
            mb="10vh"
            overflow="visible"
            position="relative"
        >
            <Heading 
                as="h2" 
                size="lg" 
                textAlign="left" 
                mb="4vh"
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
                }}
                aria-labelledby="carousel-heading"
            >
                {data.libros?.slice(0, 12).map((libro) => {
                    return (
                        <SplideSlide key={libro.id}>
                            <Link 
                                href={`https://dlp-prestamo.vercel.app/drlp/libro?=${libro.id}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <TarjetaLibro infoLibro={libro}/>
                            </Link>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Box>
    );
};

export default Vitrina;