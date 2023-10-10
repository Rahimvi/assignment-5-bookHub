import { Link } from "react-router-dom";
import { IBook } from "../types/globalTypes";

interface BookProps {
  book: IBook;
}

const BookCard: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto text-center">
      <h2 className="text-xl font-semibold mb-2">Title:{book?.title}</h2>
      <p className="text-gray-600">Author: {book?.author}</p>
      <p className="text-gray-600">Genre: {book?.genre}</p>
      <p className="text-gray-600">Publication Date: {book?.publicationDate}</p>
      <div className="flex justify-center mt-4">
        <Link to={`/product/${book._id}`} {...book}>
          <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
