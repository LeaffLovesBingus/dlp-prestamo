"use client";
import BarraBusqueda from "./components/portada/BarraDeBusqueda";
import BotonCatalogo from "./components/portada/BotonCatalogo";
import Logotipo from "./components/portada/Logotipo";
import BotonDonacion from "./components/portada/BotonDonar";
import caratulas from "./components/portada/AnimacionCaratulas";

// 𝓘'𝓶 𝓯𝓮𝓮𝓵𝓲𝓷𝓰 𝓴𝓲𝓷𝓭𝓪 𝓯𝓻𝓮𝓪𝓴𝔂
  
export default function Home() {

    return (
    <>  
        <header className="header">
            <BotonDonacion/>
            <BarraBusqueda/>
        </header>

        <Logotipo/>
        <h1> 39 personas están leyendo ahora mismo! </h1>

        <footer className="footer">
            <BotonCatalogo/>
        </footer>
    </>
    );
}