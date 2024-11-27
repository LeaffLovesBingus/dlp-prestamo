"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from "react";
import { fetchLibro } from '../components/endpoint';

export default function Pdrl() {
    const searchParams = useSearchParams();
    let id = searchParams.get("id");

    const [ data, setData ] = useState(null);
    useEffect(
        () => {
            fetchLibro(id).then((res) => (setData(res.libros[0])))
        }, []
    );

    return(
        <Suspense>
            <div>
                {data?.titulo}
                {data?.autores}
            </div>
        </Suspense>
    )
};