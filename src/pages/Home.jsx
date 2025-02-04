import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useUser } from "../context/UserContext";
import axios from "axios";

const Home = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/events/allEvents"
        );
        console.log(response);
        setUpcomingEvents(response.data.data.events);
      } catch (error) {
        console.log("Error fetching events", error);
      }
    };
    fetchEvents();
  }, []);

  const { user } = useUser();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white text-center py-40"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        {/* Blurred background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "inherit",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px)", // Stronger blur effect
            zIndex: "-1",
          }}
        ></div>

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Text content */}
        <div className="relative z-10">
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

      {/* Create Event Section */}
      {user?.role === "Organizer" && (
        <section className="py-16 text-teal-700 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create an Event That Excites?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Whether you're hosting a small meetup, a grand conference, or a
              unique event, let your ideas shine! Get started by creating your
              event and inspire the world.
            </p>
            <div className="relative mb-8">
              <img
                src="https://canapii.com/wp-content/uploads/2023/03/Blog-banner-5-C-of-event-management.png" // Replace with your own image
                alt="Event Creation"
                className="rounded-lg object-cover w-full h-72"
              />
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
            </div>
            <Link
              className="bg-teal-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 shadow-lg"
              to="/createEvent"
            >
              Let's Create Your Event!
            </Link>
          </div>
        </section>
      )}

      {/* Upcoming Events Carousel */}
      <section className="py-16 bg-teal-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
            Upcoming Events
          </h2>
          <Slider {...carouselSettings}>
            {upcomingEvents.map((event) => (
              <div
              key={event._id}
              className="p-6 bg-white h-[350px] relative rounded-lg text-center flex flex-col justify-between overflow-hidden"
            >
              {/* Event Title */}
              <h3 className="text-xl font-bold text-teal-700 mb-2 text-ellipsis overflow-hidden whitespace-normal">
                {event.title}
              </h3>
            
              {/* Event Date */}
              <p className="text-gray-600 mb-2 font-semibold">
                {new Date(event.date).toLocaleDateString("en-IN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            
              {/* Event Location */}
              <p className="text-gray-700 mb-2 font-semibold">{event.location}</p>
            
              {/* Event Description */}
              <p className="text-gray-700 mb-4 text-sm">{event.description}</p>
            
              {/* Event Ticket Price */}
              <p className="text-sm text-gray-700 mb-2">
                💸 Ticket Price: ₹{event.ticketPrices} /-
              </p>
            
              {/* Event Status */}
              <p
                className={`text-sm font-semibold mb-2 ${
                  event.status === "approved"
                    ? "text-green-600"
                    : event.status === "pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                Status: {event.status}
              </p>
            
              {/* Event Participants */}
              <p className="text-sm text-gray-700 mb-4">
                👥 Participants: {event.participants.length}
              </p>
            
              {/* Action Buttons */}
              <div className="absolute bottom-3 flex gap-2 w-[87%] mx-auto">
                <Link to={`/register/${event._id}/${event.title}`} className="w-1/2">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 w-full rounded-lg text-sm transition">
                    Register for Event
                  </button>
                </Link>
                <Link to={`/register/${event._id}`} className="w-1/2">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 w-full rounded-lg text-sm transition">
                    View Event Details
                  </button>
                </Link>
              </div>
            </div>
            
            ))}
          </Slider>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://leadershipinfo.home.blog/wp-content/uploads/2019/02/group-business-people-meeting-planning-41699625.jpg" // Real URL
                alt="Seamless Planning"
                className="w-32 h-32 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-white mb-4">
                Seamless Planning
              </h3>
              <p className="text-gray-700">
                Easily plan every aspect of your event with our intuitive
                platform.
              </p>
            </div>
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/65fb34a45e253140736dc172/People-searching-for-creative-solutions--Teamwork-business-concept--Modern-vector/960x0.jpg?format=jpg&width=960" // Real URL
                alt="Real-Time Collaboration"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-4">
                Real-Time Collaboration
              </h3>
              <p className="text-gray-700">
                Collaborate with your team and vendors seamlessly, all in
                real-time.
              </p>
            </div>
            <div className="bg-teal-600 p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://www.soundandcommunications.com/wp-content/uploads/2019/11/Data-Ana.jpg" // Real URL
                alt="Analytics & Reporting"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-4">
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
      <section className="bg-teal-100 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">
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
              <img
                src="https://images.unsplash.com/photo-1521747116043-5bfb8e3f2e47" // Real URL
                alt="John D."
                className="w-20 h-20 rounded-full mx-auto mt-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
              <p className="text-gray-700 italic">
                "A fantastic platform for event coordination. We were able to
                keep everything on track with ease."
              </p>
              <p className="mt-4 font-semibold text-teal-700">Samantha K.</p>
              <p className="text-sm text-gray-500">Corporate Planner</p>
              <img
                src="https://images.unsplash.com/photo-1518601166159-bd8f86d120b4" // Real URL
                alt="Samantha K."
                className="w-20 h-20 rounded-full mx-auto mt-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
