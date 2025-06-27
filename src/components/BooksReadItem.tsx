import type { BookReadItemProps } from "../lib/type";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const BooksReadItem = ({ libro, handleRemoveBook }: BookReadItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: libro.book.ISBN,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li key={libro.book.ISBN} className="relative flex justify-center"
     {...attributes}
     {...listeners}
     ref={setNodeRef}
     style={style}
    >
      <button
        onClick={(e) => {
            e.stopPropagation(); // Previene que el click interfiera con drag
            handleRemoveBook(libro.book.ISBN);
          }}
        className="absolute right-5 top-[-6px] bg-white text-black rounded-full w-6 h-6 font-bold cursor-pointer"
      >
        X
      </button>
      <picture>
        <img
          src={libro.book.cover}
          alt={libro.book.title}
          className="h-[13rem] pointer-events-none"
        />
      </picture>
    </li>
  );
};

export default BooksReadItem;
