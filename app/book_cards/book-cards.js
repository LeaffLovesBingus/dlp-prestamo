export default function BookCard({ libro }) {
    const portadaLib = (libro.item.caratula != "") ? libro.item.caratula : "https://placehold.co/150x240";

    return(
        <a href={`/pdrl/${libro.item.id}`}>
        <div className="book-card">
            <img src={portadaLib} className="portada" alt={libro.item.titulo}></img>
            <div className="pie">
            <p className="titulo">{libro.item.titulo}</p>
            <p className="autor">{libro.item.autores}</p>
            </div>
        </div>
        </a>
    )
};