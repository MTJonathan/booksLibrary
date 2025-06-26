import type { BookListProps } from "../lib/type";

const BooksList = ({ libros, pagesFilter, genreFilter }: BookListProps) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {libros.library.map((libro) => libro.book.pages >= pagesFilter && (genreFilter === "" || libro.book.genre === genreFilter) && (
        <div key={libro.book.ISBN} className="flex flex-col items-center">
          <picture>
            <img src={libro.book.cover} alt={libro.book.title} className="h-[10rem]"/>
          </picture>
          <h2 className="text-center">{libro.book.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
