import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VerifyEmail from "./auth/VerifyEmail";
import ResetPassword from "./auth/ResetPassword";
import Home from "./pages/Home";
import ContactPage from "./FooterAndHeaderPages/Contact";
import PoliciesPage from "./FooterAndHeaderPages/Policies";
import DeveloperPage from "./FooterAndHeaderPages/Developer";
import AboutUsPage from "./FooterAndHeaderPages/About";
import Services from "./FooterAndHeaderPages/Service";
import TermsOfService from "./FooterAndHeaderPages/TermsOfService";
import GetStarted from "./pages/GetStarted";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Login from "./auth/Login";
import Signup from "./auth/Register";
import EventDetails from "./components/EventDetails";
import RegisterForEvent from "./components/RegisterForEvent";
import OrganizerProfile from "./pages/Organizer/OrganizerProfile";
import CreateEvent from "./pages/Organizer/CreateEvent";
import AttendeeProfile from "./pages/Attendee/AttendeeProfile";
import AdminProfile from "./pages/Admin/AdminProfile";
import SponsorProfile from "./pages/Sponsor/SponsorProfile";
import SponsorEvent from "./pages/Sponsor/SponsorEvent";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Header and Footer Routes       */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/policy" element={<PoliciesPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
        <Route path="/developer" element={<DeveloperPage />} />
        <Route path="/getStarted" element={<GetStarted />} />

        {/* Authentication Routes */}
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

        {/* Event Routes */}
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route
          path="/register/:eventId/:eventTitle"
          element={<RegisterForEvent />}
        />
        <Route path="/event-details/:eventId" element={<EventDetails />} />
        <Route
          path="/sponsor/:eventId/:eventTitle"
          element={<SponsorEvent />}
        />
        {/* Dashboard Routes */}
        <Route path="/organizer-dashboard" element={<OrganizerProfile />} />
        <Route path="/attendee-dashboard" element={<AttendeeProfile />} />
        <Route path="/admin-dashboard" element={<AdminProfile />} />
        <Route path="/sponsor-dashboard" element={<SponsorProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
