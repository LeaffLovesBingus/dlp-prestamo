"use client";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

function TarjetaLibro({ infoLibro }){

    //console.log(`Libro: ${infoLibro.titulo}`)

    return (
        <Card
            borderRadius="md" 
            boxShadow="md" 
            overflow="hidden" 
            _hover={{ transform: "scale(1.02)", transition: "0.3s" }}

        >
            <CardBody>
                <img
                    className="caratula"
                    src = {`data:image/jpeg;base64,${(infoLibro.caratula)}`} 
                    width="100%" 
                    height="300px" 
                    objectfit="cover"
                />
            </CardBody>
            <CardFooter className="labelLibro">
                {infoLibro.titulo}
            </CardFooter>
        </Card>
    );
}

export default TarjetaLibro;