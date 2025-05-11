import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useUser } from "../context/UserContext";
import { Calendar, MapPin, Users, BadgeCheck } from "lucide-react";
import axios from "axios";
import { BASE_URL } from "../common/API_URL";
import { motion } from "framer-motion";

const Home = () => {
  const testimonials = [
    {
      name: "Aarav Mehta",
      designation: "Event Organizer, TechVerse",
      message:
        "EventPulse streamlined our entire event process. From registrations to feedback, everything was seamless!",
    },
    {
      name: "Sneha Rathi",
      designation: "Marketing Lead, InnovateX",
      message:
        "The analytics and engagement tools in EventPulse helped us connect better with our audience. Loved the experience!",
    },
    {
      name: "Kabir Singh",
      designation: "Speaker & Industry Expert",
      message:
        "Thanks to EventPulse, I was able to engage with attendees before, during, and after the event effortlessly.",
    },
    {
      name: "Aarav Mehta",
      designation: "Event Organizer, TechVerse",
      message:
        "EventPulse streamlined our entire event process. From registrations to feedback, everything was seamless!",
    },
    {
      name: "Sneha Rathi",
      designation: "Marketing Lead, InnovateX",
      message:
        "The analytics and engagement tools in EventPulse helped us connect better with our audience. Loved the experience!",
    },
    {
      name: "Kabir Singh",
      designation: "Speaker & Industry Expert",
      message:
        "Thanks to EventPulse, I was able to engage with attendees before, during, and after the event effortlessly.",
    },
    {
      name: "Aarav Mehta",
      designation: "Event Organizer, TechVerse",
      message:
        "EventPulse streamlined our entire event process. From registrations to feedback, everything was seamless!",
    },
    {
      name: "Sneha Rathi",
      designation: "Marketing Lead, InnovateX",
      message:
        "The analytics and engagement tools in EventPulse helped us connect better with our audience. Loved the experience!",
    },
    {
      name: "Kabir Singh",
      designation: "Speaker & Industry Expert",
      message:
        "Thanks to EventPulse, I was able to engage with attendees before, during, and after the event effortlessly.",
    },
  ];

  const faqs = [
    {
    question: "What is EventPulse?",
    answer: "EventPulse is a platform to manage and promote events efficiently.",
  },
  {
    question: "Is EventPulse free to use?",
    answer: "Yes, it's free for individuals and small organizations.",
  },
  {
    question: "Can I list multiple events?",
    answer: "Absolutely. You can list as many events as you'd like.",
  },
  {
    question: "How do I register on EventPulse?",
    answer: "Simply click on the register button on the homepage and fill in the required details to create an account.",
  },
  {
    question: "How can I update my event details?",
    answer: "To update event details, go to your event dashboard and click on 'Edit Event'. Make the necessary changes and save.",
  },
  {
    question: "Can I cancel my event?",
    answer: "Yes, you can cancel your event anytime through your event dashboard. However, if you’ve paid for promotion, no refund will be issued for those services.",
  },

  ];

  const [openAccordian, setOpenAccordian] = useState(-1);

  const handleOpenAccordian = (id) => {
    setOpenAccordian((prev) => (prev == id ? -1 : id));
  };

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
        const response = await axios.get(`${BASE_URL}/events/allEvents`);
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
      <section className="relative text-white text-center py-48 md:py-36 overflow-hidden">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        ></div>

        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Content - Ensures Clarity */}
        <div className="relative z-10">
          <h1 className="text-6xl font-bold leading-tight mb-4">
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
                className="p-4 bg-white h-[350px] rounded-lg text-center  "
              >
                {/* Event Title */}
                <div className="flex flex-col justify-end h-full">
                  <div className="">
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
                      })}{" "}
                      {"(" + (event.time ?? "Time TBD") + ")"}
                    </p>

                    {/* Event Location */}
                    <p className="text-gray-700 mb-2 font-semibold">
                      {event.location}
                    </p>

                    <p className="text-md text-gray-700 mb-2">
                      Organized By: {event.organizerName}
                    </p>

                    {/* Event Description */}
                    <p className="text-gray-700 mb-4 text-sm">
                      {event.description}
                    </p>

                    {/* Event Participants */}
                    <p className="text-sm text-gray-700 mb-4">
                      👥 Participants: {event.participants.length}/
                      {event.maximumSlots}
                    </p>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    {/* Attendee or No User */}
                    {(!user || user?.role === "Attendee") && (
                      <div className="w-full flex gap-2">
                        <Link
                          to={`/register/${event._id}/${event.title}`}
                          className="w-1/2"
                        >
                          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 w-full rounded-lg text-sm transition">
                            Register for Event
                          </button>
                        </Link>
                        <Link
                          to={`/event-details/${event._id}`}
                          className="w-1/2"
                        >
                          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 w-full rounded-lg text-sm transition">
                            View Event Details
                          </button>
                        </Link>
                      </div>
                    )}

                    {/* Organizer */}
                    {(user?.role === "Organizer" || user?.role === "Admin") && (
                      <Link
                        to={`/event-details/${event._id}`}
                        className="w-full"
                      >
                        <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 w-full rounded-lg text-sm transition">
                          View Event Details
                        </button>
                      </Link>
                    )}

                    {/* Sponsor */}
                    {user?.role === "Sponsor" && (
                      <div className="w-full flex gap-2">
                        <Link
                          to={`/sponsor/${event._id}/${event.title}`}
                          className="w-1/2"
                        >
                          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 w-full rounded-lg text-sm transition">
                            Sponsor Event
                          </button>
                        </Link>
                        <Link
                          to={`/event-details/${event._id}`}
                          className="w-1/2"
                        >
                          <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 w-full rounded-lg text-sm transition">
                            View Event Details
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
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
        <div className=" mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">
            What Our Users Say
          </h2>
          <div className="carouselAnimation">
            <div className="carousel">
              {[...testimonials, ...testimonials].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center flex-shrink-0"
                >
                  <p className="text-gray-700 italic">{value.message}</p>
                  <p className="mt-4 font-semibold text-teal-700">
                    {value.name}
                  </p>
                  <p className="text-sm text-gray-500">{value.designation}</p>
                  <img
                    src="https://images.unsplash.com/photo-1521747116043-5bfb8e3f2e47"
                    alt={value.name}
                    className="w-20 h-20 rounded-full mx-auto mt-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 h-fit">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-700">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto flex max-w-3xl flex-col gap-2">
            {faqs.map((value, id) => (
              <div key={id} className="w-full">
                <p className="w-full bg-gray-300 p-4 rounded-lg text-lg flex justify-between items-center">
                  <span>{value.question}</span>
                  <span
                    onClick={() => handleOpenAccordian(id)}
                    className="cursor-pointer text-3xl"
                  >
                    {id === openAccordian ? "-" : "+"}
                  </span>
                </p>

                <motion.div
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{
                    opacity: openAccordian === id ? 1 : 0,
                    maxHeight: openAccordian === id ? 100 : 0,
                    padding: openAccordian === id ? "16px" : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-200 rounded-lg mt-1"
                >
                  {value.answer}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
