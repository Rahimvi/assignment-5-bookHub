import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  useDeleteProductMutation,
  useSingleProductQuery,
} from "../redux/features/products/productApi";
import { deleteBook } from "../redux/features/products/productSlice";
import { useAppSelector } from "../redux/hook";
import "./BookList.css";
import BookReview from "./BookReview";
import ConfirmationModal from "./ConfirmationModal";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // Fetch product data
  const { data: product, isLoading, error } = useSingleProductQuery(id ?? "");

  // Use the delete mutation hook
  const [deleteProduct] = useDeleteProductMutation();
  const handleDeleteClick = () => {
    setShowModal(true);
  };
  const handleConfirmDelete = async () => {
    try {
      // Call the delete mutation function with the product ID
      await deleteProduct(id);
      // Optionally, dispatch an action to update the Redux store (if needed)
      dispatch(deleteBook(id!));
      // Redirect to a different page (e.g., the product list page)
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
    setShowModal(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 mt-6">
        <div className="w-[50%]">
          {user.email && (
            <>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold me-2 py-2 px-4 rounded">
                EDIT
              </button>
              <button
                onClick={handleDeleteClick}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                DELETE
              </button>
            </>
          )}
          <ConfirmationModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onConfirm={handleConfirmDelete}
          />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.title}</h1>
          <p className="text-xl">Author: {product?.author}</p>
          <p className="text-xl">Genre: {product?.genre}</p>
          <p className="text-xl">
            Publication Date: {product?.publicationDate}
          </p>
          <ul className="space-y-1 text-lg">
            {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <BookReview id={id!} />
    </>
  );
};

export default BookDetails;
