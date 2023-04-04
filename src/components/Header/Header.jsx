import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-sky-900 text-white">
      <div className="flex-1">
        <Link to="/" className="font-bold text-4xl">
          TheMealDB
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
