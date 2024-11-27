"use client";
import { useState } from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

const BarraBusqueda = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (event) => {
        /*hace algo*/ 
        setBusqueda(event.target.value);
        console.log(event.target.value);
    };

    return (
        <Box
            display="flex"
            flexDirection="row"
        >
            <input 
                className="boton busqueda"
                type="search"
                placeholder="Buscar libros..."
                value={busqueda}
                onChange={handleSearch}
            />
            <Link href="404">
                <button className="boton botonBusqueda">🔍</button>
            </Link>
        </Box>
    );
}

export default BarraBusqueda;