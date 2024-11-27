"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { fetchLibro } from '../endpoint';
import './pdrlstyles.css';
import Router from 'next/router';
  
const InicioPedir = () => {

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


  const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

  return (
        <div className='conteiner'>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=keyboard_double_arrow_left" />

            <header className='header'>

                <div className="titleContainer">
                <div className="imageWrapper-01">
                    <Image
                    className="logo"
                    src = "/assets/logoBlanco.png"
                    layout="fill"
                    objectFit="contain"
                    draggable={false}
                    />
                </div>
                </div>

                <Link className='ir-a-catalogo' href='https://dlp-prestamo.vercel.app/catalogo/'>
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
                        src = {`data:image/jpeg;base64,${(data?.caratula)}`} 
                        layout="fill"
                        objectFit="cover"
                        draggable={false}
                        />
                    </div>
                </div>

                <div className="formulario">
                    <h1 className='reserva-header'>reserva para: </h1>
                    <div className='info-Book'>
                        <div className='nombreGenero-pedir'>
                            <h1 className='nameBook'>{data?.titulo}</h1>
                            <h1 className='detailsBook'>{data?.autores} - #{data?.tags[0]}</h1>
                        </div>
                        <div className='existencias-pedir'>
                            <h1 className='existenciasBook'>existencias</h1>
                        </div>
                    </div>

                    <h1 className='correo-label'>Correo Electrónico: </h1>

                    <input
                        className='input-correo'
                        id="textBox"
                        type="text"
                        placeholder="micorreo@ejemplo.com"
                        value={inputValue}
                        onChange={handleChange}
                        autoComplete='off'
                        style={{outline:'none'}}
                    />

                    <h1 className='estado-reserva-label'>A este correo le estaremos actualizando
                    sobre el estado de su reserva. </h1>

                    <div className='checkbox-container'>
                        <input type="checkbox" id="checkTerminos" className='checkTerminos'/>
                        <label className='check-box-label'>Acepto los términos y condiciones</label>
                    </div>

                    <h1 className='terminos-label'>
                        Si desea revisar estos términos, haga click{' '}
                        <Link href="" className='link-termino'>
                            aquí
                        </Link>
                    </h1>

                    <Link href='../pdrl/pedir/confirmacion' className='defPedir'>
                        <button className='pedir-01'>
                            <h1>Pedir</h1>
                        </button>
                    </Link>

                </div>

            </div>
        
        </div>
    );
}

export default InicioPedir;