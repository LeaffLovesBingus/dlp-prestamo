"use client";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TarjetaLibro from "./TarjetaLibro";
import { fetchCatalogo } from "../endpoint";
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
            bg="rgba(0, 0, 0, 0.3)"
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
                templateColumns="repeat(5, 1fr)"
                rowGap="3vw"
                columnGap="3vh"
            >
                {data.libros?.map((libro) => {
                    return (
                        <Link href={`https://dlp-prestamo.vercel.app/drlp/libro?=${libro.id}`}>
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