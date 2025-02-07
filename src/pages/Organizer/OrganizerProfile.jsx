import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import {
  Calendar,
  MapPin,
  Users,
  Ticket,
  CheckCircle,
  Hourglass,
  XCircle,
  Handshake,
  Pencil,
  UserCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaChair } from "react-icons/fa";

const OrganizerProfile = () => {
  const { user } = useUser();

  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewParticipants, setViewParticipants] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [viewSponsors, setViewSponsors] = useState(false);
  const [sponsors, setSponsors] = useState([]);

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

  const getParticipantsForEvent = async (eventId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/events/getParticipantsForEvent/${eventId}`
      );
      console.log(response.data.data.participants);
      setParticipants(response.data.data.participants);
    } catch (error) {
      console.log("Error fetching participants", error);
    }
  };

  const getSponsorsForEvent = async (eventId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/events/getSponsorsForEvent/${eventId}`
      );
      console.log(response.data.data.sponsors);
      setSponsors(response.data.data.sponsors);
    } catch (error) {
      console.log("Error fetching sponsors", error);
    }
  };

  useEffect(() => {
    if (user?._id) {
      fetchEvents();
    }
  }, [user?._id]);

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

  return (
    <div className="min-h-screen text-white p-0 md:p-6 mt-12 flex items-start justify-center">
      <div
        className={`max-w-8xl  text-gray-900 p-4 md:p-6 ${
          isModalOpen ? "backdrop-blur-lg " : ""
        } 
        ${
          viewParticipants || viewSponsors  
            ? "-translate-x-4 transition-all duration-500"
            : "translate-x-0 transition-all duration-500"
        }          
        `}
      >
        {/* Organizer Profile Info */}
        <div className="text-center">
          <p className="text-5xl font-bold text-teal-700">Welcome !</p>
        </div>

        {/* Manage Events Section */}
        <div className="mt-2 outline outline-gray-200 outline-1 p-4 rounded-xl">
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
              <Link to="/createEvent">Create Event</Link>
            </button>
          </div>

          {/* Event Cards */}
         <div className="max-h-[60vh] md:max-h-[70vh] overflow-auto scrollbar-none">
         <div className="grid grid-cols-1 md:max-h-full md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {events?.map((event) => (
              <div
                key={event._id}
                className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between h-full"
              >
                {/* Event Details */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-teal-700 mb-2 line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Date & Time */}
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <span>
                      {new Date(event.date).toDateString()} (
                      {event.time ?? "Time TBD"})
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-sm text-gray-700 mb-2">
                    <MapPin  className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-700 mb-2">
                    <UserCircle className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{event.organizerName ?? "N/A"}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                    {event.description}
                  </p>

                  {/* Ticket Price */}
                  <div className="flex items-center text-sm text-gray-700 mb-2">
                    <Ticket className="w-4 h-4 mr-2 text-gray-500" />
                    <span>₹{event.ticketPrices} /-</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-700 mb-2">
                    <FaChair className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{event.maximumSlots} </span>
                  </div>

                  {/* Event Status */}
                  <div className="flex items-center text-sm font-semibold mb-2">
                    {event.status === "approved" ? (
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                    ) : event.status === "pending" ? (
                      <Hourglass className="w-4 h-4 mr-2 text-yellow-600" />
                    ) : (
                      <XCircle className="w-4 h-4 mr-2 text-red-600" />
                    )}
                    <span
                      className={
                        event.status === "approved"
                          ? "text-green-600"
                          : event.status === "pending"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }
                    >
                      {event.status.charAt(0).toUpperCase() +
                        event.status.slice(1)}
                    </span>
                  </div>

                  {/* Participants & Sponsors */}
                  <div className="flex justify-between text-sm text-gray-700 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-500" />
                      <span>
                        {event.participants?.length || 0} Participants
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Handshake className="w-4 h-4 mr-2 text-gray-500" />
                      <span>{event.sponsors?.length || 0} Sponsors</span>
                    </div>
                  </div>
                </div>

                {/* Fixed Bottom Buttons */}
                <div className="mt-auto flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setViewParticipants(true);
                      getParticipantsForEvent(event._id);
                    }}
                    className="bg-teal-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-600 transition"
                  >
                    <Users className="w-4 h-4 mr-2" /> View Participants
                  </button>

                  <button
                    onClick={() => {
                      setViewSponsors(true);
                      getSponsorsForEvent(event._id);
                    }}
                    className="bg-teal-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-600 transition"
                  >
                    <Handshake className="w-4 h-4 mr-2" /> View Sponsors
                  </button>

                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      fetchEventById(event._id);
                    }}
                    className="bg-teal-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-600 transition"
                  >
                    <Pencil className="w-4 h-4 mr-2" /> Update Event
                  </button>
                </div>
              </div>
            ))}
          </div>
         </div>

          {/* View All Events Button */}
          {/* <button className="mt-6 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
            View All Events
          </button> */}
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
                  type="text"
                  placeholder="Maximum Slots" 
                  value={selectedEvent?.maximumSlots}
                  name="maximumSlots"
                  onChange={handleInputChange}                  
                  className="border border-teal-400 rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-teal-500"
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
                  placeholder="Event Time"
                  value={selectedEvent?.time}
                  name="time"
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

      <div
        className={`transform max-h-96 overflow-auto min-w-[250px] max-w-[90%] h-fit px-4 py-3 mt-10 
    outline outline-2 rounded-md outline-teal-500 bg-white shadow-lg
    transition-all duration-500 ease-in-out
    ${
      viewParticipants
        ? "block translate-y-0 scale-100 visible"
        : "hidden translate-y-5 scale-95 invisible"
    }
  `}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-teal-700">
            {`Participants (${participants?.length})`}
          </h2>
          <button
            onClick={() => setViewParticipants(false)}
            className="bg-red-500 flex items-center justify-center rounded-full h-6 w-6 text-center"
          >
            X
          </button>
        </div>
        {participants?.length ? (
          participants.map((value, index) => (
            <p
              className="text-gray-600 pb-1 mt-2 border-b border-gray-200"
              key={index}
            >
              {value.email}
            </p>
          ))
        ) : (
          <p className="text-gray-400">No participants found!</p>
        )}
      </div>

      <div
        className={`transform max-h-96 overflow-auto min-w-[250px] max-w-[90%] h-fit px-4 py-3 mt-10 
    outline outline-2 rounded-md outline-teal-500 bg-white shadow-lg
    transition-all duration-500 ease-in-out
    ${
      viewSponsors
        ? "block translate-y-0 scale-100 visible"
        : "hidden translate-y-5 scale-95 invisible"
    }
  `}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-teal-700">
            {`Sponsors (${sponsors?.length})`}
          </h2>
          <button
            onClick={() => setViewSponsors(false)}
            className="bg-red-500 flex items-center justify-center rounded-full h-6 w-6 text-center"
          >
            X
          </button>
        </div>
        {sponsors?.length ? (
          sponsors.map((value, index) => (
            <p
              className="text-gray-600 pb-1 mt-2 border-b border-gray-200"
              key={index}
            >
              {value.name}
            </p>
          ))
        ) : (
          <p className="text-gray-400">No sponsors found!</p>
        )}
      </div>
    </div>
  );
};

export default OrganizerProfile;
