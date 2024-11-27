"use client";
import Filtros from "./TabFiltros";
import { Box, Heading } from "@chakra-ui/react";


const HeaderTablero = () => {

    return (
        <Box
            marginTop="2vh"
            position="relative"
            bg="rgba(24, 24, 32, 0.4)"
            border="0.15vw solid rgba(0, 0, 0, 0.3)"
            minH="10vh"
            width="85vw"
            borderRadius="15px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            // paddingX="6vw"
        >
            <Heading 
                as="h1" 
                size="lg" 
                textAlign="left"
            >
                Todos los libros
            </Heading>

            {/* <Filtros/>  */}

        </Box>
    );
}

export default HeaderTablero;