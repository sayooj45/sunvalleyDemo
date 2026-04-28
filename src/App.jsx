import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurStays from "./pages/OurStays";
import Restaurant from "./pages/Restaurant";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollTOTop";
import FarmStay from "./pages/FarmStay";
import HomeStay from "./pages/HomeStay";
import RoomDetails from "./components/homeStay/RoomDetails";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/accommodation" element={<OurStays />} />
        {/* <Route path="/restaurant" element={<Restaurant />} /> */}
        {/* <Route path="/experiences" element={<Experiences />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/farm-stay" element={<FarmStay />} />
        <Route path="/home-stay" element={<HomeStay />} />
        <Route path="/rooms/:slug" element={<RoomDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
