import React from "react";

const TermsOfService = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal-700 text-white text-center py-40">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold leading-tight mb-4">Terms of Service</h1>
          <p className="text-xl mb-6">
            Please read our Terms of Service carefully before using the Event Pulse platform.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-700 mb-8">Introduction</h2>
          <p className="text-lg text-gray-700 mb-6">
            These Terms of Service govern the use of the Event Pulse platform. By accessing or using the platform, you agree to be bound by these terms.
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mb-4">1. User Responsibilities</h3>
          <p className="text-lg text-gray-700 mb-4">
            Users are responsible for maintaining the confidentiality of their account and any activities under their account. You agree not to misuse the platform for illegal activities.
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mb-4">2. Platform Usage</h3>
          <p className="text-lg text-gray-700 mb-4">
            You may use the Event Pulse platform for lawful purposes only. Any unauthorized use or infringement of intellectual property rights will result in account termination.
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mb-4">3. Privacy and Data Collection</h3>
          <p className="text-lg text-gray-700 mb-4">
            By using our platform, you consent to our collection and processing of your personal data as outlined in our Privacy Policy.
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mb-4">4. Limitation of Liability</h3>
          <p className="text-lg text-gray-700 mb-4">
            Event Pulse is not liable for any damages arising from the use of the platform. We do not guarantee the uninterrupted operation of the platform.
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mb-4">5. Termination of Services</h3>
          <p className="text-lg text-gray-700 mb-4">
            We reserve the right to suspend or terminate your account for any violation of these Terms of Service.
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mb-4">6. Modifications</h3>
          <p className="text-lg text-gray-700 mb-4">
            Event Pulse may modify these Terms of Service at any time, and such modifications will be effective immediately upon posting.
          </p>

          <h3 className="text-2xl font-semibold text-teal-700 mb-4">7. Governing Law</h3>
          <p className="text-lg text-gray-700 mb-4">
            These Terms of Service are governed by the laws of the jurisdiction in which Event Pulse operates.
          </p>

          <div className="mt-8">
            <p className="text-lg text-gray-700">By using the Event Pulse platform, you agree to these Terms of Service.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
