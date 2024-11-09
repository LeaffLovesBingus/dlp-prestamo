import BookCard from "./book_cards/book-cards.js"
import libros from "./libros.json"
import Image from "next/image.js";

export const metadata = {
    title: "DLP - catálogo",
    description: "Catálago de la biblioteca independiente DLP library",
};
  
export default function Home() {
    libros.map((item) => console.log(item.titulo))

    return (
    <>
        <div className="container">
        {/*<h1 className="title">catálogo**</h1>*/}
        <Image
            src = "/public/assets/logoBlanco.png"
            alt = "Logo épico"
            width = {500}
            height = {250}
        />
        <div className="book-shelf">
            {libros.map((item, cont) => 
            (<BookCard libro={{item}} key={cont}></BookCard>
            ))}
        </div>
        </div>
    </>
    );
}
  