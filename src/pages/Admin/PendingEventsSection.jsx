import React, { useEffect, useState } from "react";
import axios from "axios";

const PendingEventsSection = () => {
  const [pendingEvents, setPendingEvents] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [sponsors, setSponsors] = useState([]);

  const fetchPendingEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/admin/getPendingEvents"
      );
      setPendingEvents(response.data.data.events);
    } catch (error) {
      console.log("Error fetching pending events", error);
    }
  };

  const getSponsorsForEvent = async (eventId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/events/getSponsorsForEvent/${eventId}`
      );
      setSponsors(response.data.data.sponsors);
    } catch (error) {
      console.log("Error fetching sponsors for event", error);
    }
  };

  const getParticipantsForEvent = async (eventId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/events/getParticipantsForEvent/${eventId}`
      );
      setParticipants(response.data.data.participants);
    } catch (error) {
      console.log("Error fetching participants for event", error);
    }
  };

  const onApprove = async (eventId) => {
    try {
      await axios.put(      
        `http://localhost:4000/api/admin/approveEvent/${eventId}`         
      );
      fetchPendingEvents();           
    } catch (error) {       
      console.error("Error approving event", error);              
    }
  };

  const onReject = async (eventId) => {               
    try { 
      await axios.put(  
        `http://localhost:4000/api/admin/rejectEvent/${eventId}`            
      );
      fetchPendingEvents();               
    } catch (error) {     
      console.error("Error rejecting event", error);              
    }
  };

  const onDelete = async (eventId) => {         
    try {
      await axios.delete(         
        `http://localhost:4000/api/admin/deleteEvent/${eventId}`            
      );
      fetchPendingEvents();       
    } catch (error) {       
      console.error("Error deleting event", error);     
    }
  };


  useEffect(() => {
    fetchPendingEvents();
  }, []);

  return (
    <div>
      <div>
        <div>
          <h3 className="text-xl font-semibold">Pending Events</h3>
          <hr className="mt-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
          {pendingEvents.map((event) => (
            <PendingEvents
              key={event._id}
              event={event}
              onApprove={onApprove}
              onReject={onReject}
              onDelete={onDelete}
              setIsDrawerOpen={setIsDrawerOpen}
              getParticipantsForEvent={getParticipantsForEvent}
              getSponsorsForEvent={getSponsorsForEvent}
            />
          ))}
        </div>

        {/* No Pending Events */}
        {pendingEvents.length === 0 && (
          <div className="bg-white p-3 rounded-xl shadow-lg border text-center">
            <p>No pending events for approval.</p>
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
              className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600"
            >
              Close
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
                      <p className="text-gray-400">{sponsor.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {sponsors.length === 0 ? (
              <p className="text-gray-400">No sponsors found.</p>
            ) : participants.length === 0 ? (
              <p className="text-gray-400 mt-2">No participants found.</p>
            ) : (
              (sponsors.length === 0 && participants.length === 0) ?? (
                <p>No participants or sponsors.</p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingEventsSection;

const PendingEvents = ({
  event,
  onApprove,
  onReject,
  onDelete,
  setIsDrawerOpen,
  getParticipantsForEvent,
  getSponsorsForEvent,
}) => {
  return (
    <div className="bg-white p-3 rounded-xl shadow-lg border flex flex-col justify-between">
      {/* Event Title */}
      <div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600">
          <span className="font-semibold">Date:</span>{" "}
          {new Date(event.date).toDateString()}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Time:</span> {event.time}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Location:</span> {event.location}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Organizer:</span>{" "}
          {event.organizerName}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Participants:</span>{" "}
          {event.participants.length}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Maximum Slots:</span>{" "}
          {event.maximumSlots}
        </p>


        <p className="text-gray-600 mb-3">
          <span className="font-semibold">Ticket Price:</span> ₹
          {event.ticketPrices}
        </p>
        <p className="text-gray-700 mb-4">{event.description}</p>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <div className="flex w-full justify-between gap-2">
          <button
            onClick={() => onApprove(event._id)}
            className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700 transition"
          >
            Approve
          </button>
          <button
            onClick={() => onReject(event._id)}
            className="bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Reject
          </button>
        </div>
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
