'use client';
import { useRouter } from 'next/navigation';


export default function BookCard({ libro }) {
    const portadaLib = (libro.item.caratula != "") ? libro.item.caratula : "https://placehold.co/150x240";
    const router = useRouter();

    return(
        <div className="book-card" onClick={() => router.push(`/pdrl/${libro.item.id}`)}>
            <img src={portadaLib} className="portada" alt={libro.item.titulo}></img>
            <div className="pie">
            <p className="titulo">{libro.item.titulo}</p>
            <p className="autor">{libro.item.autores}</p>
            </div>
        </div>
    )
};