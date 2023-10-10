// /* eslint-disable react-refresh/only-export-components */
// import {
//   ReactNode,
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// interface Book {
//   id: string;
//   author: string;
//   cover_id: string;
//   edition_count: number;
//   first_publish_year: number;
//   title: string;
// }

// interface AppContextProps {
//   loading: boolean;
//   books: Book[];
//   setSearchTerm: (term: string) => void;
//   resultTitle: string;
//   setResultTitle: (title: string) => void;
// }

// const AppContext = createContext<AppContextProps | null>(null);

// interface AppProviderProps {
//   children: ReactNode;
// }

// const AppProvider = ({ children }: AppProviderProps) => {
//   const [searchTerm, setSearchTerm] = useState<string>("the lost world");
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [resultTitle, setResultTitle] = useState<string>("");

//   const fetchBooks = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${URL}${searchTerm}`);
//       const data = await response.json();
//       const { docs } = data;

//       if (docs) {
//         const newBooks: Book[] = docs.slice(0, 20).map((bookSingle: any) => {
//           const {
//             key,
//             author_name,
//             cover_i,
//             edition_count,
//             first_publish_year,
//             title,
//           } = bookSingle;

//           return {
//             id: key,
//             author: author_name,
//             cover_id: cover_i,
//             edition_count: edition_count,
//             first_publish_year: first_publish_year,
//             title: title,
//           };
//         });

//         setBooks(newBooks);

//         if (newBooks.length > 1) {
//           setResultTitle("Your Search Result");
//         } else {
//           setResultTitle("No Search Result Found!");
//         }
//       } else {
//         setBooks([]);
//         setResultTitle("No Search Result Found!");
//       }
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   }, [searchTerm]);

//   useEffect(() => {
//     fetchBooks();
//   }, [searchTerm, fetchBooks]);

//   return (
//     <AppContext.Provider
//       value={{
//         loading,
//         books,
//         setSearchTerm,
//         resultTitle,
//         setResultTitle,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useGlobalContext = (): AppContextProps => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error("useGlobalContext must be used within an AppProvider");
//   }
//   return context;
// };

// export { AppContext, AppProvider };
