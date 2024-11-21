import logo from './data/logo.png';
import Image from 'next/image';

export const metadata = {
    title: "Home",
    description: "Esta es la página de inicio",
};
  
export default function Home() {

  /* acá deberiamos recuperar el titulo del líbro con su respectiva info
  mientras, tengamos variables de ejemplo... */
  
  let bookTitle = "Mi libro";
  let bookAutor = "autor";
  let bookGenere = "género";
  let existencias = 0;
  let intereses = 0;

  return (
    <div className='conteiner'>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_upward_alt" />

      <header className='header'>

        <div className="titleContainer">
          <Image
            className = "logotipo"
            src = "/data/logo.png"
            width = {30}
            height = {30}
            draggable = "false"
          />
          <h1 className="title">DLP Library</h1>
        </div>

        <div className='ir-a-catalogo'>
          <button1 className='icon'>
            <span class="material-symbols-outlined">arrow_upward_alt</span>
          </button1>
        </div>
      </header>

      <div className="allInfo">
        
        <div className="bookImage">
          <img src ={logo}/>
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

          <button className='pedir'>
            <h1>Pedir</h1>
          </button>

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
  