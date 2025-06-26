import { useState } from "react";
import type { Books } from "./lib/type";
import "./App.css";
import Header from "./components/Header";
import books from "./lib/books.json";
import BooksList from "./components/BooksList";

function App() {
  const [libros, setLibros] = useState<Books>(books);
  const [pagesFilter, setPagesFilter] = useState(0);
  const [genreFilter, setGenreFilter] = useState<string>("");

  const maxPages = libros.library.reduce(
    (max, libro) => Math.max(max, libro.book.pages),
    0
  );

  return (
    <main>
      <Header
        pagesFilter={pagesFilter}
        setPagesFilter={setPagesFilter}
        maxPages={maxPages}
        libros={libros}
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
      />
      <section className="grid grid-cols-2 p-4">
        <BooksList libros={libros} pagesFilter={pagesFilter} genreFilter={genreFilter} />
      </section>
    </main>
  );
}

export default App;
