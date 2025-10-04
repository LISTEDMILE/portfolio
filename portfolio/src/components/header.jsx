import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
  useGSAP(() => {
    gsap.from(".logo", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(".nav-link", {
      y: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/30">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-1">
              <div className="flex gap-4 items-center ">
        <img src="/Logo.png" className="h-15"/>
        <h1 className="logo text-2xl font-bold tracking-widest text-cyan-400 ">
          MY<span className="text-purple-500">DEV</span>
                  </h1>
                  </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <a
            href="/"
            className="nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/projects"
            className="nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu icon (optional) */}
        <button className="md:hidden text-cyan-400 hover:text-purple-500 transition">
          ☰
        </button>
      </div>
    </header>
  );
}
