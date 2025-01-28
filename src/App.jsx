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

const App = () => {
  return (
    <Router>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/policy" element={<PoliciesPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
        <Route path="/developer" element={<DeveloperPage />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/getStarted" element={<GetStarted />} />
        <Route
          path="/register/:eventId/:eventTitle"
          element={<RegisterForEvent />}
        />
        <Route path="/register/:eventId" element={<EventDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
