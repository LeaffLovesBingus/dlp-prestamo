import ListOfBooks from ".//libros";

export const metadata = {
    title: "Home",
    description: "Esta es la página de inicio",
};

  
export default function Home() {
  //const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse

  return (
    <>
      <div className="container">
        <h1 className="title">Hola mundo!</h1>
        <div className="book-shelf">
          <ListOfBooks />
        </div>
      </div>
    </>
  );
}
  