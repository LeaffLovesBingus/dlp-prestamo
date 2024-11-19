// https://github.com/vercel/next.js/issues/48344#issuecomment-1653612812
'use client'
import fetchData from ".//api";
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { LOOP } from '@splidejs/splide';

  
const ListOfBooks = async () => {
    const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse
    //const dataParsed = await dconsole.log('Fetching data...');  

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
        {
            data?.map((books) =>(
            <SplideSlide>
              <div className="book-card">
                <div className="pie">
                  <img src={`data:image/jpeg;base64,${(books.caratula)}`} width="100px" height="180px"/>
                  <p className="titulo">{books.titulo}</p>
                  <p className="autor">{books.autores}</p>
                </div>
              </div>
            </SplideSlide>
        ) ) }
      </Splide>
    </div>
  );
  };

  export default ListOfBooks;