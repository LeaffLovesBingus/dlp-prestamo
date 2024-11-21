"use client";
import { Box, Heading } from "@chakra-ui/react";


const Tablero = () => {
    return (
        <Box mt="10vh" >
            <Heading 
                as="h2" 
                size="lg" 
                textAlign="left" 
                mb={4}
            >
                Todos los libros
            </Heading>
            <Box
                maxW="90vw"
                mx="auto"
                mt={8}
                overflowY="scroll"
                position="relative"
                bg="rgba(0, 0, 0, 0.3)"
                minH="60vh"
                borderRadius="15px"
                sx={{
                    '::-webkit-scrollbar': { display: 'none' },
                    'msOverflowStyle': 'none',
                    'scrollbarWidth': 'none',
                }}
            >

            </Box>
        </Box>
    );
}

export default Tablero;