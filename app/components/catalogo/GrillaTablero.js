"use client";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TarjetaLibro from "./TarjetaLibro";
import { fetchCatalogo } from "../endpoint.js";
import Link from "next/link";


const GrillaTablero = () => {

    const [ data, setData ] = useState([]);
    useEffect(
        () => {
            fetchCatalogo().then((res) => setData(res));
        }, []
    );

    return (
        <Box
            w="85vw"
            h="93vh"
            bg="rgba(24, 24, 32, 0.4)"
            border="0.15vw solid rgba(0, 0, 0, 0.3)"
            paddingY="5vh"
            overflowY="scroll"
            overflowX="hidden"
            borderRadius="15px"
            position="relative"
            display="flex"
            justifyContent="center"
            // sx={{
            //     '::-webkit-scrollbar': { display: 'none' },
            //     'msOverflowStyle': 'none',
            //     'scrollbarWidth': 'none',
            // }}
        >
            <Grid
                templateColumns={{
                    base: "repeat(3, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                    xl: "repeat(5, 1fr)",
                }}
                rowGap="3vw"
                columnGap="3vh"
            >
                {data.libros?.map((libro) => {
                    return (
                        <Link 
                            href={`/pdrl?id=${libro.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <GridItem w='100%' h='100%' key={libro.id}>
                                <TarjetaLibro infoLibro={libro}/>
                            </GridItem>
                        </Link>
                    );
                })}
                

            </Grid>
        </Box>
    );
}

export default GrillaTablero;