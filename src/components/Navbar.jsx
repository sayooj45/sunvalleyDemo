import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "About Us",
    "Our Stays",
    "Restaurant",
    "Experiences",
    "Contact",
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Sun Valley" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-green-700 font-medium text-sm tracking-wide"
              >
                {link.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Enquire Button */}
          <div className="hidden md:block">
            <button className="bg-green-800 text-white px-5 py-2 text-sm font-semibold rounded hover:bg-green-900 transition">
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 text-sm font-medium hover:text-green-700"
                onClick={() => setIsOpen(false)}
              >
                {link.toUpperCase()}
              </a>
            ))}

            <button className="bg-green-800 text-white px-6 py-2 text-sm font-semibold rounded hover:bg-green-900">
              ENQUIRE NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
