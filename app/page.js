import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Home",
    description: "Esta es la página de inicio",
};
  
export default function Home() {

  /* acá deberiamos recuperar el titulo del líbro con su respectiva info
  mientras, tengamos variables de ejemplo... */
  
  let bookTitle = "Un libro deaa";
  let bookAutor = "autor";
  let bookGenere = "género";
  let existencias = 0;
  let intereses = 0;

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
            <button className='pedir'>
              <h1>Pedir</h1>
            </button>
          </Link>

          <button className='meInteresa'>
            <h1>Me Interesa</h1>
          </button>

          <button className='devolver'>
            <h1>Devolver</h1>
          </button>

        </div>

      </div>
        
    </div>
    );
  }
  