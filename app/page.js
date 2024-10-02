export const metadata = {
    title: "Home",
    description: "Esta es la página de inicio",
};
  
export default function Home() {
    return (
      <>
        <div className="container">
        <h1 className="title">DLP Library! :33</h1>
        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar libros..."
            className="search-input"
          />
          <button className="search-button">Buscar</button>
        </div>

        {/* Contenedor del catálogo */}
        <div className="catalogo">
          {/* Boceto de las cajas que contendrán los libros */}
          <div className="book-card">
            <h2 className="book-title">Título del Libro</h2>
            <p className="book-author">Autor del Libro</p>
            <p className="book-description">Descripción breve del libro.</p>
          </div>

          <div className="book-card">
            <h2 className="book-title">Título del Libro</h2>
            <p className="book-author">Autor del Libro</p>
            <p className="book-description">Descripción breve del libro.</p>
          </div>

          <div className="book-card">
            <h2 className="book-title">Título del Libro</h2>
            <p className="book-author">Autor del Libro</p>
            <p className="book-description">Descripción breve del libro.</p>
          </div>

          {/* Añadir más tarjetas de libros según sea necesario */}
        </div>
      </div>
      </>
    );
  }
  