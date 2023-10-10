// Book.tsx
import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../types/globalTypes";
import "./BookList.css";

interface BookProps {
  product: IBook;
}

const Book: React.FC<BookProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto text-center">
      <Link to={`/product/${product._id}`} {...product}>
        <h2 className="text-xl font-semibold mb-2">Title:{product?.title}</h2>
        <p className="text-gray-600">Author: {product?.author}</p>
        <p className="text-gray-600">Genre: {product?.genre}</p>
        <p className="text-gray-600">
          Publication Date: {product?.publicationDate}
        </p>
      </Link>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Book;
