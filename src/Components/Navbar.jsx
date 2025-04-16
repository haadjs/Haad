import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaGithub, FaHome, FaUserAlt, FaProjectDiagram, FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container mx-auto navbar bg-transparent fixed top-0 z-50 backdrop-blur-md px-4">
      <div className="flex-1">
        <Link
          to="/"
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-emerald-500 to-lime-400 drop-shadow-md animate-pulse"
        >
          Haad<span className="text-black">..</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link className="text-lg font-white hover:text-green-500 transition-all duration-300" to="/">
              <FaHome className="mr-2 inline-block" /> Home
            </Link>
          </li>
          <li>
            <Link className="text-lg font-medium hover:text-green-500 transition-all duration-300" to="about">
              <FaUserAlt className="mr-2 inline-block" /> About
            </Link>
          </li>
          <li>
            <Link className="text-lg font-medium hover:text-green-500 transition-all duration-300" to="project">
              <FaProjectDiagram className="mr-2 inline-block" /> Project
            </Link>
          </li>
          <li>
            <Link className="text-lg font-medium hover:text-green-500 transition-all duration-300" to="contact">
              <FaPhone className="mr-2 inline-block" /> Contact
            </Link>
          </li>
          <li>
            <Button title="GitHub" icon={FaGithub} link="https://github.com/haadjs" />
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {["/", "about", "project", "contact"].map((route, i) => {
            let icon;
            switch (route) {
              case "/":
                icon = <FaHome className="mr-2 inline-block" />;
                break;
              case "about":
                icon = <FaUserAlt className="mr-2 inline-block" />;
                break;
              case "project":
                icon = <FaProjectDiagram className="mr-2 inline-block" />;
                break;
              case "contact":
                icon = <FaPhone className="mr-2 inline-block" />;
                break;
              default:
                icon = null;
            }
            return (
              <li key={i}>
                <Link
                  to={route}
                  className="relative text-lg font-semibold text-emerald-500 hover:text-lime-500 transition-colors duration-300 
                             before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[2px] 
                             before:w-0 before:bg-gradient-to-r before:from-green-500 before:to-lime-400 
                             before:transition-all before:duration-500 hover:before:w-full"
                >
                  {icon}
                  {route === "/" ? "Home" : route.charAt(0).toUpperCase() + route.slice(1)}
                </Link>
              </li>
            );
          })}
          <li>
            <Button title="GitHub" icon={FaGithub} link="https://github.com/haadjs" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
