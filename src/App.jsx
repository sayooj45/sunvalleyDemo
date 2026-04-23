import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurStays from "./pages/OurStays";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stay" element={<OurStays />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
