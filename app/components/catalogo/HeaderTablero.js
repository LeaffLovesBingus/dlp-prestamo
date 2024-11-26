"use client";
import Filtros from "./TabFiltros";
import { Box, Heading } from "@chakra-ui/react";


const HeaderTablero = () => {

    return (
        <Box
            mt="5vh"
            position="relative"
            bg="rgba(0, 0, 0, 0.3)"
            minH="12vh"
            w="85vw"
            borderRadius="15px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px="6vw"
        >
            <Heading 
                as="h1" 
                size="lg" 
                textAlign="left"
            >
                Todos los libros
            </Heading>

            <Filtros/> 

        </Box>
    );
}

export default HeaderTablero;