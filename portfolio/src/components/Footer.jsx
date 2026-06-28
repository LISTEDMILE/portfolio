import React from "react";
import { Link } from "react-router-dom";
import { socials } from "../../globals/connect";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Connect", href: "/connect" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 pb-12">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo / Name */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold text-white">Kunal Sharma</h2>
          <p className="text-sm md:text-base">Full Stack Developer</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex gap-6 flex-wrap justify-center">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl md:text-xl"
              aria-label={social.platform}
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom: copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        <p>{new Date().getFullYear()} Kunal Sharma.</p>
      </div>
    </footer>
  );
}
