import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-600" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-600" : "text-white"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-600" : "text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-600"
                  : "text-white"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-600"
                  : "text-white"
              }
            >
              Blogs
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar py-6">
      <div className="navbar-start">
        <div className="dropdown mr-1">
          <label tabIndex={0} className="text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 md:h-5 w-4 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-700 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="normal-case text-xs md:text-3xl font-bold text-white md:ml-10">
          WellnessWorld
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 text-lg font-semibold px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end md:mr-10">
        <div className="flex flex-row-reverse items-center justify-center gap-2 mr-1">
          {user ? <p className="font-medium text-white text-xs lg:text-base text-center">{user.displayName}</p> : <p className="hidden"></p>}
          {user ? (
            <div className="ml-0.5">
              <img className="w-8 rounded-full" src={user.photoURL} alt="user-photo" />
            </div>
          ) : (
            <p className="hidden"></p>
          )}
        </div>
        <div>
          {user ? (
            <Link>
              <button
                onClick={handleLogOut}
                className="bg-green-600 text-white py-1 px-4 text-sm md:text-lg font-medium rounded-sm"
              >
                Log out
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-green-600 text-white py-1 px-4 text-sm md:text-lg font-medium rounded-sm">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
