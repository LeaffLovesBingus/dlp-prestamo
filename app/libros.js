// https://github.com/vercel/next.js/issues/48344#issuecomment-1653612812
const fetchData = async () => {
    //const res = await import(<url-servidor>/libros?id=[id]), { method: "GET"});
    const res = await import(".//api-test/ejemplo-1", { method: "GET" });
    const data = res.libros;
    return data;
  };
  
const ListOfBooks = async () => {
    const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse
    return (
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
    );
  };

  export default ListOfBooks;