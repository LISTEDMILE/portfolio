import React from "react";

import { FaGithub, FaLinkedin, FaGlobe, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { resume, portfolio, gitHub, linkedIn, leetCode } from "./links";
export const profiles = [
  {
    platform: "GitHub",
    icon: <FaGithub className="text-white" />,
    link: gitHub,
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-[#0A66C2]" />,
    link: linkedIn,
  },
  {
    platform: "Portfolio",
    icon: <FaGlobe className="text-[#38BDF8]" />,
    link: portfolio,
  },
  {
    platform: "Resume",
    icon: <FaFileAlt className="text-[#EF4444]" />,
    link: resume,
  },
  {
    platform: "LeetCode",
    icon: <SiLeetcode className="text-[#FFA116]" />,
    link: leetCode,
  },
];
