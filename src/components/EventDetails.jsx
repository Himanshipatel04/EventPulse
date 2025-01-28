import React from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  // Extract event ID and title from the URL
  const { eventId } = useParams();

  // Placeholder for fetched event data
  const eventData = {
    id: eventId,
    title: "React summit",
    date: "December 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "City Convention Center, New Delhi",
    description:
      "Join us for the Art & Design Week, an inspiring event showcasing creative works, workshops, and interactive sessions led by industry professionals. Explore the intersection of technology and creativity and connect with like-minded individuals.",
  };

  return (
    <div className="max-w-6xl mx-auto p-40">
      {/* Event Title */}
      <h1 className="text-4xl font-bold text-teal-700 text-center mb-6">
        {eventData.title}
      </h1>

      {/* Event Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Date and Time */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Date & Time</h3>
          <p className="text-gray-600">{eventData.date}</p>
          <p className="text-gray-600">{eventData.time}</p>
        </div>

        {/* Location */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Location</h3>
          <p className="text-gray-600">{eventData.location}</p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Description</h3>
          <p className="text-gray-600">{eventData.description}</p>
        </div>

        {/* Registration Button */}
        <div className="text-center">
          <a href={`/register/${eventData.id}/${eventData.title}`}>
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg text-lg transition">
              Register Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
