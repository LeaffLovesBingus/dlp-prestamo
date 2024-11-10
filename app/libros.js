// https://github.com/vercel/next.js/issues/48344#issuecomment-1653612812
'use client'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const fetchData = async () => {
    //const res = await import(<url-servidor>/libros?id=[id]), { method: "GET"});
    const res = await import(".//api-test/ejemplo-1", { method: "GET" });
    const data = res.libros;
    return data;
  };
  
const ListOfBooks = async () => {
    const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse
    
    return (
      <div className="wrapper">
      <h2 id="basic-example-heading">Basic Example</h2>

      <Splide
        options={ {  
          perPage: 6,
          height : '10rem',
          rewind : true,
          gap    : '1rem',
          direction: 'ltr',
        } }
        aria-labelledby="reactivity-example-heading"
      >
        {data.length > 0 &&
            data.map((libros) =>(
            <SplideSlide>
              <div className="book-card">
                <div className="pie">
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