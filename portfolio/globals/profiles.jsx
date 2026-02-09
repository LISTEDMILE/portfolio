import React from "react";

import { FaGithub, FaLinkedin, FaGlobe, FaFileAlt } from "react-icons/fa";
import { resume, portfolio, gitHub, linkedIn } from "./links";
export const profiles = [
  {
    platform: "GitHub",
    icon: <FaGithub />,
    link: gitHub,
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-blue-500" />,
    link: linkedIn,
  },
  {
    platform: "Portfolio",
    icon: <FaGlobe />,
    link: portfolio,
  },
  { platform: "Resume", icon: <FaFileAlt />, link: resume },
];
