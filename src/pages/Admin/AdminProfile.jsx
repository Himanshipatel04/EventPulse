import React, { useEffect, useState } from "react";
import UsersSection from "./UsersSection";
import ApprovedEventsSection from "./ApprovedEventsSection";
import SponsorsSection from "./SponsorsSection";
import PendingEventsSection from "./PendingEventsSection";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import { Users, Calendar, Handshake, Hourglass } from "lucide-react";

const tabIcons = {
  users: <Users size={18} />,
  events: <Calendar size={18} />,
  sponsors: <Handshake size={18} />,
  pending: <Hourglass size={18} />,
};

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [pendingEvents, setPendingEvents] = useState(0);
  const { user } = useUser();

  const fetchPendingEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/admin/getPendingEvents"
      );
      setPendingEvents(response.data.data.events.length);
    } catch (error) {
      console.log("Error fetching pending events", error);
    }
  };

  useEffect(() => {
    fetchPendingEvents();
  }, []);

  if (!user || user.role !== "Admin") {
    return (
      <div className="mt-24 flex flex-col items-center justify-start min-h-[80vh] py-16">
        <div className="max-w-6xl w-full mx-auto px-6 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-extrabold text-teal-700 mb-3 text-center">
            You are not authorized to view this page.
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 w-full min-h-screen bg-gray-50 pb-5 px-5 flex md:flex-row flex-col gap-4 ">
      {/* Sidebar */}
      <div className="outline outline-1 outline-gray-300 rounded-lg w-full md:w-[20vh] h-fit md:h-[85vh]">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold py-4">Admin</h2>
          <hr className="w-full border-gray-300" />
          <div className="flex w-full flex-row md:flex-col gap-4 py-3 px-3 md:px-0">
            {["users", "events", "sponsors", "pending"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 rounded-md flex items-center justify-center md:rounded-none w-full font-semibold ${
                  activeTab === tab
                    ? "bg-teal-200 backdrop-blur-md text-black"
                    : "text-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                <span className="ml-1 hidden md:block">{tabIcons[tab]}</span>
                {tab === "pending" && (
                  <span className="hidden md:inline">({pendingEvents})</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="outline outline-1 outline-gray-300 rounded-lg w-full h-[85vh] p-1 flex flex-col ">
        {/* Navigation Tabs */}
        {/* Content Sections */}
        <div className="flex-1 overflow-y-auto p-4 scrollbar-none">
          {activeTab === "users" && <UsersSection />}
          {activeTab === "events" && <ApprovedEventsSection />}
          {activeTab === "sponsors" && <SponsorsSection />}
          {activeTab === "pending" && <PendingEventsSection />}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
