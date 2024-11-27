"use client";
import { Box } from "@chakra-ui/react";

const FooterCatalogo = () => {
    return (
        <Box
            as="footer"
            bg="#404267"
            marginTop="5vh"
            color="white"
            width="100vw"
            height="80vh"
            position="relative"
            bottom="0"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            paddingX="5vw"
        >
            <Box
                width="70vh"
            >
                <p>Gracias por usar la librería autogestionada DLP library, este proyecto fue liderado por el profesor Julio Daniel Guerra Hollstein y desarrollado por los estudiantes del curso de taller de construcción de software año 2024 semestre 2</p>
            </Box>

            {/* <Box
                width="70vh"
            >
                <p>Insertar Parrafo</p>
            </Box> */}
        </Box>
    );
}

export default FooterCatalogo;