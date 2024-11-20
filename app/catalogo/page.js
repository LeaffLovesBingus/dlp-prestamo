import BarraBusqueda from "../components/portada/BarraDeBusqueda";
import Logotipo from "../components/portada/Logotipo";
import BotonDonacion from "../components/portada/BotonDonar";
import Vitrina from "../components/catalogo/Vitrina";


export default function catalogo() {

    return (
        <>
            <header className="header">
                <Logotipo/>
                <BotonDonacion/>
                <BarraBusqueda/>
            </header>

            <Vitrina/>

            <footer className="footer">
                *ABOUT*
            </footer>
        </>
    );
}