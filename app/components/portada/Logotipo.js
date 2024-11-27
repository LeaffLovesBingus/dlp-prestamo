import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Logotipo = ({ isPortada }) => {
    return (
        <Box
            style={{
                maxHeight: isPortada ? "40vh" : "30vh",
                height: "auto",
            }}
        >
            <Image
                className = "logotipo"
                src = "/assets/logoBlanco.png"
                width = {500}
                height = {250}
                layout="responsive"
                draggable = "false"
            />
        </Box>
        
    );
}

export default Logotipo;