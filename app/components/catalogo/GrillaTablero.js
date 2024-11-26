"use client";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import TarjetaLibro from "./TarjetaLibro";
import libros from "../libros.json"


const GrillaTablero = () => {

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
                {libros?.map((libro, index) => {
                    return (
                        <GridItem w='100%' h='100%' key={index}>
                            <TarjetaLibro infoLibro={libro}/>
                        </GridItem>
                    );
                })}
                

            </Grid>
        </Box>
    );
}

export default GrillaTablero;