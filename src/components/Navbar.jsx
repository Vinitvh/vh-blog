import { FaBlogger } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-base-200 shadow-xl shadow-green-200/20 flex items-center sticky top-0">
      <div className="text-xl pl-2 text-green-500 font-bold basis-1/4">
        <FaBlogger className="inline px-2 text-4xl text-green-400" />
        VH-blog
      </div>
      <input
        type="text"
        className="basis-1/2 h-8 text-black rounded-md mr-4"
        placeholder="Search for articles..."
      />
      <NavLink to="/about" className="basis-1/4 link link-hover ">
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
