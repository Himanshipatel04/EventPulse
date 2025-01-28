import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams to access URL params
import { useUser } from "../context/UserContext";
import { toast, ToastContainer } from "react-toast";

const RegisterForEvent = () => {
  // Get event name and event ID from URL params
  const { eventId, eventTitle } = useParams();
 const { user } = useUser();
 const navigate = useNavigate()
 
  // State for the form
  const [formData, setFormData] = useState({
    id:eventId,
    name: "",
    email: "",
    event: decodeURIComponent(eventTitle), // Decode URL component for the event name
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // In a real-world app, you'd send the form data to an API here
    console.log("Form submitted:", formData);
    if (!user){
      toast("Login first!",{
        backgroundColor: "#FF0000",
        color: "#ffffff",
        type: "error",
      })
      navigate("/login")
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/api/events/registerInEvent",
        formData
      );
      console.log(response);
      toast("Registered in event successfully!",{
        backgroundColor: "#ffffff",
        color: "#000000",
        type: "success",
      })
    } catch (error) {
      toast(error.response.data?.message ?? "Can't register now. Try again later!",{
        backgroundColor: "#FF0000",
        color: "#ffffff",
        type: "error",
      })
      console.log("Error while registering in event", error);
    }
  };

  useEffect(() => {
    // Update the form data if the eventName in the URL changes
    setFormData((prevData) => ({
      ...prevData,
      event: decodeURIComponent(eventTitle),
    }));
  }, [eventTitle]); // This will trigger whenever the event name changes

  return (
    <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg my-20 md:mt-40 md:mb-36 mx-4 md:mx-auto outline outline-2 outline-teal-500">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
        Register for Event
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-teal-700 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name...."
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 outline outline-1 border-none rounded-lg"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-teal-700 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address...."
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 outline outline-1 border-none rounded-lg"
            required
          />
        </div>

        {/* Event Field - Unchangeable */}
        <div className="mb-4">
          <label
            htmlFor="event"
            className="block text-teal-700 font-semibold mb-2"
          >
            Event
          </label>
          <input
            type="text"
            id="event"
            name="event"
            value={formData.event}
            readOnly
            className="w-full px-4 py-2 border-none outline outline-1 outline-gray-400 rounded-lg bg-gray-100 text-gray-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-teal-700 hover:bg-teal-600 text-white py-2 px-8 rounded-md"
          >
            Register
          </button>
        </div>
      </form>
      <ToastContainer position="top-right"/>
    </div>
  );
};

export default RegisterForEvent;
