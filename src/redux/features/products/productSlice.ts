import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface BooksState {
  books: IBook[];
  searchCriteria: string;
  filters: {
    genre: null;
    publicationYear: null;
  };
}

const initialState: BooksState = {
  books: [],
  searchCriteria: "",
  filters: {
    genre: null,
    publicationYear: null,
  },
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setSearchCriteria: (state, action) => {
      state.searchCriteria = action.payload;
    },
    setGenreFilter: (state, action) => {
      state.filters.genre = action.payload;
    },
    setPublicationYearFilter: (state, action) => {
      state.filters.publicationYear = action.payload;
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      const bookIdToDelete = action.payload;
      state.books = state.books.filter((book) => book._id !== bookIdToDelete);
    },
  },
});

export const {
  setBooks,
  setSearchCriteria,
  setGenreFilter,
  setPublicationYearFilter,
  deleteBook,
} = booksSlice.actions;

export default booksSlice.reducer;
