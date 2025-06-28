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
      className="flex justify-center"
      {...attributes}
      ref={setNodeRef}
      style={style}
    >
      <div className="active:cursor-grab">
        <picture className="relative">
          <img
            {...listeners}
            src={libro.book.cover}
            alt={libro.book.title}
            className="h-[13rem]"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveBook(libro.book.ISBN);
            }}
            className="absolute top-[-6px] left-[-6px] bg-white text-black rounded-full w-6 h-6 font-bold cursor-pointer"
          >
            X
          </button>
        </picture>
      </div>
    </li>
  );
};

export default BooksReadItem;
