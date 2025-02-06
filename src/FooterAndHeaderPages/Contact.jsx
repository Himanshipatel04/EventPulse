import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-6 mt-20">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-2">We'd love to hear from you!</p>
      </header>

      {/* Contact Info Section */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
        {[
          {
            icon: <FaMapMarkerAlt size={30} />, title: "Address", content: (
              <>Wexford Group Consulting<br />Colorado, USA 80203<br />Northern Division: 1109 7th Ave NW, Ardmore, OK</>
            )
          },
          {
            icon: <FaPhoneAlt size={30} />, title: "Phone", content: (
              <>24/7 Service: 303-555-1212<br />Northern Division: 580-555-9090</>
            )
          },
          {
            icon: <FaEnvelope size={30} />, title: "Email", content: (
              <>Support: support@wexford.com<br />Careers: careers@wexford.com</>
            )
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
            <div className="text-teal-600 mb-4">{item.icon}</div>
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "name", type: "text", placeholder: "Your Name" },
              { id: "email", type: "email", placeholder: "Your Email" }
            ].map((field) => (
              <input
                key={field.id}
                type={field.type}
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full p-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            ))}
          </div>
          <textarea
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 outline-none rounded-lg focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;