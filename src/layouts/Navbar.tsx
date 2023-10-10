import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log("logout");
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
    });
  };
  return (
    <>
      <nav className="bg-blue-500 p-4 flex items-center justify-between">
        {/* Left side with logo */}
        <div className="flex items-center">
          <img src={logoImg} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-white font-semibold text-lg">BookHub</span>
        </div>

        {/* Middle with search bar (optional) */}
        <div className="flex-1 mx-4">{/* <SearchForm /> */}</div>

        {/* Right side with page links */}
        <ul className="flex items-center">
          <li>
            <Link to="/" className="text-white font-semibold mx-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/allbook" className="text-white font-semibold mx-2">
              Allbook
            </Link>
          </li>
          {user.email && (
            <>
              <li>
                <Link
                  to="/add-new-book"
                  className="text-white font-semibold mx-2"
                >
                  AddBook
                </Link>
              </li>
            </>
          )}
          {!user.email && (
            <>
              <li>
                <Link to="/login" className="text-white font-semibold mx-2">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white font-semibold mx-2">
                  SignUp
                </Link>
              </li>
            </>
          )}
          {user.email && (
            <>
              <li>
                <Link
                  to="/logout"
                  className="text-white font-semibold mx-2 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
