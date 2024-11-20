"use client";
import React, { useEffect, useState } from 'react';
import libros from "../libros.json";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { LOOP } from '@splidejs/splide';
import TarjetaLibro from './TarjetaLibro';
import { Box } from '@chakra-ui/react';

  
const Vitrina = () => {

    return (
        <Box
            maxW="90vw"
            mx="auto"
            mt={8}
            overflow="hidden"
            position="relative"
        >
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
                    pagination: true,
                    arrows: true,
                    focus: "center",
                    fade: true,
                }}
                aria-labelledby="reactivity-example-heading"
            >
                {libros.map((libro, index) => {
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