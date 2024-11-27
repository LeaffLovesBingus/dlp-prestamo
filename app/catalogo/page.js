"use client";
import BarraBusqueda from "../components/portada/BarraDeBusqueda";
import Logotipo from "../components/portada/Logotipo";
import BotonDonacion from "../components/portada/BotonDonar";
import Vitrina from "../components/catalogo/Vitrina";
import Tablero from "../components/catalogo/Tablero";
import BotonVolver from "../components/catalogo/BotonVolver";
import FooterCatalogo from "../components/catalogo/FooterCatalogo";
import { Box } from "@chakra-ui/react";


export default function catalogo() {

    return (
        <>
            <header className="headerCatalogo">
                <Box
                    display="flex"
                    justifyContent="space-between"
                >
                    <Box
                        borderRadius="15px"
                        paddingX="2vw"
                        maxW="30vw"
                        marginBottom="5vh"
                        bg="rgba(0, 0, 0, 0.3)"
                        border="0.15vw solid rgba(0, 0, 0, 0.3)"
                    >
                        <Logotipo isPortada={false}/>
                    </Box>
                    <BotonVolver tipo={2}/>
                </Box>
                

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <BotonDonacion/>
                    <BarraBusqueda/>
                </Box>
                
            </header>

            <Vitrina/>
            <Tablero/>

            <FooterCatalogo/>
        </>
    );
}