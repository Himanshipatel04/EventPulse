import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Calendar,
  CheckCircle,
  Handshake,
  Hourglass,
  Loader,
  MapPin,
  Ticket,
  UserCircle,
  Users,
  XCircle,
} from "lucide-react";
import { FaChair } from "react-icons/fa";
import { BASE_URL } from "../../common/API_URL";

const SponsorProfile = () => {
  const { user } = useUser();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isParticipantsLoading, setIsParticipantsLoading] = useState(false);
  const [viewParticipants, setViewParticipants] = useState(false);
  const [participants, setParticipants] = useState([]);

  // console.log(user);

  const getEventsForSponsor = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/sponsor/getEventsForSponsor/${user._id}`
      );
      setEvents(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log("Error fetching events for sponsor: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getParticipantsForEvent = async (eventId) => {
    setViewParticipants(true);
    setIsParticipantsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/events/getParticipantsForEvent/${eventId}`
      );
      console.log(response.data.data.participants);
      setParticipants(response.data.data.participants);
    } catch (error) {
      console.log("Error fetching participants", error);
    } finally {
      setIsParticipantsLoading(false);
    }
  };

  useEffect(() => {
    getEventsForSponsor();
  }, [user]);

  if (!user || user.role !== "Sponsor") {
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
        className={`max-w-8xl  text-gray-900 p-4 md:p-6 
        ${
          viewParticipants 
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
        <div className="mt-2 outline max-w-screen-2xl outline-gray-200 outline-1 p-4 rounded-xl">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-xl font-semibold text-teal-700">
                Manage Events
              </h2>
              <p className="text-sm text-gray-600">
                View, edit, or delete your events.
              </p>
            </div>
            <div>
             
              <button className="bg-teal-500 ml-4 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
                <Link to="/">View Events</Link>
              </button>
            </div>
          </div>
          {/* Event Cards */}
          <div className="w-full px-4">
            {isLoading ? (
              <div className="min-w-[1000px] flex items-center justify-center max-h-[60vh] md:min-h-[67vh]">
                <Loader className="animate-spin" size={40} />
              </div>
            ) : (
              <div className="max-h-[60vh] md:max-h-[67vh] overflow-auto scrollbar-none w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 w-full">
                  {events?.map((event) => (
                    <div
                      key={event.eventId._id}
                      className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between h-full w-full"
                    >
                      {/* Event Details */}
                      <div className="flex-1">
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-teal-700 mb-2 line-clamp-2">
                          {event.eventId.title}
                        </h3>

                        {/* Date & Time */}
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                          <span>
                            {new Date(event.eventId.date).toDateString()} (
                            {event.eventId.time ?? "Time TBD"})
                          </span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{event.eventId.location}</span>
                        </div>

                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <UserCircle className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{event.eventId.organizerName ?? "N/A"}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                          {event.eventId.description}
                        </p>

                        {/* Ticket Price */}
                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <Ticket className="w-4 h-4 mr-2 text-gray-500" />
                          <span>₹{event.eventId.ticketPrices} /-</span>
                        </div>

                        <div className="flex items-center text-sm text-gray-700 mb-2">
                          <FaChair className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{event.eventId.maximumSlots} </span>
                        </div>

                        {/* Event Status */}
                        <div className="flex items-center text-sm font-semibold mb-2">
                          {event.eventId.status === "approved" ? (
                            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          ) : event.eventId.status === "pending" ? (
                            <Hourglass className="w-4 h-4 mr-2 text-yellow-600" />
                          ) : (
                            <XCircle className="w-4 h-4 mr-2 text-red-600" />
                          )}
                          <span
                            className={
                              event.eventId.status === "approved"
                                ? "text-green-600"
                                : event.status === "pending"
                                ? "text-yellow-600"
                                : "text-red-600"
                            }
                          >
                            {event.eventId.status.charAt(0).toUpperCase() +
                              event.eventId.status.slice(1)}
                          </span>
                        </div>

                        {/* Participants & Sponsors */}
                        <div className="flex justify-between text-sm text-gray-700 mb-4">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2 text-gray-500" />
                            <span>
                              {event.eventId.participants?.length || 0} Participants
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Handshake className="w-4 h-4 mr-2 text-gray-500" />
                            <span>{event.eventId.sponsors?.length || 0} Sponsors</span>
                          </div>
                        </div>
                      </div>

                      {/* Fixed Bottom Buttons */}
                      <div className="mt-auto flex flex-col gap-2">
                        <button
                          onClick={() => {
                            setViewParticipants(true);
                            getParticipantsForEvent(event.eventId._id);
                          }}
                          className="bg-teal-500 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-600 transition"
                        >
                          <Users className="w-4 h-4 mr-2" /> View Participants
                        </button>

                    
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Event Update */}
     

      <div
        className={`transform max-h-96 overflow-auto min-w-[250px] max-w-[90%] h-fit px-4 py-3 mt-10 
    outline outline-2 rounded-md outline-teal-500 bg-white shadow-lg
    transition-all duration-500 ease-in-out
    ${
      viewParticipants || isParticipantsLoading
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
        {isParticipantsLoading ? (
          <div className="flex items-center p-3 justify-center min-h-[">
            <p className="text-black text-sm">Loading....</p>
          </div>
        ) : participants?.length ? (
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

      
    </div>
  );
};

export default SponsorProfile;
