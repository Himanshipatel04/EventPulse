import axios from "axios";
import React, { useEffect, useState } from "react";
import { Eye, Loader, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";            
import { BASE_URL } from "../../common/API_URL";

const SponsorsSection = () => {
  const [sponsors, setSponsors] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("all");
  const [sponsorsCount, setSponsorsCount] = useState(0);
  const [_, setAllSponsors] = useState([]);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchSponsors();
    fetchUsers();
    fetchEvents();
  }, []);

  const fetchSponsors = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/sponsor/getSponsors`
      );
      console.log(response.data.data);
      setSponsors(response.data.data);
      setAllSponsors(response.data.data);
      setSponsorsCount(response.data.data.length);
    } catch (error) {
      console.error("Error fetching sponsors", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/users/getUsers`
      );
      setUsers(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/events/allEvents`
      );
      setEvents(response.data.data.events);
    } catch (error) {
      console.error("Error fetching events", error);
    }
    {
      setIsLoading(false);
    }
  };

  const onDeleteUser = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(
        `${BASE_URL}/sponsor/deleteSponsor/${id}`
      );
      fetchSponsors();
    } catch (error) {
      console.error("Error deleting sponsor", error);
    }
    {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Sponsors</h3>
        <div className="flex items-center justify-center">
          <p className="mr-5 bg-teal-500 text-white px-2.5 py-1.5 rounded-md">
            {sponsorsCount} sponsors
          </p>
          <select
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            className="p-2 rounded-md text-sm border outline-none"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="verified">Verified</option>
          </select>
        </div>
      </div>
      <hr className="mt-2" />
      {isLoading ? (
        <div className="flex items-center justify-center h-[85vh]">
          <Loader size={40} className="animate-spin" />
        </div>
      ) : (
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Email</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Event Name</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Verified</th>
              <th className="border p-2">Timestamp</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sponsors?.length > 0 ? (
              sponsors?.map((sponsor) => {
                const formattedAmount = new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(sponsor.amount);

                // Find the matching event
                const event = events?.find((e) => e._id === sponsor.eventId);
                const eventName = event ? event.title : "Unknown Event";

                // Find the matching sponsor (user)
                const sponsorUser = users.find(
                  (u) => u._id === sponsor.sponsorId
                );
                const sponsorEmail = sponsorUser
                  ? sponsorUser.email
                  : "Unknown Sponsor";

                return (
                  <tr key={sponsor._id} className="text-center">
                    <td className="border p-2">{sponsorEmail}</td>
                    <td className="border p-2">{sponsor.sponsorName}</td>
                    <td className="border p-2">{eventName}</td>
                    <td className="border p-2">{formattedAmount}</td>
                    <td className="border p-2">
                      {sponsor.status === "pending"
                        ? "Pending"
                        : sponsor.status === "Rejected"
                        ? "Rejected"
                        : "Approved"}
                    </td>
                    <td className="border p-2">
                      {sponsor.isVerified ? "Yes" : "No"}
                    </td>
                    <td className="border p-2">
                      {new Date(sponsor.createdAt).toLocaleString()}
                    </td>
                    <td className="flex items-center justify-center p-2 ">
                      <button
                        onClick={() => onDeleteUser(sponsor._id)}
                        className=""
                      >
                        <Trash2 size={17} />
                      </button>
                      <Link to={`/event-details/${sponsor.eventId}`} className="ml-2">
                        <Eye size={17} />
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" className="text-center p-4">
                  No sponsors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SponsorsSection;
