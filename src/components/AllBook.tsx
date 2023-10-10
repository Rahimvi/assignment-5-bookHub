import { useGetProductsQuery } from "../redux/features/products/productApi";
import { IBook } from "../types/globalTypes";
import BookCard from "./BookCard";
import Loading from "./Loader/Loader";

export default function AllBook() {
  const { data, isLoading } = useGetProductsQuery(undefined);
  console.log(data);

  if (isLoading) return <Loading />;
  return (
    <>
      <div className="text-center py-8">
        <h1 className="text-4xl font-semibold">Book Library</h1>
        <p className="text-lg text-gray-600">
          Discover amazing books in our collection.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 pt-6">
        {data?.map((product: IBook) => (
          <BookCard key={product._id} book={product} />
        ))}
      </div>
    </>
  );
}
