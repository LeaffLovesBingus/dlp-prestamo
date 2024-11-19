import ListOfBooks from ".//libros";

export const metadata = {
    title: "Home",
    description: "Esta es la página de inicio",
};
  
export default function Home() {

    return (
      <>
        <div className="container">
          <h1 className="title">Hola mundo!</h1>
          <ListOfBooks/>
          <h1 className="title">Que pasa realmente?!</h1>
          <h1 className="title">Adios mundo!</h1>
        </div>
      </>
    );
  }
  