import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurStays from "./pages/OurStays";

import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollTOTop";
import FarmStay from "./pages/FarmStay";
import HomeStay from "./pages/HomeStay";
import RoomDetails from "./components/homeStay/RoomDetails";
import ErrorPage from "./pages/ErrorPage";
import FarmStayRoomDetails from "./components/farmStay/RoomDetails";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/retreat" element={<OurStays />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/farm-stay" element={<FarmStay />} />
        <Route path="/home-stay" element={<HomeStay />} />
        <Route path="/home-stay/:slug" element={<RoomDetails />} />
        <Route path="/farm-stay/:slug" element={<FarmStayRoomDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
