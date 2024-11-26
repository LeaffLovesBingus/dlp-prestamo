"use client";
import { useState } from "react";

const BarraBusqueda = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleSearch = (event) => {
        /*hace algo*/ 
        setBusqueda(event.target.value);
        console.log(event.target.value);
    };

    return (
        <>
            <input 
                className="busqueda"
                type="search"
                placeholder="Buscar libros"
                value={busqueda}
                onChange={handleSearch}
            />
            <button className="botonBusqueda">🔍</button>
        </>
    );
}

export default BarraBusqueda;