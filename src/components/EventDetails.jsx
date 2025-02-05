import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, IndianRupee, Award, UserCheck2Icon, UserCircle2 } from "lucide-react"; // Icons for better UI

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/events/getEventById/${eventId}`
        );
        setEvent(response.data.data.event);
      } catch (error) {
        console.log("Error fetching event", error);
      }
    };

    fetchEvent();
  }, [eventId]);

  return (
    <div className="max-w-4xl mx-auto p-6 pt-24 min-h-[100vh]">
      {/* Event Title */}
      <h1 className="text-5xl font-bold text-teal-700 text-center mb-8">
        {event.title}
      </h1>

      {/* Event Card */}
      <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
        {/* Date */}
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="text-teal-600" />
          <p className="text-lg text-gray-700">
            {event.date ? new Date(event.date).toDateString() : "TBD"}
          </p>
        </div>

        {/* Time */}
        <div className="flex items-center gap-3 mb-4">
          <Clock className="text-teal-600" />
          <p className="text-lg text-gray-700">{event.time ?? "TBD"}</p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="text-teal-600" />
          <p className="text-lg text-gray-700">{event.location}</p>
        </div>

        {/* Ticket Price */}
        <div className="flex items-center gap-3 mb-4">
          <IndianRupee className="text-teal-600" />
          <p className="text-lg text-gray-700">₹{event.ticketPrices}</p>
        </div>

        {/* Participants Count */}
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-teal-600" />
          <p className="text-lg text-gray-700">
            {event.participants?.length || 0} Participants
          </p>
        </div>

        {/* Sponsors Count */}
        <div className="flex items-center gap-3 mb-4">
          <Award className="text-teal-600" />
          <p className="text-lg text-gray-700">
            {event.sponsors?.length || 0} Sponsors
          </p>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <UserCircle2 className="text-teal-600" />
          <p className="text-lg text-gray-700">
           {event.organizerName ||""} (Organizer)
          </p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            About the Event
          </h3>
          <p className="text-gray-600 leading-relaxed">{event.description}</p>
        </div>

        {/* Register Button */}
        <div className="text-center mt-6">
          <a href={`/register/${event._id}/${event.title}`}>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-md hover:shadow-lg">
              Register Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
