// src/pages/Login.jsx
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"; // Font Awesome Icons
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with", { email, password });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Add forgot password logic here
    console.log("Password reset requested for", email);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-teal-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl outline outline-2 outline-teal-500">
        <h2 className="text-4xl font-semibold text-center text-teal-700 mb-8">
          Event Pulse
        </h2>
        {!forgotPassword ? (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <div className="relative">
                <FaEnvelope
                  size={18}
                  className="absolute left-3 top-5 text-teal-700"
                />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <div className="relative">
                <FaLock
                  size={18}
                  className="absolute left-3 top-5 text-teal-700"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-teal-700"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} className="top-2 relative " />
                  ) : (
                    <FaEye size={18} className="top-2 relative" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 focus:outline-none"
            >
              Login
            </button>
            <div className="flex justify-between mt-4">
              <Link
                to="/resetPassword"
                // onClick={() => setForgotPassword(true)}
                className="text-sm text-teal-700 hover:underline hover:text-teal-950"
              >
                Forgot Password?
              </Link>
              <a
                href="/signup"
                className="text-sm text-teal-700 "
              >
                Don't have an account? <span className="hover:underline hover:text-teal-950"> Sign Up</span>
              </a>
            </div>
          </form>
        ) : (
          <form onSubmit={handleForgotPassword}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Enter your email for password reset
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-teal-700" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 focus:outline-none"
            >
              Reset Password
            </button>
            <div className="mt-4 text-center">
              <button
                onClick={() => setForgotPassword(false)}
                className="text-sm text-teal-700 hover:underline"
              >
                Back to Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
