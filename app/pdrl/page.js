"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { fetchLibro, prestamoDevolucion } from '../components/endpoint.js';
import { Suspense } from 'react';

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
        </div>
    )
}

export default function Pdrl() {
    return(
        <Suspense>
            <GetLibro/>
        </Suspense>
    )
}
