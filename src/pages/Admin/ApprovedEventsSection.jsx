import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { BASE_URL } from "../../common/API_URL";

const ApprovedEventsSection = () => {
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sponsors, setSponsors] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("all");
  const [eventsCount, setEventsCount] = useState(0);

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/events/allEvents`
      );
      setEvents(response.data.data.events);
      setAllEvents(response.data.data.events);
      setEventsCount(response.data.data.events.length);
    } catch (error) {
      console.log("Error fetching pending events", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (dropdownValue === "all") {
      setEvents(allEvents); // Restore all events
      setEventsCount(allEvents.length);
    } else {
      const filteredEvents = allEvents.filter(
        (event) => event.status === dropdownValue
      );
      setEvents(filteredEvents);
      setEventsCount(filteredEvents.length);
    }
  }, [dropdownValue, allEvents]);

  const getSponsorsForEvent = async (eventId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/events/getSponsorsForEvent/${eventId}`
      );
      setSponsors(response.data.data.sponsors);
      
    } catch (error) {
      console.log("Error fetching sponsors for event", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(sponsors)

  const getParticipantsForEvent = async (eventId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/events/getParticipantsForEvent/${eventId}`
      );
      setParticipants(response.data.data.participants);
    } catch (error) {
      console.log("Error fetching participants for event", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const onDelete = async (eventId) => {
    try {
      await axios.delete(
        `${BASE_URL}/admin/deleteEvent/${eventId}`
      );
      fetchEvents();
    } catch (error) {
      console.log("Error deleting event", error);
    }
  };

  return (
    <div>
      <div>
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Events</h3>
            <div className="flex items-center justify-center">
              <p className="mr-5 bg-teal-500 text-white px-2.5 py-1.5 rounded-md">
                {eventsCount} events
              </p>

              <select
                name=""
                id=""
                value={dropdownValue}
                onChange={(e) => setDropdownValue(e.target.value)}
                className={`p-2 text-sm rounded-md border outline-none `}
              >
                <option value="all">All</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
          <hr className="mt-2" />
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-[85vh] animate-spin">
            <Loader size={40} />
          </div>
        ) : (
          <div>
            {events.length === 0 ? (
              <div className="bg-white p-3 rounded-xl shadow-lg border text-center">
                <p>No events to show.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                {events.map((event) => (
                  <Event
                    key={event._id}
                    event={event}
                    onDelete={onDelete}
                    setIsDrawerOpen={setIsDrawerOpen}
                    getParticipantsForEvent={getParticipantsForEvent}
                    getSponsorsForEvent={getSponsorsForEvent}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Event Drawer */}
        <div
          className={`fixed right-0 top-16 md:top-24 w-72 md:w-80 h-full md:h-[85vh] bg-gray-600 text-white shadow-lg transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out`}
        >
          <div className="p-4">
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="bg-red-500 px-3 py-1 rounded-full text-white hover:bg-red-600"
            >
              X
            </button>
            <h2 className="text-xl font-bold mt-4">Participants & Sponsors</h2>
            {participants && participants.length > 0 && (
              <div className="mt-4">
                <p>Participants</p>
                {participants.map((participant) => (
                  <div
                    key={participant._id}
                    className="bg-gray-700 p-2 rounded-md mt-2"
                  >
                    <p className="text-gray-400">{participant.email}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4">
              {sponsors && (
                <div>
                  <p>Sponsors</p>
                  {sponsors.map((sponsor) => (
                    <div
                      key={sponsor._id}
                      className="bg-gray-700 p-2 rounded-md mt-2"
                    >
                      <p className="text-gray-400">{sponsor.sponsorName}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {sponsors.length === 0 && participants.length === 0 ? (
              <p>No participants or sponsors.</p>
            ) : participants.length === 0 ? (
              <p className="text-gray-400 mt-2">No participants found.</p>
            ) : sponsors.length === 0 ? (
              <p className="text-gray-400">No sponsors found.</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedEventsSection;

const Event = ({
  event,
  onDelete,
  setIsDrawerOpen,
  getParticipantsForEvent,
  getSponsorsForEvent,
}) => {
  return (
    <div className="bg-white p-3 rounded-md shadow-md border flex flex-col justify-between">
      {/* Event Title */}
      <div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-700">
          <span className="font-semibold">Date:</span>{" "}
          {new Date(event.date).toDateString()}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Time:</span> {event.time}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Location:</span> {event.location}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Organizer:</span>{" "}
          {event.organizerName}
        </p>
        <p
          className={`font-semibold ${
            event.status === "approved"
              ? "text-green-600" // Approved (Green)
              : event.status === "rejected"
              ? "text-red-600" // Rejected (Red)
              : "text-yellow-500" // Pending (Yellow)
          }`}
        >
          <span className="text-gray-700">Status:</span>{" "}
          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Participants:</span>{" "}
          {event.participants.length}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Sponsors:</span>{" "}
          {event.sponsors.length}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Maximum Slots:</span>{" "}
          {event.maximumSlots}
        </p>

        <p className="text-gray-700 mb-3">
          <span className="font-semibold">Ticket Price:</span> ₹
          {event.ticketPrices}
        </p>

        <p className="text-gray-700 mb-4">{event.description}</p>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <div className="flex w-full justify-between gap-2"></div>
        <button
          onClick={() => onDelete(event._id)}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          Delete
        </button>
        <button
          onClick={() => {
            setIsDrawerOpen(true);
            getParticipantsForEvent(event._id);
            getSponsorsForEvent(event._id);
          }}
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
        >
          View Participants and Sponsors
        </button>
        {/* <button
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
        >
          View Sponsors ({event.sponsors.length})
        </button> */}
      </div>
    </div>
  );
};
