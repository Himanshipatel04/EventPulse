import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VerifyEmail from "./auth/VerifyEmail"; // Adjust the path according to your folder structure
import ResetPassword from "./Hello";
import Home from "./pages/Home";
import ContactPage from "./FooterAndHeaderPages/Contact";
import PoliciesPage from "./FooterAndHeaderPages/Policies";
import DeveloperPage from "./FooterAndHeaderPages/Developer";
import AboutUsPage from "./FooterAndHeaderPages/About";
import Services from "./FooterAndHeaderPages/Service";
import TermsOfService from "./FooterAndHeaderPages/TermsOfService";
import GetStarted from "./pages/GetStarted";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/policy" element={<PoliciesPage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
        <Route path="/developer" element={<DeveloperPage />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/getStarted" element={<GetStarted />} />
      </Routes>
    </Router>
  );
};

export default App;
