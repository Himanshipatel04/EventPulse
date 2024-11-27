import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold">About Event Pulse</h3>
            <p className="text-gray-300 mt-2">
              Event Pulse is a leading event management platform dedicated to making event planning smooth and accessible. Join us and make your events memorable!
            </p>
          </div>

          {/* Social Media Links */}
          <div className="space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-6 flex justify-between text-sm text-gray-300">
          <Link to="/policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/termsOfService" className="hover:text-white transition">Terms of Service</Link>
          <p>&copy; 2024 Event Pulse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
