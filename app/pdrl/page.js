"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { fetchLibro } from '../components/endpoint';

export default function Pdrl() {
    const searchParams = useSearchParams();
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchedId = searchParams.get("id");
        setId(fetchedId);
    }, [searchParams]);

    useEffect(() => {
        if (id) {
            fetchLibro(id).then((res) => setData(res.libros[0]));
        }
    }, [id]);

    if (!id) {
        return <p>Cargando...</p>;
    }

    if (!data) {
        return <p>Cargando datos del libro...</p>;
    }

    return (
        <div>
            <h1>{data.titulo}</h1>
            <p>{data.autores}</p>
        </div>
    );
}
