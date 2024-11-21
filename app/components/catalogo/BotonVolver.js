"use client";
import Link from "next/link";

const BotonVolver = () => {
    return (
        <Link href="http://localhost:3000">
            <button
                className="boton backButton"
            >Volver</button>
        </Link>
    );
}

export default BotonVolver;