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
  authorFilter,
  setAuthorFilter,
}: HeaderProps) => {
  return (
    <header>
      <h1 className="text-4xl font-[900]">Libros Disponibles</h1>

      <section>
        <div className="flex flex-wrap gap-4 items-center justify-between my-6 mr-8">
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
            <span>Filtrar por genero : </span>
            <select
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
              className="bg-[#111111] border border-white rounded-full px-2 py-1"
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
          <label className="flex flex-col">
            <span>Filtrar por autor : </span>
            <select
              value={authorFilter}
              onChange={(e) => setAuthorFilter(e.target.value)}
              className="bg-[#111111] border border-white rounded-full px-2 py-1"
            >
              <option value="">Todos</option>
              {Array.from(
                new Set(libros.library.map((libro) => libro.book.author.name))
              ).map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="my-4 mr-8">
          <label className="flex items-center gap-2">
            <span className="text-xl font-bold">Buscar:</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white rounded-full outline-none text-black px-3 py-1 w-full"
            />
          </label>
        </div>
      </section>
    </header>
  );
};

export default Header;
