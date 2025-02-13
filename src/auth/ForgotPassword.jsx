import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { navigate } = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/forgotPassword",
        { email }
      );
      toast.success(response.data.data);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      toast.error(
        error.response.data.message || "Error while forgetting email"
      );
      console.log("Error while forgetting email", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-teal-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-teal-700 mb-6">
          Reset Your Password
        </h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
        </div>
        <button
          onClick={handleForgotPassword}
          disabled={ !email}
          className={`w-full py-2 mt-4 ${
            !email ? "bg-teal-600 cursor-not-allowed" : "bg-teal-700"
          } text-white rounded-md hover:bg-teal-800 focus:outline-none`}
        >Forgot Password</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
