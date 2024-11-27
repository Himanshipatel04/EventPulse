import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [status, setStatus] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token'); // Extract token from URL

  const handleResetPassword = async () => {
    if (!password) {
      setErrorMessage('Password cannot be empty.');
      return;
    }

    if (token) {
      try {
        setLoading(true);
        setErrorMessage('');
        const response = await axios.post('http://localhost:4000/api/user/resetPassword', { token, password });
        setStatus(response.data.message);
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.response ? error.response.data.message : 'Something went wrong');
        setLoading(false);
      }
    } else {
      setErrorMessage('No token provided.');
    }
  };

  return (
    <div>
      <h1 style={{ color: 'black', fontSize: '18px' }}>Reset Your Password</h1>
      <input
        type="password"
        placeholder="Enter your new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleResetPassword} disabled={loading || !password}>
        {loading ? 'Processing...' : 'Reset Password'}
      </button>
      {status && <p>{status}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default ResetPassword;
