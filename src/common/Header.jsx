import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { useUser } from "../context/UserContext";
import { toast, ToastContainer } from "react-toast";

const Header = () => {
  const { user } = useUser();
  console.log(user);
  const [visible, setVisible] = useState(false);

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
    window.location.reload();
    toast("Logged out successfully!", { type: "success" , backgroundColor: '#ffffff',color: '#000000'});           
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full  ${
        !visible
          ? "backdrop-blur-lg bg-teal-700"
          : "backdrop-blur-sm bg-teal-700/50"
      } text-white shadow-md z-50`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold cursor-pointer">EventPulse</h1>
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
        {!user ? (
          <Link to="/signup">
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition">
              SignUp
            </button>
          </Link>
        ) : (
         <div> <button
         onClick={handleLogout}
         className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition"
       >
         Logout
       </button>
       <p>{user.role === "Organizer" ?? "See Profile"}</p></div>
        )}
      </div>
      <ToastContainer position="top-right"/>
    </header>
  );
};

export default Header;
