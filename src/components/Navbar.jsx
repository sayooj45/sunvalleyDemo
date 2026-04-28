import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "About Us", path: "/about" },
    { name: "Retreat", path: "/retreat" },
    // { name: "Restaurant", path: "/restaurant" },
    // { name: "Experiences", path: "/experiences" },
    { name: "Contact", path: "/contact" },
  ];
  const navigate = useNavigate();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img src="/logo.png" alt="Sun Valley" className="h-10" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `group relative text-sm font-medium uppercase tracking-wide transition duration-300 
                  ${
                    isActive
                      ? "text-greenDark"
                      : "text-gray-600 hover:text-black"
                  }`
                }
              >
                {link.name}

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              className="relative overflow-hidden bg-greenDark text-white px-5 py-2 text-sm font-semibold rounded group"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <span className="relative z-10">ENQUIRE NOW</span>

              {/* Hover animation */}
              <span className="absolute inset-0 bg-greenMid translate-y-full group-hover:translate-y-0 transition duration-300"></span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 text-sm uppercase tracking-wide hover:text-greenDark transition"
            >
              {link.name}
            </NavLink>
          ))}

          <button className="bg-greenDark text-white px-6 py-2 text-sm font-semibold rounded hover:bg-greenMid transition">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </nav>
  );
}
