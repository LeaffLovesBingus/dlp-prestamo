import logo from './data/logo.png';

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
      <>
        
        <div className="titleContainer">
          <img src ={logo}/>
          <h className="title">DLP Library</h>
        </div>


        <div className="allInfo">

          <div className="bookImage">
            <img src ={logo}/>
          </div>

          <div className="bookInfo">

            <div className='nombreGenero'>
              <h2>{bookTitle}</h2>
              <h4>{bookAutor} - {bookGenere}</h4>
            </div>

            <div className='existencias'>
                <h2>Hay {existencias} existencias</h2>
            </div>

            <div className='intereses'>
                <h2>A {intereses} personas les interesa este libro</h2>
            </div>

          </div>
          
          <div className='solicitud'>

            <button className='pedir'>
              Pedir
            </button>

            <button className='meInteresa'>
              Me interesa
            </button>

            <button className='devolver'>
              Devolver
            </button>

          </div>



        </div>
          
      </>
    );
  }
  