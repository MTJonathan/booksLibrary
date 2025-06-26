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
}

export interface BookListProps {
    libros: Books;
    pagesFilter: number;
    genreFilter: string;
}
