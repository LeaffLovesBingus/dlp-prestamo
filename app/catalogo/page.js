import BarraBusqueda from "../components/portada/BarraDeBusqueda";
import Logotipo from "../components/portada/Logotipo";
import BotonDonacion from "../components/portada/BotonDonar";
import Vitrina from "../components/catalogo/Vitrina";
import Tablero from "../components/catalogo/Tablero";
import BotonVolver from "../components/catalogo/BotonVolver";


export default function catalogo() {

    return (
        <>
            <header className="header">
                <Logotipo/>
                <BotonDonacion/>
                <BarraBusqueda/>
                <BotonVolver/>
            </header>

            <Vitrina/>
            <Tablero/>

            <footer className="footer">
                *ABOUT*
            </footer>
        </>
    );
}