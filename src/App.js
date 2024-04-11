import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Events from "./routes/Events";
import Inventory from "./routes/Inventory";
import About from "./routes/About";
import Support from "./routes/Support";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import UpdatePasswordForm from './components/UpdatePasswordForm';
import ContactPage from './components/ContactPage';
import ContactPageSubmit from './components/ContactPageSubmit';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

import { Route, Routes} from "react-router-dom";

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/about" element={<About />} />
    <Route path="/support" element={<Support />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<SignupForm />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/forgotpassword" element={<ForgotPasswordForm />} />
    <Route path="/updatepassword" element={<UpdatePasswordForm />} />
    <Route path="/contactsubmit" element={<ContactPageSubmit />} />
    <Route path="/sidebar" element={<Sidebar />} />
  </Routes>
  </>
  );
}

export default App;
