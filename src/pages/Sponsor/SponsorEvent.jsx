import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import { BASE_URL } from "../../common/API_URL";

const SponsorForm = () => {
  const { eventId,eventTitle } = useParams(); // Get event ID from URL
  const { user } = useUser();   
  const [formData, setFormData] = useState({
    sponsorName: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(`${BASE_URL}/sponsor/createSponsor`, {
        eventId,
        sponsorId:user._id,
        sponsorName: formData.sponsorName,
        amount: Number(formData.amount),
      });
      console.log(response)
      setMessage("Sponsorship submitted successfully!");
    } catch (error) {
      setMessage("Error submitting sponsorship.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[90vh] mt-16 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-80 md:w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sponsor Event</h2>
        <p className="text-gray-600">
          Sponsoring event: <span className="font-semibold">{eventTitle}</span>
        </p>

        <form className="mt-4" onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="sponsorName"
            value={formData.sponsorName}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mb-4 outline-none focus:ring-1 focus:ring-teal-500"
            placeholder="Enter your name"
            required
          />

          <label className="block text-gray-700 font-medium mb-2">
            Sponsorship Amount (INR ₹)
          </label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mb-4 outline-none focus:ring-1 focus:ring-teal-500"  
            placeholder="Enter amount"
            required
          />

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 w-full rounded-md transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Sponsor Now"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-gray-700 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default SponsorForm;
