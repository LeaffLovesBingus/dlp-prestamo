import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Logotipo = ({ isPortada }) => {
    if (isPortada) return (
        <Box
            style={{
                maxHeight: "40vh",
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
    else return (
        <Box
            style={{
                maxHeight: "30vh",
                height: "auto",
            }}
        >
            <Link href="/" legacyBehavior>
                <a>
                    <Image
                        className = "logotipo"
                        src = "/assets/logoBlanco.png"
                        width = {500}
                        height = {250}
                        layout="responsive"
                        draggable = "false"
                    />
                </a>
            </Link>
        </Box>
        
    );
}

export default Logotipo;