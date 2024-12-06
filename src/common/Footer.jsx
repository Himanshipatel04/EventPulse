import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Description Section */}
          <div>
            <h3 className="text-2xl font-semibold text-teal-200">About Event Pulse</h3>
            <p className="text-gray-300 mt-2">
              Event Pulse is a leading event management platform dedicated to making event planning smooth and accessible. Join us and make your events memorable!
            </p>
          </div>

          {/* Social Media Links */}
          <div className="">
            <h3 className="text-2xl font-semibold text-teal-200">Follow Us</h3>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-2xl font-semibold text-teal-200">Quick Links</h3>
            <div className="mt-4 space-y-2 space-x-3">
              <Link to="/policy" className="text-gray-300 hover:text-white transition duration-300">
                Privacy Policy
              </Link>
              <Link to="/termsOfService" className="text-gray-300 hover:text-white transition duration-300">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-12 text-sm text-gray-400">
          <p>&copy; 2024 Event Pulse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
