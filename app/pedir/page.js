"use client";

import Image from 'next/image';
import {useState} from 'react';
import Link from 'next/link';

export default function Home() {

    let bookTitle = "Alicia en el país de la";
    let bookAutor = "autor";
    let bookGenere = "género";
    let existencias = 0;

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        
        <div className='conteiner'>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_upward_alt" />

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

                <div className='ir-a-catalogo'>
                <button1 className='icon'>
                    <span className="material-symbols-outlined">arrow_upward_alt</span> Ir al Catálogo Original
                </button1>
                </div>  
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

                <div className="formulario">
                    <h1 className='reserva-header'>reserva para: </h1>
                    <div className='info-Book'>
                        <div className='nombreGenero-pedir'>
                            <h1 className='nameBook'>{bookTitle}</h1>
                            <h1 className='detailsBook'>{bookAutor} - {bookGenere}</h1>
                        </div>
                        <div className='existencias-pedir'>
                            <h1 className='existenciasBook'>{existencias} existencias</h1>
                        </div>
                    </div>

                    <h1 className='correo-label'>Correo Electrónico: </h1>

                    <input
                        className='input-correo'
                        id="textBox"
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        autoComplete='off'
                        style={{outline:'none'}}
                    />

                    <h1 className='estado-reserva-label'>A este correo le estaremos actualizando
                    sobre el estado de su reserva. </h1>

                    <input type="checkbox" id="terminos-y-condiciones" className='check-teminos'/>
                    <label htmlFor="terminos-y-condiciones" className='check-box-label'>Acepto los términos y condiciones</label>

                    <h1 className='terminos-label'>
                        Si desea revisar estos términos, haga click{' '}
                        <Link href="" className='link-termino'>
                            aquí
                        </Link>
                    </h1>

                </div>
    

            </div>
        
        </div>
    );
}