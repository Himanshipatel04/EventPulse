// src/pages/GetStarted.js
import React from "react";

const GetStarted = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal-700 text-white text-center py-24">
        <h1 className="text-5xl font-bold mb-4">Get Started with Event Pulse</h1>
        <p className="text-xl mb-6">
          Organize, manage, and host events with ease. Event Pulse is your all-in-one event management platform!
        </p>
        <a
          href="/signup"
          className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600"
        >
          Sign Up Now
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-teal-700 mb-8">
            How Event Pulse Helps You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Event Planning</h3>
              <p className="text-lg text-gray-700">
                Plan your events seamlessly, from guest lists to agendas and timelines.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Team Collaboration</h3>
              <p className="text-lg text-gray-700">
                Collaborate with your team in real-time, share updates, and manage tasks effortlessly.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Event Analytics</h3>
              <p className="text-lg text-gray-700">
                Gain insights into event performance, attendee engagement, and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-teal-700 mb-8">
            How to Get Started
          </h2>
          <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0">
            <div className="bg-teal-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Step 1: Sign Up</h3>
              <p className="text-lg text-gray-700">
                Create an account with Event Pulse and set up your profile.
              </p>
            </div>
            <div className="bg-teal-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Step 2: Create Event</h3>
              <p className="text-lg text-gray-700">
                Start a new event and invite your team or attendees to collaborate.
              </p>
            </div>
            <div className="bg-teal-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4">Step 3: Launch & Manage</h3>
              <p className="text-lg text-gray-700">
                Host your event, track progress, and manage tasks in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-700 text-white text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Join thousands of event planners using Event Pulse to host successful events. Start today!
        </p>
        <a
          href="/signup"
          className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600"
        >
          Sign Up Now
        </a>
      </section>
    </div>
  );
};

export default GetStarted;
