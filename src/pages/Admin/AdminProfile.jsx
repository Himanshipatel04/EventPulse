import React, { useEffect, useState } from "react";
import UsersSection from "./UsersSection";
import ApprovedEventsSection from "./ApprovedEventsSection";
import SponsorsSection from "./SponsorsSection";
import PendingEventsSection from "./PendingEventsSection";
import axios from "axios";

const AdminProfile = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [pendingEvents, setPendingEvents] = useState(0);

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

  return (
    <div className="pt-24 w-full min-h-screen bg-gray-50 pb-5 px-5 flex md:flex-row flex-col gap-4 ">
      {/* Sidebar */}
      <div className="outline outline-1 outline-gray-300 rounded-lg w-full md:w-[20vh] h-fit md:h-[85vh] ">
        <div className="flex flex-col items-center ">
          <h2 className="text-lg font-bold py-4">Admin</h2>
          <hr className="w-full border-gray-300 " />
          <div className="flex w-full flex-row md:flex-col gap-4 py-3 px-3 md:px-0">
            {["users", "events", "sponsors", "pending"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 rounded-md md:rounded-none w-full font-semibold ${
                  activeTab === tab
                    ? "bg-teal-200 backdrop-blur-md text-black"
                    : "text-gray-700"
                } `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
                <span className="hidden md:inline">
                {tab === "pending" && `(${pendingEvents})`}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="outline outline-1 outline-gray-300 rounded-lg w-full h-[85vh] p-1 flex flex-col overflow-auto">
        {/* Navigation Tabs */}

        {/* Content Sections */}
        <div className="flex-1 overflow-y-auto p-4">
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
