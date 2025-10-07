import React, { useRef } from "react";
import gsap from "gsap";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaPhoneAlt,
} from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gitHub, linkedIn } from "../../globals/links";

export default function ConnectPage() {
  const cardsRef = useRef([]);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    // Animate cards on mount
    cardsRef.current.forEach((element) => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const links = [
    {
      platform: "GitHub",
      icon: <FaGithub className="text-5xl text-gray-300" />,
      link: gitHub,
      glow: "from-gray-700 to-gray-900",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin className="text-5xl text-blue-400" />,
      link: linkedIn,
      glow: "from-blue-600 to-cyan-500",
    },
    {
      platform: "Instagram",
      icon: <FaInstagram className="text-5xl text-pink-400" />,
      link: "https://instagram.com/your-handle",
      glow: "from-pink-500 to-purple-500",
    },
    {
      platform: "Discord",
      icon: <FaDiscord className="text-5xl text-indigo-400" />,
      link: "https://discordapp.com/users/your-id",
      glow: "from-indigo-500 to-purple-700",
    },
    {
      platform: "Mobile",
      icon: <FaPhoneAlt className="text-4xl text-green-400" />,
      link: "tel:+91XXXXXXXXXX",
      glow: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="relative min-h-screen  text-white px-6 md:px-16 py-20">
      {/* Background Glow */}
      <div className="absolute overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950 inset-0 -z-10">
        <div className="w-[200%] h-[200%] bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 animate-spin-slow opacity-20 blur-3xl"></div>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">
        Connect <span className="text-indigo-400">With Me</span>
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto z-10">
        {links.map((item, idx) => (
          <a
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-8 rounded-2xl flex flex-col items-center justify-center gap-4 w-64 h-52
              bg-black/40 border border-white/10 hover:border-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/30
              hover:scale-105 backdrop-blur-md"
          >
            {/* Glow background */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.glow} opacity-20 blur-xl group-hover:opacity-40 transition duration-500`}
            ></div>

            {/* Icon */}
            <span className="relative z-10">{item.icon}</span>

            {/* Platform Name */}
            <p className="relative z-10 text-xl font-semibold tracking-wide">
              {item.platform}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
