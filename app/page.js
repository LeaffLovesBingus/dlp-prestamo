"use client";
import BarraBusqueda from "./components/portada/BarraDeBusqueda";
import BotonCatalogo from "./components/portada/BotonCatalogo";
import Logotipo from "./components/portada/Logotipo";
import BotonDonacion from "./components/portada/BotonDonar";
import Caratulas from "./components/portada/AnimacionCaratulas";

  
export default function Home() {

    return (
    <>  
        <header className="header">
            <BotonDonacion/>
            <BarraBusqueda/>
        </header>

        <Logotipo/>
        <h1> 39 personas están leyendo ahora mismo! </h1>
        {/* <Caratulas/> */}

        <footer className="footer">
            <BotonCatalogo/>
        </footer>
    </>
    );
}