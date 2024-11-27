import React from "react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-teal-700 text-white text-center py-10">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2">Learn more about our mission, team, and what we stand for.</p>
      </header>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Company Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700">
              We are a passionate team of event management professionals dedicated to providing seamless event planning and management solutions. Our platform empowers event organizers and participants to connect, collaborate, and celebrate extraordinary experiences.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Whether it's corporate events, conferences, or celebrations, we offer a range of tools to make your event successful, from planning to execution.
            </p>
          </section>

          {/* Mission & Vision */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-teal-800 mb-2">Our Mission</h3>
                <p className="text-lg text-gray-700">
                  Our mission is to streamline the event planning process through technology, empowering organizers to focus on creating impactful events while we handle the logistics, management, and optimization.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-teal-800 mb-2">Our Vision</h3>
                <p className="text-lg text-gray-700">
                  We envision a world where every event is an unforgettable experience, efficiently managed and easily accessible for everyone, from small gatherings to large conferences.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-teal-700">John Doe</h3>
                  <p className="text-gray-700 mt-2">CEO & Founder</p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-teal-700">Jane Smith</h3>
                  <p className="text-gray-700 mt-2">Chief Event Planner</p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-teal-700">Alice Johnson</h3>
                  <p className="text-gray-700 mt-2">Head of Operations</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">The Technology Behind Our Platform</h2>
            <p className="text-lg text-gray-700">
              Our platform is powered by cutting-edge technology, enabling smooth event management, real-time communication, and seamless user experience.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="bg-teal-100 p-4 rounded-lg text-center">
                <img src="https://via.placeholder.com/100" alt="Tech 1" className="mx-auto mb-4" />
                <p className="font-semibold text-teal-700">React</p>
              </div>
              <div className="bg-teal-100 p-4 rounded-lg text-center">
                <img src="https://via.placeholder.com/100" alt="Tech 2" className="mx-auto mb-4" />
                <p className="font-semibold text-teal-700">Node.js</p>
              </div>
              <div className="bg-teal-100 p-4 rounded-lg text-center">
                <img src="https://via.placeholder.com/100" alt="Tech 3" className="mx-auto mb-4" />
                <p className="font-semibold text-teal-700">Tailwind CSS</p>
              </div>
              <div className="bg-teal-100 p-4 rounded-lg text-center">
                <img src="https://via.placeholder.com/100" alt="Tech 4" className="mx-auto mb-4" />
                <p className="font-semibold text-teal-700">MongoDB</p>
              </div>
              <div className="bg-teal-100 p-4 rounded-lg text-center">
                <img src="https://via.placeholder.com/100" alt="Tech 5" className="mx-auto mb-4" />
                <p className="font-semibold text-teal-700">AWS</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
