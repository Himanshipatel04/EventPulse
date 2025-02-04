import React from "react";

const OrganizerProfile = () => {
  const events = [
    {
      _id: "1",
      title: "Tech Conference 2024",
      description: "A global summit featuring AI and Blockchain advancements.",
      date: "2024-09-15T10:00:00Z",
      location: "New York, USA",
      organizerId: "123456",
      status: "approved",
      ticketPrices: 50,
      participants: ["user1", "user2", "user3"],
    },
    {
      _id: "2",
      title: "Startup Pitch Fest",
      description:
        "Connect with top investors and showcase your startup ideas.",
      date: "2024-10-10T12:00:00Z",
      location: "San Francisco, USA",
      organizerId: "789012",
      status: "pending",
      ticketPrices: 30,
      participants: ["user4", "user5"],
    },
    {
      _id: "3",
      title: "AI & ML Summit",
      description: "Deep dive into AI and machine learning innovations.",
      date: "2024-11-05T14:00:00Z",
      location: "London, UK",
      organizerId: "345678",
      status: "rejected",
      ticketPrices: 70,
      participants: [],
    },
  ];

  return (
    <div className="min-h-screen text-white p-6 pt-28 flex items-start  justify-center">
      <div className="max-w-7xl text-gray-900 p-6 ">
        {/* Organizer Profile Info */}
        <div className="text-center">
          <p className="text-5xl font-bold text-teal-700">Welcome !</p>
        </div>

        {/* Manage Events Section */}
        <div className="mt-6 outline outline-gray-200 outline-1 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-teal-700">Manage Events</h2>
          <p className="text-sm text-gray-600">
            View, edit, or delete your events.
          </p>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col"
              >
                <h3 className="text-lg font-semibold text-teal-700">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {new Date(event.date).toDateString()}
                </p>
                <p className="text-sm text-gray-700">{event.location}</p>
                <p className="text-sm text-gray-700 mt-1">
                  {event.description}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  🎟 Ticket Price: ${event.ticketPrices}
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
                <button className="mt-6 bg-teal-700 text-white px-3 py-1 rounded-lg hover:bg-teal-600">
                  Manage
                </button>
              </div>
            ))}
          </div>

          {/* View All Events Button */}
          <button className="mt-6 bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
            View All Events
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrganizerProfile;
