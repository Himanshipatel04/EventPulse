import React from "react";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal-700 text-white text-center py-40">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold leading-tight mb-4">Our Services</h1>
          <p className="text-xl mb-6">
            Explore the wide range of event management services offered by Event Pulse, designed to make your event a success.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Event Planning</h3>
              <p className="text-gray-700">
                Comprehensive event planning services to help you create the perfect event from start to finish.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Vendor Management</h3>
              <p className="text-gray-700">
                Effortlessly manage and communicate with your event vendors to ensure a seamless experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Guest List Management</h3>
              <p className="text-gray-700">
                Organize and manage your guest list, sending invitations and tracking RSVP statuses with ease.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-700">
                Gain insights into your event's performance with real-time data and post-event analytics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Event Promotion</h3>
              <p className="text-gray-700">
                Use our tools to promote your event across various channels, maximizing its reach and attendance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Live Event Support</h3>
              <p className="text-gray-700">
                Get live support for your event, ensuring everything runs smoothly during the event day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
