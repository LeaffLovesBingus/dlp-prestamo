// https://github.com/vercel/next.js/issues/48344#issuecomment-1653612812
'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { LOOP } from '@splidejs/splide';

const fetchData = async () => {
    //const res = await import("https://dlp-api/libros?id=", { method: "GET"});
    const res = await import(".//api-test/ejemplo-1", { method: "GET" });
    const data = res.libros;
    return data;
  };
  
const ListOfBooks = async () => {
    const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse
    
    return (
      <div className="wrapper">
      <h2 id="basic-example-heading">Recomendaciones</h2>

      <Splide
        options={ {
          type: LOOP,
          perPage: 6,
          gap    : '1rem',
        } }
        aria-labelledby="reactivity-example-heading"
      >
        {data.length > 0 &&
            data.map((libros) =>(
            <SplideSlide>
              <div className="book-card">
                <div className="pie">
                  <img src={`data:image/jpeg;base64,${(libros.caratula)}`} width="100px" height="180px"/>
                  <p className="titulo">{libros.titulo}</p>
                  <p className="autor">{libros.autores}</p>
                </div>
              </div>
            </SplideSlide>
        ) ) }
      </Splide>
    </div>
  );
  };

  export default ListOfBooks;