"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { fetchLibro, prestamoDevolucion, cambioAPI } from '../endpoint';
  
const InicioPdrl = () => {

  /* acá deberiamos recuperar el titulo del líbro con su respectiva info
  mientras, tengamos variables de ejemplo... */

  const searchParams = useSearchParams();
    let id = searchParams.get("id");

    const [ data, setData ] = useState(null);
    useEffect(
        () => {
            fetchLibro(id).then((res) => (setData(res.libros[0])))
        }, []
    );

  /*implemetar el get del libro con su respectivo id...*/
  
  /* let bookTitle = data?.titulo;
  let bookAutor = data?.autores;
  let bookGenre = data?.tags;
  */
  let existencias = 0;
  let intereses = 0;

  const handleClick = (buttonId) => {
    /*1 -> pedir, 2-> devolver */
    switch (buttonId) {
      case 1:
        console.log("Pedir");
        break;
      case 2:
        console.log("Devolver");
        prestamoDevolucion(id, "Anonimo", "DEVOLUCION");

        //cambioAPI({
        //  id: id,
        //  prestado: false
        //}); 
      
        
        break;
    }
  };

  return (
    <div className='conteiner'>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=keyboard_double_arrow_left" />

      <header className='headerPrestamo'>

        <div className="titleContainer">
          <div className="imageWrapper-01">
            <Image
              className="logo"
              src="/assets/logoBlanco.png"
              layout="fill"
              objectFit="contain"
              draggable={false}
            />
          </div>
        </div>

        <Link className='ir-a-catalogo' href='/catalogo'>
          <div className='icon'>
            <span className="material-symbols-outlined">keyboard_double_arrow_left</span>Ir al Catálogo Original
          </div>
        </Link>  

      </header>

      <div className="allInfo">
        <div className="bookImage">
          <div className="imageWrapper-02">
            <Image
              className="caratula"
              src= {`data:image/jpeg;base64,${(data?.caratula)}`}
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
        </div>

        <div className="bookInfo">
          <div className='nombreGenero'>
            <h1 className='nameBook'>{data?.titulo}</h1>
            <h1 className='detailsBook'>{data?.autores} - #{data?.tags[0]}</h1>
          </div>

          <div className='existencias'>
            <h1>{(data?.prestado == false) ? "Este libro se encuentra disponible" : "Este libro está registrado como prestado" }</h1>
          </div>

          <div className='intereses'>
              <h1>A {intereses} personas les interesa este libro</h1>
          </div>

        </div>
        
        <div className='solicitud'>

          <Link href={`/pedir?id=${id}`} style={{ textDecoration: 'none' }}>
            <button className='pdrlButton pedir' onClick={() => handleClick(1)}>
              <h1>Pedir</h1>
            </button>
          </Link>

          <button className='pdrlButton meInteresa'>
            <h1>Me Interesa</h1>
          </button>

          <Link href={`/devolver?id=${id}`} style={{ textDecoration: 'none' }}>
            <button className='pdrlButton devolver' onClick={() => handleClick(2)}>
                <h1>Devolver</h1>
            </button>
          </Link>

        </div>

      </div>
        
    </div>
    );
}

export default InicioPdrl;