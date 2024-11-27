"use client";
import { useState } from "react";
import Link from "next/link";

const BotonCatalogo = () => {

    return (
        <Link href="/catalogo">
            <button 
                className="boton botonCatalogo"
            >⬇️ Ir al catálogo ⬇️</button>
        </Link>
    );
}

export default BotonCatalogo;