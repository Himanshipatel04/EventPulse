import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

const OrganizerProfile = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="mt-24 flex flex-col items-center justify-start min-h-[80vh] py-16">
        <div className="max-w-6xl w-full mx-auto px-6 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-extrabold text-teal-700 mb-3 text-center">
            Please log in to view your profile
          </h2>
        </div>
      </div>
    );
  }

  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/events/getEventsByOrganizer/${user._id}`
      );
      setEvents(response.data.data.events);
    } catch (error) {
      console.log("Error fetching events", error);
    }
  };

  const handleUpdateEvent = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/events/updateEvent/${selectedEvent._id}`,
        selectedEvent
      );
      console.log(response.data);
      alert("Event updated successfully");
      setIsModalOpen(false);
    } catch (error) {
      console.log("Error updating event", error);
      alert("Error updating event");
    }
  };

  const fetchEventById = async (eventId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/events/getEventById/${eventId}`
      );
      console.log(response.data.data.event);
      setSelectedEvent(response.data.data.event);
    } catch (error) {
      console.log("Error fetching event", error);
      alert("Error fetching event");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (user?._id) {
      fetchEvents();
    }
  }, [user?._id]);

  return (
    <div className="min-h-screen text-white p-6 pt-20 flex items-start justify-center">
      <div
        className={`max-w-7xl text-gray-900 p-6 ${
          isModalOpen ? "backdrop-blur-lg " : ""
        }`}
      >
        {/* Organizer Profile Info */}
        <div className="text-center">
          <p className="text-5xl font-bold text-teal-700">Welcome !</p>
        </div>

        {/* Manage Events Section */}
        <div className="mt-6 outline outline-gray-200 outline-1 p-6 rounded-xl">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-xl font-semibold text-teal-700">
                Manage Events
              </h2>
              <p className="text-sm text-gray-600">
                View, edit, or delete your events.
              </p>
            </div>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
              <Link to="/createEvent">Create Event + </Link>
            </button>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {events?.map((event) => (
              <div
                key={event._id}
                className="bg-gray-100 relative pb-28 p-4 rounded-lg shadow-md flex flex-col"
              >
                <h3 className="text-lg font-semibold text-teal-700 h-14">
                  {event.title}
                </h3>
                <p className="text-sm font-semibold text-gray-600">
                  {new Date(event.date).toDateString()}
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  {event.location}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {event.description}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  🎟 Ticket Price: ₹{event.ticketPrices} /-
                </p>
                <p
                  className={`text-sm font-semibold mt-1 ${
                    event.status === "approved"
                      ? "text-green-600"
                      : event.status === "pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  Status: {event.status}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  👥 Participants: {event.participants.length}
                </p>

                {/* Manage Button */}
                <button className="absolute bottom-14 w-[90%] bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
                  View Participants
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    fetchEventById(event._id);
                  }}
                  className="absolute bottom-2 w-[90%] bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                >
                  Update Event
                </button>
              </div>
            ))}
          </div>

          {/* View All Events Button */}
          <button className="mt-6 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
            View All Events
          </button>
        </div>
      </div>

      {/* Modal for Event Update */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center 
    transition-opacity duration-500 ease-in-out  bg-black bg-opacity-50 
    ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
      >
        <div
          className={`transform transition-all duration-200 ease-in-out 
      ${
        isModalOpen
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-10 scale-95 opacity-0"
      }
    `}
        >
          <div className="bg-white w-[90%] max-w-md h-[50%] p-6 rounded-xl shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700  duration-500 transition-all ease-out"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>

            {/* Modal Content */}
            <div className="flex flex-col justify-center items-center h-full">
              <h2 className="text-2xl font-semibold text-teal-700 mb-4">
                Update Event
              </h2>
              <p className="text-gray-600 mb-4">
                Here you can update the details of your event. Make sure to fill
                in the required information.
              </p>
              <div className="w-full flex flex-col gap-4">
                {/* Form for event update */}
                <input
                  type="text"
                  placeholder="Event Title"
                  value={selectedEvent?.title}
                  name="title"
                  disabled={true}
                  className="border border-teal-400 rounded-md p-2 text-gray-400 font-semibold focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <input
                  type="date"
                  value={
                    selectedEvent?.date
                      ? new Date(selectedEvent?.date)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  name="date"
                  onChange={handleInputChange}
                  className="border border-teal-400 text-black rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />

                <input
                  placeholder="Event Location"
                  value={selectedEvent?.location}
                  name="location"
                  onChange={handleInputChange}
                  className="border border-teal-400 text-black rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <button
                  className="bg-teal-500 text-white rounded-lg py-2 hover:bg-teal-600 transition duration-200"
                  onClick={handleUpdateEvent}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerProfile;
