import React from "react";

const PoliciesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-teal-700 text-white text-center py-40">
        <h1 className="text-4xl font-bold">Event Management Policies</h1>
      </header>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Privacy Policy */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Privacy Policy</h2>
            <p className="text-lg text-gray-700">
              We take your privacy seriously. The following outlines our privacy practices.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>We collect personal data only for the purpose of event management.</li>
              <li>All personal data is stored securely and is never shared with third parties.</li>
              <li>We use cookies to improve your user experience on our platform.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              By using our platform, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Terms & Conditions */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Terms & Conditions</h2>
            <p className="text-lg text-gray-700">
              Please read these terms and conditions carefully before using our platform.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>You must be at least 18 years old to use our platform.</li>
              <li>All events organized must comply with local laws and regulations.</li>
              <li>We reserve the right to cancel or modify events at our discretion.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              By using our platform, you agree to comply with these terms.
            </p>
          </section>

          {/* Cancellation Policy */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Cancellation Policy</h2>
            <p className="text-lg text-gray-700">
              In case of event cancellation, the following terms apply:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Cancellations must be made at least 72 hours prior to the event.</li>
              <li>Refunds will be processed based on the cancellation date.</li>
              <li>Any cancellations made less than 72 hours before the event will incur a fee.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              For more information or any issues regarding cancellations, please contact our support team.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700">
              If you have any questions or concerns regarding our policies, please feel free to reach out to us:
            </p>
            <div className="mt-4">
              <p className="text-gray-700">Email: support@eventmanagement.com</p>
              <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;
