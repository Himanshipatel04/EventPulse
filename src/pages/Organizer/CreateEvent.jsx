import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../common/API_URL";

const CreateEvent = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    organizerName: "",
    maximumSlots: "",
    organizerId: user?._id || "", // Ensure this doesn't break if user is null
    status: "pending",
    ticketPrices: "",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await axios.get(
          `${BASE_URL}/events/allEvents`
        );
        console.log(events);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };
    fetchEvents();
  }, []); // ✅ Add empty dependency array to prevent infinite calls

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to create an event");
      return;
    }
    try {
      const response = await axios.post(
        `${BASE_URL}/events/createEvent`,
        formData
      );
      console.log(response.data);
      navigate("/organizer-dashboard");
      alert("Event created successfully");
    } catch (error) {
      console.error("Error creating event", error);
      alert("Error creating event");
    }
  };

  // ✅ Prevent early return before hooks
  if (!user) {
    return (
      <div className="text-center mt-10 text-red-500">
        <h2>Please login to create an event</h2>
      </div>
    );
  }


  return (
    <div className="mt-10 flex flex-col items-center justify-start min-h-[80vh]  py-16">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-xl p-8">
        <h2 className="text-3xl font-extrabold text-teal-700 mb-3 text-center">
          Create Your Event 🗓️
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Bring your ideas to life by creating an event. Fill out the details
          below to start.
        </p>

        {/* Event Form */}
        <form onSubmit={handleSubmit}>
          {/* Event Title */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Event Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Event Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Event Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="2"
              maxLength={200}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Event Organizer
            </label>
            <input
              id="organizerName"
              name="organizerName"
              value={formData.organizerName}
              onChange={handleChange}
              required
              rows="2"
              maxLength={200}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            ></input>
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Maximum Participants
            </label>
            <input
              id="maximumSlots"
              name="maximumSlots"
              value={formData.maximumSlots}
              onChange={handleChange}
              required
              rows="2"
              maxLength={200}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            ></input>
          </div>

          {/* Event Date */}
          <div className="mb-6">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Event Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Event Time */}
          <div className="mb-6">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Event Time (24-hour format e.g. 14:30 - 16:30)
            </label>
            <input
              type="text"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Event Location */}
          <div className="mb-6">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Event Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Organizer ID */}
          {/* <div className="mb-6">
            <label
              htmlFor="organizerId"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Organizer ID (User)
            </label>
            <input
              type="text"
              id="organizerId"
              name="organizerId"
              value={formData.organizerId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div> */}

          {/* Event Status */}
          <div className="mb-6">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Event Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            >
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Ticket Prices */}
          <div className="mb-6">
            <label
              htmlFor="ticketPrices"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Ticket Prices (₹)
            </label>
            <input
              type="text"
              id="ticketPrices"
              name="ticketPrices"
              value={formData.ticketPrices}
              placeholder="Enter ticket prices in INR for single ticket"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Participants */}
          {/* <div className="mb-6">
            <label
              htmlFor="participants"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Participants (User IDs, comma-separated)
            </label>
            <input
              type="text"
              id="participants"
              name="participants"
              value={formData.participants}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
              placeholder="Enter User IDs"
            />
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal-500 text-white text-lg py-3 px-8 rounded-lg font-semibold w-full hover:bg-teal-600 transition duration-300"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
