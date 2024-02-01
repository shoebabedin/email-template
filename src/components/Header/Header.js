import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <>
      <header
        id="top"
        className="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l"
      >
        <nav
          id="site-menu"
          className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-b-4 border-teal-500"
        >
          <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <Link to="#" className="no-underline py-1">
              <h1 className="font-bold text-lg">NAVBAR</h1>
            </Link>
            <button
              id="menuBtn"
              className={`hamburger block sm:hidden focus:outline-none ${navToggle ? "" : "open"}`}
              type="button"
              onClick={() => setNavToggle(!navToggle)}
            >
              <span className="hamburger__top-bun"></span>
              <span className="hamburger__bottom-bun"></span>
            </button>
          </div>
          <div
            id="menu"
            className={`w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 ${navToggle ? "hidden" : "nav-open"}`}
          >
            <Link
              className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2"
              to="/"
              target="_blank"
            >
              About
            </Link>
            <Link
              className="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2"
              to="/"
            >
              Features
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
