import { useState, useEffect } from "react";
import type { Books } from "./lib/type";
import "./App.css";
import Header from "./components/Header";
import books from "./lib/books.json";
import BooksList from "./components/BooksList";
import BooksRead from "./components/BooksRead";

function App() {
  const [libros, setLibros] = useState<Books>(books);
  const [pagesFilter, setPagesFilter] = useState(0);
  const [booksOriginal] = useState<Books>(books); // nunca cambia
  const [genreFilter, setGenreFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [authorFilter, setAuthorFilter] = useState<string>("");

  const [librosLeidos, setLibrosLeidos] = useState<Books>(JSON.parse(localStorage.getItem("librosLeidos") || "{}"));

  const maxPages = libros.library.reduce(
    (max, libro) => Math.max(max, libro.book.pages),
    0
  );

  //Local Storage
  useEffect(()=>{
    localStorage.setItem("librosLeidos", JSON.stringify(librosLeidos));
  },[librosLeidos])

  useEffect(() => {
    if (search) {
      const librosFiltrados = booksOriginal.library.filter((libro) =>
        libro.book.title.toLowerCase().includes(search.toLowerCase())
      );
      setLibros({ library: librosFiltrados });
    } else {
      setLibros(booksOriginal);
    }
  }, [search, booksOriginal]);

  return (
    <main className="grid lg:grid-cols-[1.5fr_1fr] p-4">
      <div>
        <Header
          pagesFilter={pagesFilter}
          setPagesFilter={setPagesFilter}
          maxPages={maxPages}
          libros={libros}
          genreFilter={genreFilter}
          setGenreFilter={setGenreFilter}
          search={search}
          setSearch={setSearch}
          authorFilter={authorFilter}
          setAuthorFilter={setAuthorFilter}
        />
        <section className="p-4">
          <BooksList
            libros={libros}
            pagesFilter={pagesFilter}
            genreFilter={genreFilter}
            setLibrosLeidos={setLibrosLeidos}
            authorFilter={authorFilter}
          />
        </section>
      </div>

      <div>
        <BooksRead
          librosLeidos={librosLeidos}
          setLibrosLeidos={setLibrosLeidos}
        />
      </div>
    </main>
  );
}

export default App;
