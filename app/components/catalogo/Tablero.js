"use client";
import { Box } from "@chakra-ui/react";
import HeaderTablero from "./HeaderTablero";
import GrillaTablero from "./GrillaTablero";


const Tablero = () => {
    return (
        <>
            <HeaderTablero/>

            <Box mt="5vh" >
                <Box
                    w="90vw"
                    h="110vh"
                    paddingX="5vw"
                    paddingY="8vh"
                    mx="auto"
                    mt={8}
                    position="relative"
                    bg="rgba(0, 0, 0, 0.3)"
                    minH="50vh"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <GrillaTablero/>
                </Box>
            </Box>
        </>
    );
}

export default Tablero;