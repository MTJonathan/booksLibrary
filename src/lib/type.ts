export interface Books {
  library: {
    book: {
      title: string;
      pages: number;
      genre: string;
      cover: string;
      synopsis: string;
      year: number;
      ISBN: string;
      author: {
        name: string;
        otherBooks: string[];
      };
    };
  }[];
}

export interface HeaderProps {
  pagesFilter: number;
  setPagesFilter: (pagesFilter: number) => void;
  maxPages: number;
  libros: Books;
  genreFilter: string;
  setGenreFilter: (genreFilter: string) => void;
  search: string;
  setSearch: (search: string) => void;
  authorFilter: string;
  setAuthorFilter: (authorFilter: string) => void;
}

export interface BookListProps {
  libros: Books;
  pagesFilter: number;
  genreFilter: string;
  setLibrosLeidos: React.Dispatch<React.SetStateAction<Books>>;
  authorFilter: string;
}

export interface BookReadProps {
  librosLeidos: Books;
  setLibrosLeidos: React.Dispatch<React.SetStateAction<Books>>;
}

export interface BookReadItemProps {
  libro: Books["library"][number];
  handleRemoveBook: (isbn: string) => void;
}
