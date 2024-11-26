import Image from "next/image";

const Logotipo = () => {
    return (
        <Image
            className = "logotipo"
            src = "/assets/logoBlanco.png"
            width = {500}
            height = {250}
            draggable = "false"
        />
    );
}

export default Logotipo;