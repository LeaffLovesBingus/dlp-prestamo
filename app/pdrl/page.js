"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { fetchLibro, prestamoDevolucion } from '../components/endpoint.js';
import { Suspense } from 'react';
import InicioPdrl from '../components/pdrl/InicioPdrl.js';

function GetLibro() {
    const searchParams = useSearchParams();
    let id = searchParams.get("id");

    const [ data, setData ] = useState(null);
    useEffect(
        () => {
            fetchLibro(id).then((res) => (setData(res.libros[0])))
        }, []
    );

    return(
        <div>
            {data?.titulo}
            {data?.autores}
            {data?.caratula}
        </div>
    )
}

export default function Pdrl() {
    const searchParams = useSearchParams();
    let id = searchParams.get("id");

    const [ data, setData ] = useState(null);
    useEffect(
        () => {
            fetchLibro(id).then((res) => (setData(res.libros[0])))
        }, []
    );

    let bookTitle = data?.titulo;
    let bookAutor = data?.autor;
    let bookGenere = data?.tags[0];
    let existencias = 0;
    let intereses = 0;

    // recupero la interacción
    const handleClick = (buttonId) => {
        /*1 -> pedir, 2-> devolver */
        switch (buttonId) {
            case 1:
            console.log("Pedir");
            break;
            case 2:
            console.log("Devolver");
            break;
        }
    };

    return(
        <Suspense>
            <InicioPdrl/>
        </Suspense>
    )
}
