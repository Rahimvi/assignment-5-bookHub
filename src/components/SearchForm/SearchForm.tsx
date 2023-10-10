// SearchForm.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../redux/features/products/productApi";

import {
  setBooks,
  setGenreFilter,
  setPublicationYearFilter,
  setSearchCriteria,
} from "../../redux/features/products/productSlice";
import { RootState } from "../../redux/store";
import { IBook } from "../../types/globalTypes";

const SearchForm = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);
  const searchCriteria = useSelector(
    (state: RootState) => state.books.searchCriteria
  );
  const genreFilter = useSelector(
    (state: RootState) => state.books.filters.genre
  );
  const publicationYearFilter = useSelector(
    (state: RootState) => state.books.filters.publicationYear
  );

  // Fetch products data using the API query
  const { data } = useGetProductsQuery();

  // Effect to filter books whenever data or filters change
  useEffect(() => {
    filterBooks();
  }, [data, searchCriteria, genreFilter, publicationYearFilter]);

  // Function to filter books based on search criteria and filters
  const filterBooks = () => {
    if (!data) return;

    const filteredBooks = data?.data.filter((book: IBook) => {
      const titleMatch = book.title
        .toLowerCase()
        .includes(searchCriteria.toLowerCase());
      const authorMatch = book.author
        .toLowerCase()
        .includes(searchCriteria.toLowerCase());
      const genreMatch = genreFilter
        ? book.genre.toLowerCase() === genreFilter.toLowerCase()
        : true;
      const yearMatch = publicationYearFilter
        ? book.publicationDate?.includes(publicationYearFilter)
        : true;

      return titleMatch || authorMatch || (genreMatch && yearMatch);
    });

    dispatch(setBooks(filteredBooks));
  };

  // Handle changes in search criteria and filters
  const handleSearchCriteriaChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const criteria = e.target.value;
    dispatch(setSearchCriteria(criteria));
  };

  const handleGenreFilterChange = (selectedGenre: string) => {
    dispatch(setGenreFilter(selectedGenre));
  };

  const handlePublicationYearFilterChange = (selectedYear: string) => {
    dispatch(setPublicationYearFilter(selectedYear));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by title, author, genre..."
          value={searchCriteria}
          onChange={handleSearchCriteriaChange}
        />
        <select
          value={genreFilter || ""}
          onChange={(e) => handleGenreFilterChange(e.target.value)}
        >
          <option value="">Genres</option>
          <option value="Mystery">Mystery</option>
          <option value="Science Fiction">Science Fiction</option>
          {/* Add more genre options as needed */}
        </select>
        <select
          value={publicationYearFilter || ""}
          onChange={(e) => handlePublicationYearFilterChange(e.target.value)}
        >
          <option value="">All Publication Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more year options as needed */}
        </select>
      </div>
      <div className="grid grid-cols-4 gap-5 pt-6">
        {books.map((book: IBook) => (
          <div key={book._id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-600">Genre: {book.genre}</p>
            <p className="text-gray-600">
              Publication Date: {book.publicationDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
