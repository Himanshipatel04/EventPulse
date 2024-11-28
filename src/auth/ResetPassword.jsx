import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // Extract token from URL

  const handleResetPassword = async () => {
    if (!password) {
      setErrorMessage("Password cannot be empty.");
      return;
    }

    if (token) {
      try {
        setLoading(true);
        setErrorMessage("");
        const response = await axios.post(
          "http://localhost:4000/api/user/resetPassword",
          { token, password }
        );
        setStatus(response.data.message);
        setLoading(false);
      } catch (error) {
        setErrorMessage(
          error.response ? error.response.data.message : "Something went wrong"
        );
        setLoading(false);
      }
    } else {
      setErrorMessage("No token provided.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-teal-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-teal-700 mb-6">
          Reset Your Password
        </h1>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">
            New Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
        </div>
        <button
          onClick={handleResetPassword}
          disabled={loading || !password}
          className={`w-full py-2 mt-4 ${
            loading || !password
              ? "bg-teal-600 cursor-not-allowed"
              : "bg-teal-700"
          } text-white rounded-md hover:bg-teal-800 focus:outline-none`}
        >
          {loading ? "Processing..." : "Reset Password"}
        </button>
        {status && <p className="mt-4 text-center text-green-700">{status}</p>}
        {errorMessage && (
          <p className="mt-4 text-center text-red-600">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
