"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { fetchLibro } from '../components/endpoint';

export default function Pdrl() {
    const searchParams = useSearchParams();

    const [id, setId] = useState(null);
    useEffect(() => {
        setId(searchParams.get("id"));
    }, [searchParams]);

    const [data, setData] = useState(null);

    useEffect(() => {
        if (id) {
            fetchLibro(id).then((res) => setData(res.libros[0]));
        }
    }, [id]);

    if (!id) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            {data?(
                <>
                    <h1>{data.titulo}</h1>
                    <p>{data.autores}</p>
                </>
            ) : (
                <p>Cargando datos del libro...</p>
            )}
        </div>
    );
}
