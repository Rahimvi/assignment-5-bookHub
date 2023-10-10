import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import SignupForm from "@/pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBook from "../components/AddBook";
import AllBook from "../components/AllBook";
import BookDetails from "../components/BookDetails";
import BookList from "../components/BookList";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <BookList />,
      },
      {
        path: "/product/:id",
        element: <BookDetails />,
      },
      {
        path: "/allBook",
        element: <AllBook />,
      },
      {
        path: "/add-new-book",
        element: <AddBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      // {
      //   path: '/checkout',
      //   element: (
      //     <PrivateRoute>
      //       <Checkout />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  // {
  //   path: '/signup',
  //   element: <Signup />,
  // },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default routes;
