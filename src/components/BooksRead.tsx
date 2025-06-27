import type { BookReadProps } from "../lib/type";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import type { DragEndEvent } from "@dnd-kit/core";
import BooksReadItem from "./BooksReadItem";

const BooksRead = ({ librosLeidos, setLibrosLeidos }: BookReadProps) => {
  const handleRemoveBook = (isbn: string) => {
    console.log(isbn);
    setLibrosLeidos((prevLibrosLeidos) => ({
      ...prevLibrosLeidos,
      library: prevLibrosLeidos.library.filter(
        (libro) => libro.book.ISBN !== isbn
      ),
    }));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
  
    // Verifica que `over` exista
    if (active.id !== over?.id) {
      setLibrosLeidos((prevLibrosLeidos) => {
        const prevLibrary = [...prevLibrosLeidos.library];
  
        const activeIndex = prevLibrary.findIndex(
          (libro) => libro.book.ISBN === active.id
        );
        const overIndex = prevLibrary.findIndex(
          (libro) => libro.book.ISBN === over?.id
        );
  
        // Seguridad: Si no se encuentra alguno, no hacer nada
        if (activeIndex === -1 || overIndex === -1) return prevLibrosLeidos;
  
        // Mover el libro
        const [activeItem] = prevLibrary.splice(activeIndex, 1);
        prevLibrary.splice(overIndex, 0, activeItem);
  
        return { library: prevLibrary };
      });
    }
  };


  return (
    <div>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="bg-[#13181c] py-6 px-10 rounded-2xl border border-white min-h-[90vh]">
          <header>
            <h2 className="text-2xl font-[700]">Lista de Lectura:</h2>
            <p>Libros leidos: {librosLeidos.library.length}</p>
            {
              librosLeidos.library.length > 1 && (
                <p className="text-gray-500">(Arrastrar para ordenar)</p>
              )
            }
          </header>
          <SortableContext
            items={librosLeidos.library.map((libro) => libro.book.ISBN)}
            strategy={rectSortingStrategy}
          >
            <ul className="grid grid-cols-2 gap-5 py-8">
              {librosLeidos?.library.map((libro) => (
                <BooksReadItem
                  key={libro.book.ISBN}
                  libro={libro}
                  handleRemoveBook={handleRemoveBook}
                />
              ))}
            </ul>
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default BooksRead;
