export default function BookCard({ libro }) {
    const portadaLib = (libro.item.portada != undefined) ? libro.item.portada : "https://placehold.co/150x240";

    return(
        <div className="book-card">
            <img src={portadaLib} className="portada" alt={libro.item.titulo}></img>
            <div className="pie">
            <p className="titulo">{libro.item.titulo}</p>
            <p className="autor">{libro.item.autores}</p>
            </div>
        </div>
    )
};