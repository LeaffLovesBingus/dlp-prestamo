import BarraBusqueda from "../components/portada/BarraDeBusqueda";
import Logotipo from "../components/portada/Logotipo";
import BotonDonacion from "../components/portada/BotonDonar";
import Vitrina from "../components/catalogo/Vitrina";
import Tablero from "../components/catalogo/Tablero";
import BotonVolver from "../components/catalogo/BotonVolver";
import Link from "next/link";
import { Box } from "@chakra-ui/react";


export default function catalogo() {

    return (
        <>
            <header className="header">
                <Logotipo/>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Box>
                        <BotonDonacion/>
                        <BotonVolver/>
                    </Box>
                    <BarraBusqueda/>
                </Box>
                
            </header>

            <Vitrina/>
            <Tablero/>

            <footer className="footer">
                *ABOUT*
            </footer>
        </>
    );
}