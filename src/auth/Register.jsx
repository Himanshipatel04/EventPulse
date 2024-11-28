// src/pages/Signup.jsx
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Attendee");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with", { email, password, role });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-teal-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl outline outline-2 outline-teal-500">
        <h2 className="text-4xl font-semibold text-center text-teal-700 mb-8">Event Pulse</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <div className="relative">
              <FaEnvelope size={18} className="absolute left-3 top-5 text-teal-700" />
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <div className="relative">
              <FaLock size={18} className="absolute left-3 top-5 text-teal-700" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                required
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="role" className="block text-gray-600">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              <option value="Attendee">Attendee</option>
              <option value="Organizer">Organizer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 focus:outline-none"
          >
            Sign Up
          </button>
          <div className="flex justify-between mt-4">
            <a href="/login" className="text-sm text-teal-700 ">
              Already have an account?{" "}<span className="hover:underline hover:text-teal-950">Login</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
