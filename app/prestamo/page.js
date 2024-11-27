"use client";
import "./styles_catalogo/globals_prestamo.css"
import Image from 'next/image';
import Link from 'next/link';
  
export default function Home() {

  /* acá deberiamos recuperar el titulo del líbro con su respectiva info
  mientras, tengamos variables de ejemplo... */

  /*implemetar el get del libro con su respectivo id...*/
  
  let bookTitle = "Un libro deaa";
  let bookAutor = "autor";
  let bookGenere = "género";
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

      <header className='header'>

        <div className="titleContainer">
          <div className="imageWrapper-01">
            <Image
              className="logo"
              src="/assets/logo.png"
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
          <h1 className="title">DLP Library</h1>
        </div>

        <Link className='ir-a-catalogo' href='/'>
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
              src="/assets/papelucho.png"
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </div>
        </div>

        <div className="bookInfo">
          <div className='nombreGenero'>
            <h1 className='nameBook'>{bookTitle}</h1>
            <h1 className='detailsBook'>{bookAutor} - {bookGenere}</h1>
          </div>

          <div className='existencias'>
            <h1>{existencias} existencias</h1>
          </div>

          <div className='intereses'>
              <h1>A {intereses} personas les interesa este libro</h1>
          </div>

        </div>
        
        <div className='solicitud'>

          <Link href="/pedir" style={{ textDecoration: 'none' }}>
            <button className='pedir' onClick={() => handleClick(1)}>
              <h1>Pedir</h1>
            </button>
          </Link>

          <button className='meInteresa'>
            <h1>Me Interesa</h1>
          </button>

          <Link href="/devolver" style={{ textDecoration: 'none' }}>
            <button className='devolver' onClick={() => handleClick(2)}>
                <h1>Devolver</h1>
            </button>
          </Link>

        </div>

      </div>
        
    </div>
    );
  }
  