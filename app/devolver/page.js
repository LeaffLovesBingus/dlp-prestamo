import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Devolver",
    description: "Devolver el libro",
};
  
export default function Home() {


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

        <Link className='ir-a-catalogo' href=''>
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
  