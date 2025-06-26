import type { HeaderProps } from "../lib/type";

const Header = ({ pagesFilter, setPagesFilter, maxPages, libros, genreFilter, setGenreFilter }: HeaderProps) => {
  return (
    <header>
      <h1 className="text-4xl font-bold">Libros Disponibles</h1>

      <form className="flex gap-30">
        <label className="flex flex-col">
          <span>Filtrar por páginas</span>
          <span className="flex items-center gap-2">
            <input
              type="range"
              value={pagesFilter}
              onChange={(e) => setPagesFilter(Number(e.target.value))}
              min={0}
              max={maxPages}
            />
            {pagesFilter}
          </span>
        </label>

        <label className="flex flex-col">
            <span>Filtrar por genero</span>
            <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
                <option value={""}>Todos</option>
                {Array.from(new Set(libros.library.map((libro) => libro.book.genre))).map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </label>
      </form>
    </header>
  );
};

export default Header;
