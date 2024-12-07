import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

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

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovators Summit",
      date: "Dec 10, 2024",
      description: "Explore the latest in technology and innovation.",
      image: "https://images.unsplash.com/photo-1517440229533-67bc9b6cb8a5", // Real URL
    },
    {
      id: 2,
      title: "Cultural Extravaganza",
      date: "Jan 5, 2025",
      description: "Experience a night of vibrant cultural performances.",
      image: "https://images.unsplash.com/photo-1562004741-5d1be5f7e0b7", // Real URL
    },
    {
      id: 3,
      title: "Startup Expo 2025",
      date: "Feb 15, 2025",
      description: "Showcase your startup and connect with investors.",
      image: "https://images.unsplash.com/photo-1584688240737-4502405d01c5", // Real URL
    },
    {
      id: 4,
      title: "Art & Design Week",
      date: "Mar 20, 2025",
      description: "Discover creative works from artists and designers.",
      image: "https://images.unsplash.com/photo-1511905223142-fd8d8b14b548", // Real URL
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
      className="bg-cover bg-center text-white text-center py-24 relative "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", // Real URL
        filter: "blur(1px)", // Apply blur effect to the background image (slightly stronger blur)
      }}
    >
      {/* Overlay to enhance text visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjusted opacity for better text contrast */}

      {/* Text content */}
      <div className="relative z-10">
        <h1 className="text-5xl z-10 font-bold leading-tight mb-4">
          Welcome to Event Pulse
        </h1>
        <p className="text-xl mb-6">
          Simplifying event management with innovative technology. Plan, manage, and execute events like never before.
        </p>
        <Link to="/getStarted">
          <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-lg text-lg transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>

      {/* Upcoming Events Carousel */}
      <section className="py-16 bg-teal-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
            Upcoming Events
          </h2>
          <Slider {...carouselSettings}>
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold text-teal-700 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.date}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex gap-2 w-full">
                  <Link
                    to={`/register/${event.id}/${event.title}`}
                    className="w-1/2"
                  >
                    <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 w-full rounded-lg text-sm transition">
                      Register for Event
                    </button>
                  </Link>
                  <Link to={`/register/${event.id}`} className="w-1/2">
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
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" // Real URL
                alt="Seamless Planning"
                className="w-16 h-16 mx-auto mb-4"
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
                src="https://images.unsplash.com/photo-1506970033037-8e0c9d4f7361" // Real URL
                alt="Real-Time Collaboration"
                className="w-16 h-16 mx-auto mb-4"
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
                src="https://images.unsplash.com/photo-1516741537983-0fd37cb42192" // Real URL
                alt="Analytics & Reporting"
                className="w-16 h-16 mx-auto mb-4"
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
