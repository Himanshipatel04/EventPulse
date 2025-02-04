import React from "react";
import { useUser } from "../../context/UserContext";

const AttendeeProfile = () => {
  // Dummy user data (Replace with API data)
  const attendee = {
    name: "John Doe",
    email: "john.doe@example.com",
    registeredEvents: [
      { id: 1, title: "React Conference 2024", date: "Sept 15, 2024" },
      { id: 2, title: "AI & ML Summit", date: "Oct 10, 2024" },
    ],
  };
  const {user} = useUser()

  return (
    <div className="mt-32 flex flex-col items-center justify-start min-h-[70vh]">
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Attendee Profile</h2>
        
        <div className="mb-4">
          <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-700"><strong>Role:</strong> {user.role}</p>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mb-2">Registered Events</h3>
        <ul className="space-y-2">
          {attendee.registeredEvents.length > 0 ? (
            attendee.registeredEvents.map((event) => (
             <div className="flex justify-between items-start w-full bg-gray-100 p-6 rounded-md shadow-sm">
                 <li key={event.id} className="">
                <p className="text-gray-800 text-xl font-semibold">{event.title}</p>
                <p className="text-sm text-gray-600">{event.date}</p>
              </li>
              <button className="p-2 bg-teal-400 rounded-md text-white">View Event Details</button>
             </div>
            ))
          ) : (
            <p className="text-gray-500">No events registered yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AttendeeProfile;
