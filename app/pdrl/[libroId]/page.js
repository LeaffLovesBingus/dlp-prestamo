"use client";
import { usePathname } from "next/navigation";
import libros from "../../libros.json";

export default function Pdrl() {
    const param = usePathname().replace("/pdrl/", "");
    const libro = libros.find((item) => item.id == param);
    
    return(
        <>
        <div className="container">
            <div className="pdrl">
                <img src={libro.caratula} className="portada" alt={libro.titulo}></img>
                <div className="info-libro">{libro.titulo} {libro.autores}</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <button className="btn">Pedir</button>
                    <button className="btn">Devolver</button>
                    <button className="btn">Me interesa</button>
                </div>
            </div>
        </div>
        </>
    )
}