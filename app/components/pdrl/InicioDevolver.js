"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { fetchLibro } from '../endpoint';
  
const InicioDevolver = () => {

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
      
      <div className="feedback-devolver">
        <h1 className="messageBox" >
          Muchas gracias por devolver el libro!
        </h1>
        Ya puede volver al Catálogo principal
      </div>      
        
    </div>
    );
}

export default InicioDevolver;