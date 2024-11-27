import { Button } from "@chakra-ui/react";
import Link from "next/link";
import BotonVolver from "./components/catalogo/BotonVolver";

// Esto es una página de error 404 personalizada
// Solo debemos crear un archivo not-found.js en la carpeta pages y Next.js lo detectará automáticamente

function Error404() {
  return (
    <div className="p404"
      style={{
        textAlign: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container-404-general">
        <h1 className="title-404">Error 404</h1>
        <div className="container-404">
          <h2 className="text">Estamos trabajando para usted :)</h2>
          <BotonVolver tipo={1}/>
        </div>
      </div>
    </div>
  );
}

export default Error404;
