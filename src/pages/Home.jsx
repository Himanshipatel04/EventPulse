import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal-700 text-white text-center py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to Event Pulse
          </h1>
          <p className="text-xl mb-6">
            Simplifying event management with innovative technology. Plan,
            manage, and execute events like never before.
          </p>
          <Link to="/getStarted">
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-lg text-lg transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">
                Seamless Planning
              </h3>
              <p className="text-gray-700">
                Easily plan every aspect of your event with our intuitive
                platform.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">
                Real-Time Collaboration
              </h3>
              <p className="text-gray-700">
                Collaborate with your team and vendors seamlessly, all in
                real-time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">
                Analytics & Reporting
              </h3>
              <p className="text-gray-700">
                Get detailed insights on your event's performance with built-in
                analytics tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-teal-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <div className="flex justify-center space-x-6">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
              <p className="text-gray-700 italic">
                "Event Pulse made managing our conference so easy. The tools
                were intuitive and saved us so much time!"
              </p>
              <p className="mt-4 font-semibold text-teal-700">John D.</p>
              <p className="text-sm text-gray-500">Event Organizer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
              <p className="text-gray-700 italic">
                "A fantastic platform for event coordination. We were able to
                keep everything on track with ease."
              </p>
              <p className="mt-4 font-semibold text-teal-700">Samantha K.</p>
              <p className="text-sm text-gray-500">Corporate Planner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
