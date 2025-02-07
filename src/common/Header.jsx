import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
import { useUser } from "../context/UserContext";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const { user } = useUser();
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight * 0.01;

      setVisible(scrollTop > viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full  ${
        !visible
          ? "backdrop-blur-lg bg-teal-700"
          : "backdrop-blur-sm bg-teal-700/50"
      } text-white shadow-md z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold cursor-pointer">EventPulse</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:block space-x-6">
          <Link to="/" className="hover:text-teal-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-teal-300 transition">
            About Us
          </Link>
          <Link to="/services" className="hover:text-teal-300 transition">
            Services
          </Link>
          <Link to="/contact" className="hover:text-teal-300 transition">
            Contact
          </Link>
        </nav>

        {/* Call to Action Button */}
        {!user ? (
          <div className="flex items-center justify-center space-x-2">
            <Link to="/login">
              <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition">
                SignUp
              </button>
            </Link>
            <div className="block md:hidden">
              <IoMenu onClick={() => setShowMenu(true)} size={32} />
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className="block md:hidden">
              <IoMenu onClick={() => setShowMenu(true)} size={32} />
            </div>
            <button
              onClick={handleLogout}
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 hidden md:block rounded-lg transition"
            >
              Logout
            </button>
            <Link
              to={
                user.role === "Organizer"
                  ? "/organizer-dashboard"
                    : user.role === "Sponsor"
                    ? "/sponsor-dashboard"
                  : user.role === "Attendee"
                  ? "/attendee-dashboard"
                  : "/admin-dashboard"
              }
              className="hidden md:block bg-teal-500 ml-4 hover:bg-teal-600 text-white py-2 px-4 rounded-lg transition"
            >
              {user.role === "Organizer"
                ? "View Profile"
                  : user.role === "Sponsor"
                  ? "Sponsor Profile"
                : user.role === "Attendee"
                ? "Dashboard"
                : "Admin Dashboard"}
            </Link>
          </div>
        )}
      </div>

      <div
        className={`bg-gray-50 md:hidden w-52 h-screen fixed top-0 right-0 z-50 shadow-lg
    transition-all duration-500 ease-in-out transform
    ${
      showMenu
        ? "translate-x-0 opacity-100 visible"
        : "translate-x-full opacity-0 invisible"
    }
  `}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowMenu(false)}
          className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
        {/* Menu Content */}
        <div className="flex flex-col mt-16 space-y-5 px-4 py-10">
          <Link
            onClick={() => {
              setShowMenu(false);
            }}
            to="/"
            className="text-white bg-teal-500 hover:bg-teal-600 transition p-2 outline outline-1 outline-teal-500 rounded-md text-center"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setShowMenu(false);
            }}
            to="/about"
            className="text-white bg-teal-500 hover:bg-teal-6000 transition p-2 outline outline-1 outline-teal-500 rounded-md text-center"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => {
              setShowMenu(false);
            }}
            className="text-white bg-teal-500 hover:bg-teal-600 transition p-2 outline outline-1 outline-teal-500 rounded-md text-center"
          >
            Services
          </Link>
          <Link
            onClick={() => {
              setShowMenu(false);
            }}
            to="/contact"
            className="text-white bg-teal-500 hover:bg-teal-600 transition p-2 outline outline-1 outline-teal-500 rounded-md text-center"
          >
            Contact
          </Link>
          {user ? (
            <div className="flex flex-col space-y-5">
              <Link
                to={
                  user.role === "Organizer"
                    ? "/organizer-profile"
                    : user.role === "Attendee"
                    ? "/attendee-dashboard"
                    : "/admin-dashboard"
                }
                className="text-white bg-teal-500 hover:bg-teal-600 transition p-2 outline outline-1 outline-teal-500 rounded-md text-center"
              >
                {user.role === "Organizer"
                  ? "View Profile"
                  : user.role === "Attendee"
                  ? "Dashboard"
                  : "Admin Dashboard"}
              </Link>
              <Link
                onClick={handleLogout}
                className="text-white bg-red-500 hover:bg-red-600 transition p-2 outline outline-1 rounded-md text-center"
              >
                Logout
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
