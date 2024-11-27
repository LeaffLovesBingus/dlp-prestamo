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

export default function Pdrl(){
    return(
        <Suspense>
            <InicioPdrl/>
        </Suspense>
    )
}
