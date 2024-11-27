import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const Header = () => {
  return (
    <header className="bg-teal-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold cursor-pointer">Event Pulse</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6">
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
        <Link to="/getStarted">
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
