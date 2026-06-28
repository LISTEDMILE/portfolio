import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { discord, gitHub, insta, linkedIn, mobile } from "./links";

export const socials = [
  {
    platform: "GitHub",
    icon: FaGithub,
    className: "text-5xl text-gray-300",
    link: gitHub,
    glow: "from-gray-700 to-gray-900",
  },
  {
    platform: "LinkedIn",
    icon: FaLinkedin,
    className: "text-5xl text-blue-400",
    link: linkedIn,
    glow: "from-blue-600 to-cyan-500",
  },
  {
    platform: "Instagram",
    icon: FaInstagram,
    className: "text-5xl text-pink-400",
    link: insta,
    glow: "from-pink-500 to-purple-500",
  },
  {
    platform: "Discord",
    icon: FaDiscord,
    className: "text-5xl text-indigo-400",
    link: discord,
    glow: "from-indigo-500 to-purple-700",
  },
  {
    platform: "Mobile",
    icon: FaPhoneAlt,
    className: "text-4xl text-green-400",
    link: mobile,
    glow: "from-green-500 to-teal-500",
  },
];
