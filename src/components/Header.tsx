import type { HeaderProps } from "../lib/type";

const Header = ({
  pagesFilter,
  setPagesFilter,
  maxPages,
  libros,
  genreFilter,
  setGenreFilter,
  search,
  setSearch,
}: HeaderProps) => {
  return (
    <header>
      <h1 className="text-4xl font-[900]">Libros Disponibles</h1>

      <section>
        <div className="flex gap-30 my-6">
          <label className="flex flex-col">
            <span className="text-xl font-bold">Filtrar por páginas</span>
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
            <select
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
              className="bg-[#111111]"
            >
              <option value={""}>Todos</option>
              {Array.from(
                new Set(libros.library.map((libro) => libro.book.genre))
              ).map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="my-4">
          <label className="flex items-center gap-2">
            <span>Buscar : </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white rounded-full outline-none text-black px-3 py-1 w-1/2"
            />
          </label>
        </div>
      </section>
    </header>
  );
};

export default Header;
