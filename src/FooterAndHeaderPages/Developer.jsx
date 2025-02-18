import React from "react";
import { Link } from "react-router-dom";

const DeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-teal-700 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Developer Resources</h1>
        <p className="text-lg mt-2">Documentation, API details, and development resources for developers working with the platform.</p>
      </header>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* API Documentation Section */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">API Documentation</h2>
            <p className="text-lg text-gray-700">
              Our platform provides a robust API to interact with various services. Below are the available endpoints:
            </p>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-teal-800">1. GET /api/events</h3>
              <p className="text-gray-700">
                Fetch all events. You can filter by date, location, and category. Example response:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded mt-2">
                {`[
  {
    "id": 1,
    "name": "Event A",
    "date": "2024-12-01",
    "location": "New York",
    "category": "Music"
  },
  {
    "id": 2,
    "name": "Event B",
    "date": "2024-12-05",
    "location": "Los Angeles",
    "category": "Tech"
  }
]`}
              </pre>
              <h3 className="text-2xl font-semibold text-teal-800 mt-6">2. POST /api/events</h3>
              <p className="text-gray-700">
                Create a new event. You need to provide event details such as name, date, and location.
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded mt-2">
                {`{
  "name": "New Event",
  "date": "2024-12-15",
  "location": "San Francisco",
  "category": "Business"
}`}
              </pre>
            </div>
          </section>

          {/* Development Setup Section */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Setting Up the Development Environment</h2>
            <p className="text-lg text-gray-700">
              To get started with local development, follow the steps below:
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-2">
              <li>Clone the repository from GitHub.</li>
              <li>Run the following command to install dependencies:
                <pre className="bg-gray-800 text-white p-2 rounded mt-2">
                  npm install
                </pre>
              </li>
              <li>Start the development server using:
                <pre className="bg-gray-800 text-white p-2 rounded mt-2">
                  npm start
                </pre>
              </li>
              <li>Set up your environment variables (check `.env.example` for more details).</li>
            </ol>
          </section>

          {/* GitHub Repository Section */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">GitHub Repository</h2>
            <p className="text-lg text-gray-700">
              You can access our public GitHub repository to view the source code and contribute:
            </p>
            <Link
              href="https://github.com/your-repository"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 font-semibold mt-4 inline-block"
            >
              Visit the GitHub Repository
            </Link>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Contact & Support</h2>
            <p className="text-lg text-gray-700">
              For any technical issues or inquiries, reach out to our developer support team:
            </p>
            <div className="mt-4">
              <p className="text-gray-700">Email: devsupport@eventmanagement.com</p>
              <p className="text-gray-700">Phone: +1 (555) 987-6543</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
