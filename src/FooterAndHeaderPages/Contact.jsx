import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-teal-700 text-white text-center py-10">
        <h1 className="text-4xl font-bold">GET IN TOUCH</h1>
      </header>

      {/* Contact Details */}
      <div className="grid md:grid-cols-3 gap-6 p-10 bg-teal-800 text-white text-center">
        <div>
          <h2 className="text-lg font-bold">ADDRESS</h2>
          <p className="mt-2">Wexford Group Consulting<br />Colorado, USA 80203</p>
          <p>Office: Northern Division<br />1109 7th Ave NW, Ardmore, OK</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">PHONE</h2>
          <p className="mt-2">Wexford 24/7 Service: 303-555-1212</p>
          <p>Northern Division Office: 580-555-9090</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">EMAIL</h2>
          <p className="mt-2">Support: support@wexford.com</p>
          <p>Careers: careers@wexford.com</p>
        </div>
      </div>

      {/* Message Form */}
      <div className="p-10 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Message Us</h2>
        <form className="max-w-3xl mx-auto bg-gray-100 p-6 rounded shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
