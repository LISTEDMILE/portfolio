import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
} from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Heading({ heading }) {
  return (
    <h2 className="flex items-center justify-items-start px-3 gap-4 mb-12 text-5xl md:text-6xl font-bold text-white relative w-full">
      <span className="h-1 w-20 bg-white/10 rounded-full"></span>
      <span className=" text-nowrap">{heading}</span>
      <span className="h-1 w-full bg-white/10 rounded-full"></span>
    </h2>
  );
}

export default function FuturisticPortfolio() {
  const heroRef = useRef(null);
  const skillsRef = useRef([]);
  const projectsRef = useRef([]);
  const experienceRef = useRef([]);
  const certificationsRef = useRef([]);
  const qualificationsRef = useRef([]);

  const skills = [
    { name: "React", icon: <SiReact className="text-blue-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "GSAP", icon: <SiGreensock className=" text-green-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "ES6+", icon: <SiJavascript className="text-purple-500" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    {
      name: "Next.js (Frontend)",
      icon: <SiNextdotjs className="text-white" />,
    },
    { name: "EJS", icon: <SiEjs className="text-red-500" /> },
    { name: "Python", icon: <SiPython color="#3776AB" /> },
    { name: "C", icon: <SiC color="#A8B9CC" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  ];

  const projects = [
    {
      name: "HireSphere",
      image: "/hireSphere.png",
      description: "Built a full-stack recruitment platform with job posting, candidate application, shortlisting, hiring, and talent-pool features; boosted processing speed and recruiter–applicant engagement. ",
      tech: ["React", "NodeJs","ExpressJs","MongoDB","GSAP","Cloudinary",],
      live: "https://hire-sphere-sy.vercel.app/",
      github: "https://github.com/LISTEDMILE/HireSphere.git",
    },
    {
      name: "OptiRoll",
      image: "/optiRoll.png",
      description: "A smart attendance management web app built with MERN, GSAP, and DeepFace. It supports three user roles: Admin, Teacher, and Student. Admins can manage student profiles and view attendance data, teachers can easily toggle and mark attendance, and students can automatically record attendance using facial recognition. The app also allows students to view and update their dashboard in real-time, providing a seamless and interactive experience.",
      tech: ["React", "NodeJs","ExpressJs","MongoDB","GSAP","Cloudinary","Deepface","Python","EmailAutomation"],
      live: "https://opti-roll.vercel.app/",
      github: "https://github.com/LISTEDMILE/OptiRoll.git",
    },
    {
      name: "B365Advisors",
      image: "/bAdvisors.png",
      description: "Designed and deployed an animated, responsive business site using GSAP for smooth interactive transitions, enhancing brand presence and user engagement.",
      tech: ["nextJs", "GSAP"],
      live: "https://www.b365advisors.com/",
      github: "#",
      },
    {
      name: "BaseChanger",
      image: "/baseChanger.png",
      description: " Engineered an algorithm-driven tool for generating, converting, and calculating across multiple number bases (binary, decimal, hexadecimal, etc.) with high accuracy and efficiency.",
      tech: ["HTML","CSS","JavaScript"],
      live: "https://basechange.netlify.app/",
      github: "https://github.com/LISTEDMILE/BASE-CHANGER.git",
    },
  ];

  useGSAP(() => {
    gsap.from(heroRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.from(skillsRef.current.filter(Boolean), {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".containerSkills",
        start: "top 40%",
        toggleActions: "play none none reverse",
      },
    });

    projectsRef.current.filter(Boolean).forEach((card) => {
      gsap.from(card, {
        x: -10,
        opacity: 0,
        duration: 0.5,
        delay: 0,
        scrollTrigger: {
          trigger: card, // ✅ trigger = the card itself
          start: "top 65%", // when card enters viewport
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.from(experienceRef.current.filter(Boolean), {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: experienceRef.current[0],
        start: "top 80%",
      },
    });

    gsap.from(certificationsRef.current.filter(Boolean), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: certificationsRef.current[0],
        start: "top 85%",
      },
    });

    gsap.from(qualificationsRef.current.filter(Boolean), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: qualificationsRef.current[0],
        start: "top 85%",
      },
    });
  });

  return (
    <div className="font-sans text-white  min-h-screen overflow-x-hidden relative">
      <div className="fixed top-0 left-0 bg-black w-screen h-screen overflow-hidden -z-10">
        <div className="w-[200%] h-[200%] bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 animate-[spin_20s_linear_infinite] opacity-30 blur-3xl"></div>
      </div>

      {/* Hero */}
      <section
        ref={heroRef}
        className="flex flex-col-reverse md:flex-row items-center justify-center h-screen px-8 pt-[200px] md:pt-0 gap-10 text-center md:text-left max-w-screen-xl mx-auto"
      >
        <div className="flex-1">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Kunal Sharma
          </h1>
          <h3 className="text-3xl mb-6 underline">MERN Stack Developer</h3>
          <p className="text-xl text-gray-400 mb-6 max-w-lg">
            I build futuristic websites with interactive animations and modern
            web technologies.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300"
          >
            Contact Me
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
            <img
              src="/Owner.jpg"
              alt="Myse"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 flex flex-col items-center gap-12">
        <Heading heading="Tech Stack" />

        <div className="flex justify-center items-center h-[500px] w-[500px] p-10  animate-spin-slow  rounded-full scale-75 md:scale-100">
          <div className=" h-[80px] w-[80px] absolute bg-gradient-to-br from-blue-500 to-purple-60 rounded-full  "></div>

          {skills.map((tech, idx) => {
            const angle = (idx / skills.length) * 2 * Math.PI; // divide full circle by count
            const radius = 200; // circle radius
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={idx}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className="absolute text-4xl  p-2 rounded-full"
              >
                {tech.icon}
              </div>
            );
          })}
        </div>

        <div className=" containerSkills flex flex-col md:flex-row justify-center bg-white/5  w-full px-4 md:px-12 py-12 gap-12 flex-wrap">
          {skills.map((tech, idx) => (
            <div
              key={idx}
              ref={(el) => (skillsRef.current[idx] = el)}
              className="py-4 px-8 md:px-20 bg-gray-800 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 flex md:flex-col items-center gap-8 md:gap-4 w-full md:w-fit"
            >
              <h1 className="text-5xl">{tech.icon}</h1>
              <h3 className="text-2xl font-semibold mb-1">{tech.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 flex flex-col items-center gap-12 w-full bg-gradient-to-b from-gray-900 to-black  ">
        <Heading heading="Projects" />
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {projects.map((project, index) => (
            <div
              className="relative bg-[#111827] shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-125 hover:shadow-3xl w-full max-w-[1000px] flex flex-col md:flex-row gap-6 p-6 md:rounded-2xl"
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              {/* Left Image/Visual */}
              {project.image && (
                <div className=" w-[200px] flex-shrink-0 self-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full"
                  />
                </div>
              )}

              {/* Right Content */}
              <div className="flex-1 p-6 flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4">
                    {project.description}
                  </p>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4 self-end">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-200 transition-colors"
                    >
                      Live <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                    >
                      Code <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-8 flex flex-col items-center gap-12  max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 flex-wrap">
          {["Company A - Frontend", "Company B - Fullstack", "Freelance"].map(
            (exp, idx) => (
              <div
                key={exp}
                ref={(el) => (experienceRef.current[idx] = el)}
                className="p-6 bg-gray-800 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 flex-1 text-center"
              >
                <h3 className="text-2xl font-semibold mb-1">{exp}</h3>
                <p className="text-gray-400">
                  Built interactive futuristic web apps using React & GSAP.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-8 flex flex-col items-center gap-12 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["React Expert", "Fullstack Developer", "GSAP Animation Pro"].map(
            (cert, idx) => (
              <div
                key={cert}
                ref={(el) => (certificationsRef.current[idx] = el)}
                className="p-6 bg-gray-900 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <p className="text-lg font-semibold">{cert}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 px-8 flex flex-col items-center gap-12 bg-gradient-to-t from-gray-900 to-black max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Qualifications</h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 flex-wrap">
          {[
            "B.Sc Computer Science",
            "Diploma in Web Design",
            "Various Workshops",
          ].map((qual, idx) => (
            <div
              key={qual}
              ref={(el) => (qualificationsRef.current[idx] = el)}
              className="p-6 bg-gray-800 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 flex-1 text-center"
            >
              <p className="text-lg font-semibold">{qual}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-8 text-center flex flex-col items-center gap-6 max-w-screen-xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-4">
          Let's build the future together. Reach out!
        </p>
        <a
          href="mailto:yourmail@example.com"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300"
        >
          Email Me
        </a>
      </section>
    </div>
  );
}
