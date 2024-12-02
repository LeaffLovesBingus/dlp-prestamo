"use client";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import getCaratulaPlaceholder from "@/public/assets/caratula-placeholder";

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
            width="100%"
            padding="1vw"
            bg="rgba(0, 0, 0, 0.3)"
            border="0.15vw solid rgba(0, 0, 0, 0.3)"
            height="50vh"
            
            _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
        >
            <CardBody
                height="40vh"
            >
                <img
                    className="caratula"
                    src = {infoLibro.caratula !== null?`data:image/jpeg;base64,${(infoLibro.caratula)}`: getCaratulaPlaceholder()} 
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px"
                    }}
                />
            </CardBody>
            <CardFooter 
                className="labelLibro"
                display="flex"
                justifyContent="center"
                alignItems=""
                marginTop="0.5vh"
                overflowY="hidden"
            >
                {infoLibro.titulo===""?"[SIN NOMBRE]":infoLibro.titulo}
            </CardFooter>
        </Card>
    );
}

export default TarjetaLibro;