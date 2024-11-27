import React, { useState } from "react";
import { useSearchParams } from "react-router-dom"; // Use search params to get token from the URL
import axios from "axios";

const VerifyEmail = () => {
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // Extract token from the URL
  // console.log(token,"heelo");
  const handleVerifyClick = async () => {
    if (token) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/user/verifyEmail`,
          { token }
        );
        setStatus(response.data.message);
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
    <div>
      <h1 style={{ color: "black", fontSize: "18px" }}>Email Verification</h1>
      <button onClick={handleVerifyClick}>Verify Email</button>
      {status && <p>{status}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default VerifyEmail;
