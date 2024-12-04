"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { fetchLibro } from '../endpoint';
  
const Confirmacion = () => {

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
          ¡Muchas gracias por pedir este libro!
        </h1>
        Recuerda devolverlo dentro de 15 días
      </div>      
        
    </div>
    );
}

export default Confirmacion;