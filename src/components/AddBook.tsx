import { useState } from "react";
import { useAddNewProductMutation } from "../redux/features/products/productApi";

export default function AddBook() {
  const [addNewPost] = useAddNewProductMutation();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Create the payload with the form data
    const payload = {
      title,
      author,
      genre,
      publishDate,
    };

    // Dispatch the mutation to add the new product
    try {
      await addNewPost(payload);
      // Clear the form after successful submission
      setTitle("");
      setAuthor("");
      setGenre("");
      setPublishDate("");
    } catch (error) {
      // Handle any errors here
      console.error("Error adding product:", error);
    }
  };
  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-lg font-semibold text-gray-800"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-lg font-semibold text-gray-800"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="genre"
          className="block text-lg font-semibold text-gray-800"
        >
          Genre
        </label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="publishDate"
          className="block text-lg font-semibold text-gray-800"
        >
          Publish Date
        </label>
        <input
          type="date"
          id="publishDate"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold px-6 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
