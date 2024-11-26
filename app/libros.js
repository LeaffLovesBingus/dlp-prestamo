// https://github.com/vercel/next.js/issues/48344#issuecomment-1653612812
'use client'
import { fetchLibro } from "./api/fetch_libro";
import { fetchCatalogo } from "./fetch_libros";
import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { LOOP } from '@splidejs/splide';

  
// const ListOfBooks = async () => {
//     const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse
//     //const data = ejemplo.libros;

//     return (
//       <div className="wrapper">
//       <h2 id="basic-example-heading">Recomendaciones</h2>
//       {
//       data?.map((books) =>(
//         <div className="book-card" key={books.id}>
//           <div className="pie">
//             <img src={`data:image/jpeg;base64,${(books.caratula)}`} width="100px" height="180px"/>
//             <p className="titulo">{books.titulo}</p>
//             <p className="autor">{books.autores}</p>
//           </div>
//         </div>
//       ))
//       }
//       </div>
//   );
// };

// export default ListOfBooks;

function libro_id(id, libros){
  return libros.find(libro => libro.id === id);
}

function ListOfBooks() {
  // const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse
  //const data = ejemplo.libros;
  const [data, setData] = useState([])
  useEffect(() => {
    fetchCatalogo("/api/libros").then((res) => setData(res));
    
  },[])

  const handleClick = async () => {
    const res = libro_id(1, data.libros);
    console.log(res);
  }
  
  return (
    <> <button onClick={handleClick}>ACa</button>

      <div className="wrapper">
      <h2 id="basic-example-heading">Recomendaciones</h2>
        <Splide
          options={{
            type: LOOP,
            perPage: 6,
            gap: '1rem',
          }}
          aria-labelledby="reactivity-example-heading"
        >
          {data.libros?.map((books) => (
            <SplideSlide key={books.id}>
              <div className="book-card">
                <div className="pie">
                  <img src={`data:image/jpeg;base64,${(books.caratula)}`} width="100px" height="180px" />
                  <p className="titulo">{books.titulo}</p>
                  <p className="autor">{books.autores}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
    </div>
    </>
);
};

export default ListOfBooks;