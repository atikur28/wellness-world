import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-green-600" : "text-white"
          }
        >
          Services
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
        <a className="normal-case text-xl md:text-3xl font-bold text-white md:ml-10">Diet Care</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 text-lg font-semibold px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end md:mr-10">
        <Link><button className="bg-green-600 text-white py-1 px-4 text-sm md:text-lg font-medium rounded-sm">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
