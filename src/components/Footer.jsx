import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-greenDark text-white pt-16 pb-8 px-4 sm:px-8 md:px-16">
      {/* Top Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl mb-4">Sun Valley</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            A sustainable hospitality brand with two distinct stays - Homestay
            in coonoor, Nilgiris andFarmstay in chittur, Palakkad.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-5">
            <a className="w-9 h-9 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition">
              <FaFacebookF size={14} />
            </a>
            <a className="w-9 h-9 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition">
              <FaInstagram size={14} />
            </a>
            <a className="w-9 h-9 flex items-center justify-center border border-white/30 rounded hover:bg-white/10 transition">
              <FaEnvelope size={14} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide">Pages</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Stays
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Restaurant
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Experiences
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Stays */}
        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide">
            Our Stays
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Homestay — Coonoor</li>
            <li>Farmstay — Palakkad</li>
            <li>Restaurant</li>
            <li>Experiences</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>📞 +91 95825 98568</li>
            <li>WhatsApp Us</li>
            <li>✉ info@sunvalley.co.in</li>
            <li> Coonoor, Tamil Nadu</li>
            <li> Palakkad, Kerala</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50">
        <p>© 2025 Sun Valley. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Creating Sustainable Living Concepts</p>
      </div>
    </footer>
  );
};

export default Footer;
