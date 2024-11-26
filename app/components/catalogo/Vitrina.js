"use client";
import libros from "../libros.json";
import '@splidejs/react-splide/css';
import TarjetaLibro from './TarjetaLibro';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LOOP } from '@splidejs/splide';
import { Box, Heading } from '@chakra-ui/react';

  
const Vitrina = () => {

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
                {libros?.slice(0, 12).map((libro, index) => {
                    return (
                        <SplideSlide key={index}>
                            <TarjetaLibro infoLibro={libro}/>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Box>
    );
};

export default Vitrina;