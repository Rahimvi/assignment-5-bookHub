import { useGetProductsQuery } from "../redux/features/products/productApi";
import Book from "./Book";
import "./BookList.css";
import Loading from "./Loader/Loader";
import SearchForm from "./SearchForm/SearchForm";

const BookList = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="text-center py-8">
        <h1 className="text-4xl font-semibold">Book Library</h1>
        <p className="text-lg text-gray-600">
          Discover amazing books in our collection.
        </p>
        <div>
          <SearchForm />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 pt-6">
        {data?.data.map((product: any) => (
          <Book key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default BookList;
