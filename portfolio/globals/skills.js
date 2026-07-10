import { FaCode } from "react-icons/fa";

import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiJavascript,
    SiGreensock,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiNextdotjs,
    SiEjs,
    SiPython,
    SiC,
    SiCplusplus,
    SiGit,
    SiGithub,
    SiKubernetes,
    SiCloudinary,
    SiVercel,
    SiRender,
    SiNetlify,
    SiResend,
    SiShadcnui,
    SiZod,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { RiShieldCheckLine } from "react-icons/ri";

export const skills = [
    {
        title: "Full Stack",
        skills: [
            {
                name: "MERN Stack",
                icon: FaCode,
                className: "text-emerald-400",
            },
            {
                name: "Next.js",
                icon: SiNextdotjs,
                className: "text-white",
            },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: SiReact, className: "text-blue-400" },
            { name: "GSAP", icon: SiGreensock, className: "text-green-400" },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                className: "text-teal-400",
            },
            {
                name: "Bootstrap",
                icon: SiBootstrap,
                className: "text-purple-600",
            },

            { name: "shadcn/ui", icon: SiShadcnui, className: "text-white" },
            {
                name: "JavaScript (ES6+)",
                icon: SiJavascript,
                className: "text-yellow-400",
            },
            { name: "HTML5", icon: SiHtml5, className: "text-orange-500" },
            { name: "CSS3", icon: SiCss3, className: "text-blue-500" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, className: "text-green-500" },
            { name: "Express.js", icon: SiExpress, className: "text-gray-400" },
            { name: "Resend", icon: SiResend, className: "text-white" },
            {
                name: "NextAuth",
                icon: RiShieldCheckLine,
                className: "text-green-500",
            },
            { name: "EJS", icon: SiEjs, className: "text-red-500" },
            { name: "Zod", icon: SiZod, className: "text-[#3E67B1]" },
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "MongoDB", icon: SiMongodb, className: "text-green-600" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: SiGit, className: "text-[#F05032]" },
            { name: "GitHub", icon: SiGithub, className: "text-[#181717]" },
        ],
    },
    {
        title: "Programming Languages",
        skills: [
            {
                name: "JavaScript",
                icon: SiJavascript,
                className: "text-yellow-400",
            },
            { name: "Python", icon: SiPython, className: "text-[#3776AB]" },
            { name: "C++", icon: SiCplusplus, className: "text-[#00599C]" },
            { name: "C", icon: SiC, className: "text-[#A8B9CC]" },
        ],
    },
    {
        title: "Cloud & Deployment",
        skills: [
            { name: "Azure", icon: VscAzure, className: "text-[#0078D4]" },
            {
                name: "Cloudinary",
                icon: SiCloudinary,
                className: "text-[#3448C5]",
            },
            { name: "Vercel", icon: SiVercel, className: "text-white" },
            { name: "Render", icon: SiRender, className: "text-[#46E3B7]" },
            { name: "Netlify", icon: SiNetlify, className: "text-[#00C7B7]" },
        ],
    },
];
