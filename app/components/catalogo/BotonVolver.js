"use client";
import { useRouter } from "next/navigation";

const BotonVolver = ({ tipo }) => {
    const router = useRouter();

    const handleVolver = () => {
        router.back();
    };

    if ( tipo === 1 ) return (
        <button
            className="boton botonVolver"
            onClick={handleVolver}
        >
            Volver
        </button>
    );
    else return (
        <button
            className="boton botonVolver2"
            onClick={handleVolver}
        >
            Volver
        </button>
    );
};

export default BotonVolver;
