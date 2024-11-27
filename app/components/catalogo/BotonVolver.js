"use client";
import Link from "next/link";

const BotonVolver = ({ tipo }) => {

    if ( tipo === 1 ) return (
        <Link href="/">
           <button
                className="boton botonVolver"
            >Volver</button>
        </Link>
    );
    else return (
        <Link href="/">
           <button
                className="boton botonVolver2"
            >Volver</button>
        </Link>
    );
}

export default BotonVolver;