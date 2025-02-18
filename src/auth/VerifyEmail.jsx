import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../common/API_URL";

const VerifyEmail = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleVerifyClick = async () => {
    if (token) {
      try {
        console.log(token)
        const response = await axios.post(
          `${BASE_URL}/users/verifyEmail`,
          { token }
        );
        console.log(response);
        setStatus(response.data.message);
        navigate("/login")
      } catch (error) {
        setErrorMessage(
          error.response ? error.response.data.message : "Something went wrong"
        );
      }
    } else {
      setErrorMessage("No token provided.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-teal-700 mb-6">
          Email Verification
        </h1>
        <p className="text-gray-600 mb-4">
          Please click the button below to verify your email address.
        </p>
        <button
          onClick={handleVerifyClick}
          className="w-full py-2 mt-4 bg-teal-700 text-white rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          Verify Email
        </button>
        {status && (
          <p className="mt-4 text-center text-green-600">{status}</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-center text-red-600">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
