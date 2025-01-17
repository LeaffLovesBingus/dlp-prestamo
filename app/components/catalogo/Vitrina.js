"use client";
import { fetchCatalogo} from '../endpoint.js';
import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/splide.min.css';
import TarjetaLibro from './TarjetaLibro';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LOOP } from '@splidejs/splide';
import { Box, Heading, Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import Link from "next/link";

  
const Vitrina = () => {

    const [ data, setData ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(
        () => {
            fetchCatalogo().then((res) => {
                setData(res);
                setIsLoading(false);
            });
        }, []
    );

    if (isLoading) {

        return (
          <Box
            maxW="85vw"
            marginX="auto"
            marginTop="2vh"
            marginBottom="10vh"
            overflow="visible"
            position="relative"
          >
            <Heading 
                as="h2" 
                size="lg"
                minH="8vh"
                width="85vw"
                textAlign="left" 
                marginBottom="4vh"
                bg="rgba(24, 24, 32, 0.4)"
                border="0.15vw solid rgba(0, 0, 0, 0.3)"
                borderRadius="15px"
                paddingY="2vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
              Recomendaciones
            </Heading>
            <Splide
              options={{
                type: LOOP,
                gap: "1vw",
                pagination: false,
                perPage: 5,
                breakpoints: {
                  1024: { perPage: 4 },
                  768: { perPage: 3 },
                  640: { perPage: 2 },
                },
                gap: "1vw",
                arrows: true,
                focus: "left",
              }}
              aria-labelledby="carousel-heading"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <SplideSlide key={index}>
                  <Skeleton
                    height="35vh"
                    width="15vw"
                    borderRadius="10px"
                    startColor="#75a8ff"
                    endColor="#b8d9ff"
                  />
                </SplideSlide>
              ))}
            </Splide>
          </Box>
        );
    }

    return (
        <Box
            width="85vw"
            marginX="auto"
            marginTop="2vh"
            marginBottom="10vh"
            overflowX="visible"
            position="relative"
        >
            <Heading 
                as="h2" 
                size="lg"
                minH="8vh"
                width="85vw" 
                textAlign="left" 
                marginBottom="2vh"
                bg="rgba(24, 24, 32, 0.4)"
                border="0.15vw solid rgba(0, 0, 0, 0.3)"
                borderRadius="15px"
                paddingY="2vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
            > Recomendaciones </Heading>

            <Splide
                options={{
                    type: LOOP,
                    perPage: 5,
                    breakpoints: {
                      1024: { perPage: 4 },
                      768: { perPage: 3 },
                      640: { perPage: 2 },
                    },
                    gap: "1vw",
                    pagination: false,
                    arrows: true,
                    focus: "left",
                }}
                aria-labelledby="reactivity-example-heading"
            >
                {data.libros?.map((libro) => {
                if (libro.caratula != null)  return (
                    <SplideSlide key={libro.id}>
                        <Link 
                            href={`/pdrl?id=${libro.id}`}
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