import BookCard from "./book_cards/book-cards.js"
import libros from "./libros.json"

export const metadata = {
    title: "Home",
    description: "Esta es la página de inicio",
};
  
export default function Home() {
  libros.map((item) => {
    console.log(item.titulo);
  })
    return (
      <>
        <div className="container">
          <h1 className="title">catálogo**</h1>
          <div className="book-shelf">
            {libros.map((item, cont) => 
              (<BookCard libro={{item}} key={cont}></BookCard>
            ))}
          </div>
        </div>
      </>
    );
  }
  