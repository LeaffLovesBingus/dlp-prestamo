"use client";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

function TarjetaLibro({ infoLibro }){

    //console.log(`Libro: ${infoLibro.titulo}`)

    return (
        <Card
            borderRadius="15px" 
            boxShadow="outline" 
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="1vw"
            bg="rgba(0, 0, 0, 0.3)"
            _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
        >
            <CardBody>
                <img
                    className="caratula"
                    src = {`data:image/jpeg;base64,${(infoLibro.caratula)}`} 
                    style={{
                        width: "10vw",
                        height: "30vh",
                        objectFit: "fill",
                        borderRadius: "10px"
                    }}
                />
            </CardBody>
            <CardFooter 
                className="labelLibro"
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop="0.5vh"
            >
                {infoLibro.titulo===""?"[SIN NOMBRE]":infoLibro.titulo}
            </CardFooter>
        </Card>
    );
}

export default TarjetaLibro;