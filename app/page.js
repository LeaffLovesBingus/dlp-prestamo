export const metadata = {
    title: "Home",
    description: "Esta es la página de inicio",
};

const fetchData = async () => {
  //const res = await import(<url-servidor>/libros?id=[id]), { method: "GET"});
  const res = await import("../../api-test/ejemplo-1", { method: "GET" });
  const data = res.miArreglo;
  return data;
};
  
export default function Home() {
  const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse
  return (
    <>
      <div className="container">
        <h1 className="title">Hola mundo!</h1>
        <>
          {
            // Si hay datos, los mostramos
            data.length > 0 &&
              data.map((libros) => (
                <div key={libros.id}>
                  <p className="text">{libros.titulo}</p>
                  <p className="text">{libros.autores}</p>
                  <p className="text">{libros.prestado}</p>
                </div>
              ))
          }{" "}
        </>
      </div>
    </>
  );
}
  