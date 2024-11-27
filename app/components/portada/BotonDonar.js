"use client";
import { useState } from "react";
import Link from "next/link";

const BotonDonacion = () => {

    return (
        <Link href="https://dlp-donacion.vercel.app">
            <button 
                className="boton botonDonar"
            >Donar</button>
        </Link>
    );
}

export default BotonDonacion;