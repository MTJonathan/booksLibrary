import type { BookReadProps } from "../lib/type";

const BooksRead = ({ librosLeidos, setLibrosLeidos }: BookReadProps) => {
  const handleRemoveBook = (isbn: string) => {
    setLibrosLeidos((prevLibrosLeidos) => ({
      ...prevLibrosLeidos,
      library: prevLibrosLeidos.library.filter(
        (libro) => libro.book.ISBN !== isbn
      ),
    }));
  };

  return (
    <div>
      <div>
        <header>
          <h2 className="text-2xl font-[700]">Lista de Lectura:</h2>
        </header>
        <ul className="grid grid-cols-2 gap-5 py-8">
          {librosLeidos?.library.map((libro) => (
            <li key={libro.book.ISBN} className="relative flex justify-center">
              <button
                onClick={() => handleRemoveBook(libro.book.ISBN)}
                className="absolute right-10 top-[-6px] bg-white text-black rounded-full w-6 h-6 font-bold"
              >
                X
              </button>
              <picture>
                <img
                  src={libro.book.cover}
                  alt={libro.book.title}
                  className="h-[13rem]"
                />
              </picture>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BooksRead;
