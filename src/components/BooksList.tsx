import type { BookListProps } from "../lib/type";
import type { Books } from "../lib/type";

const BooksList = ({
  libros,
  pagesFilter,
  genreFilter,
  setLibrosLeidos,
  authorFilter,
}: BookListProps) => {

  
  const handleBookClick = (libro: Books["library"][number]) => {
    setLibrosLeidos((prevLibrosLeidos) => {
      const yaExiste = prevLibrosLeidos.library.some(
        (l) => l.book.ISBN === libro.book.ISBN
      );

      return yaExiste
        ? prevLibrosLeidos
        : {
            ...prevLibrosLeidos,
            library: [...prevLibrosLeidos.library, libro],
          };
    });
  };

  return (
    <div className="grid grid-cols-4 gap-5">
      {libros.library.map(
        (libro) =>
          libro.book.pages >= pagesFilter &&
          (genreFilter === "" || libro.book.genre === genreFilter) &&
          (authorFilter === "" || libro.book.author.name === authorFilter) && (
            <div key={libro.book.ISBN} className="flex flex-col items-center">
              <picture onClick={() => handleBookClick(libro)}>
                <img
                  src={libro.book.cover}
                  alt={libro.book.title}
                  className="h-[10rem]"
                />
              </picture>
              <h2 className="text-center">{libro.book.title}</h2>
            </div>
          )
      )}
    </div>
  );
};

export default BooksList;
