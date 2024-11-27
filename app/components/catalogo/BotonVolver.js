"use client";
import Link from "next/link";

const BotonVolver = () => {
    return (
        <Link href="https://dlp-prestamo.vercel.app">
            <button
                className="boton backButton"
            >Volver</button>
        </Link>
    );
}

export default BotonVolver;