export type Book = {
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

export type LibraryItem = {
  book: Book;
};

export type HeaderProps = {
  pagesFilter: number;
  setPagesFilter: (value: number) => void;
  maxPages: number;
  libros: {
    library: LibraryItem[];
  };
};
