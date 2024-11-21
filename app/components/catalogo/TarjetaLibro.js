"use client";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

function TarjetaLibro({ infoLibro }){

    //console.log(`Libro: ${infoLibro.titulo}`)

    return (
        <Card
            borderRadius="md" 
            boxShadow="md" 
            overflow="hidden"
            p={4}
            _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
        >
            <CardBody>
                <img
                    className="caratula"
                    src = {`data:image/jpeg;base64,${(infoLibro.caratula)}`} 
                    style={{
                        width: "100%",
                        height: "45vh",
                        objectFit: "cover",
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
                {infoLibro.titulo}
            </CardFooter>
        </Card>
    );
}

export default TarjetaLibro;