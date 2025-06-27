import type { BookReadItemProps } from "../lib/type";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const BooksReadItem = ({ libro, handleRemoveBook }: BookReadItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: libro.book.ISBN,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      key={libro.book.ISBN}
      className="relative flex justify-center"
      {...attributes}
      ref={setNodeRef}
      style={style}
    >
      <div {...listeners} className="active:cursor-grab">
        <picture>
          <img
            src={libro.book.cover}
            alt={libro.book.title}
            className="h-[13rem]"
          />
        </picture>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleRemoveBook(libro.book.ISBN);
        }}
        className="absolute right-5 top-[-6px] bg-white text-black rounded-full w-6 h-6 font-bold cursor-pointer"
      >
        X
      </button>
    </li>
  );
};

export default BooksReadItem;
