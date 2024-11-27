"use client";
import BarraBusqueda from "./components/portada/BarraDeBusqueda";
import BotonCatalogo from "./components/portada/BotonCatalogo";
import Logotipo from "./components/portada/Logotipo";
import BotonDonacion from "./components/portada/BotonDonar";
import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

// 𝓘'𝓶 𝓯𝓮𝓮𝓵𝓲𝓷𝓰 𝓴𝓲𝓷𝓭𝓪 𝓯𝓻𝓮𝓪𝓴𝔂
  
export default function Home() {

    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(newNumber);
    };

    useEffect(() => {
        generateRandomNumber();
    }, []);

    return (
    <>  
        <header className="header">
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <BotonDonacion/>
                <BarraBusqueda/>
            </Box>
        </header>

        <Box
            width="100vw"
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Box
                bg="rgba(0, 0, 0, 0.2)"
                border="0.15vw solid rgba(0, 0, 0, 0.3)"
                borderRadius="15px"
                width="50vw"
                paddingX="2vw"
            >
                <Logotipo isPortada={true}/>
            </Box>
            
            <h1 className="mentira">
                { `${randomNumber} personas están leyendo ahora mismo` }
            </h1>
        </Box>

        <footer className="footerPortada">
            <BotonCatalogo/>
        </footer>
    </>
    );
}