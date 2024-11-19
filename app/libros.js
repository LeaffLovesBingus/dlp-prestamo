// https://github.com/vercel/next.js/issues/48344#issuecomment-1653612812
import fetchData from ".//api";
import React from 'react';

  
const ListOfBooks = async () => {
    const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse

    return (
      <div className="wrapper">
      <h2 id="basic-example-heading">Recomendaciones</h2>
        {
          data.libros?.map(books =>(
              <div className="book-card">
                <div className="pie">
                  <img src={`data:image/jpeg;base64,${(books.caratula)}`} width="100px" height="180px"/>
                  <p className="titulo">{books.titulo}</p>
                  <p className="autor">{books.autores}</p>
                </div>
              </div>
          ))};
    </div>
    );
  };

  export default ListOfBooks;