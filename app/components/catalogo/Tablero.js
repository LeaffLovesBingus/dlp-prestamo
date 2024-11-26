"use client";
import { Box } from "@chakra-ui/react";
import HeaderTablero from "./HeaderTablero";
import GrillaTablero from "./GrillaTablero";


const Tablero = () => {
    return (
        <>  
            <Box
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <HeaderTablero/>
            </Box>

            <Box mt="5vh" >
                <Box
                    w="85vw"
                    h="110vh"
                    paddingX="5vw"
                    paddingY="8vh"
                    mx="auto"
                    mt="0vh"
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