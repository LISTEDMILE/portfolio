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
  SiGit,
  SiGithub,
} from "react-icons/si";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaFileAlt,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Heading({ heading }) {
  return (
    <h2 className="flex items-center justify-items-start px-3 gap-4 mb-12 text-4xl md:text-6xl font-bold text-white relative w-full">
      <span className="h-1 w-10 md:w-20 bg-white/10 rounded-full"></span>
      <span className=" wrap max-w-2/3 ">{heading}</span>
      <span className="h-1 flex-1 bg-white/10 rounded-full"></span>
    </h2>
  );
}

export default function FuturisticPortfolio() {
  const heroRef = useRef(null);
  const skillsRef = useRef([]);
  const projectsRef = useRef([]);
  const certificationsRef = useRef([]);
  const qualificationsRef = useRef([]);
  const experienceRef = useRef([]);
  const profileRefs = useRef([]);

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
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className=" text-white" /> },
  ];

  const projects = [
    {
      name: "HireSphere",
      image: "/hireSphere.png",
      description:
        "Built a full-stack recruitment platform with job posting, candidate application, shortlisting, hiring, and talent-pool features; boosted processing speed and recruiter–applicant engagement. ",
      tech: ["React", "NodeJs", "ExpressJs", "MongoDB", "GSAP", "Cloudinary"],
      live: "https://hire-sphere-sy.vercel.app/",
      github: "https://github.com/LISTEDMILE/HireSphere.git",
    },
    {
      name: "OptiRoll",
      image: "/optiRoll.png",
      description:
        "A smart attendance management web app built with MERN, GSAP, and DeepFace. It supports three user roles: Admin, Teacher, and Student. Admins can manage student profiles and view attendance data, teachers can easily toggle and mark attendance, and students can automatically record attendance using facial recognition. The app also allows students to view and update their dashboard in real-time, providing a seamless and interactive experience.",
      tech: [
        "React",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "GSAP",
        "Cloudinary",
        "Deepface",
        "Python",
        "EmailAutomation",
      ],
      live: "https://opti-roll.vercel.app/",
      github: "https://github.com/LISTEDMILE/OptiRoll.git",
    },
    {
      name: "B365Advisors",
      image: "/bAdvisors.png",
      description:
        "Designed and deployed an animated, responsive business site using GSAP for smooth interactive transitions, enhancing brand presence and user engagement.",
      tech: ["nextJs", "GSAP"],
      live: "https://www.b365advisors.com/",
    },
    {
      name: "BaseChanger",
      image: "/baseChanger.png",
      description:
        " Engineered an algorithm-driven tool for generating, converting, and calculating across multiple number bases (binary, decimal, hexadecimal, etc.) with high accuracy and efficiency.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://basechange.netlify.app/",
      github: "https://github.com/LISTEDMILE/BASE-CHANGER.git",
    },
  ];

  const experience = [
    {
      title: " Web Developer Intern",
      company: "B365 Advisors",
      startDate: " 1st March, 2025",
      endDate: " 1 May, 2025",
      bullets: [
        " Built a responsive web app with advanced scroll-triggered animations using Next.js and GSAP.",
        " Deployed on Vercel, achieving fast load times and strong performance scores.",
        "Collaborated in a 5-member Agile team, contributing to core frontend features.",
        " Designed pixel-perfect, responsive layouts with Tailwind CSS, ensuring cross-browser compatibility",
        " Worked with leadership on feature planning, bug fixes, and performance optimization.",
      ],
      certificate: "bAdvisorsCer.jpg",
      type: "Full-time • Remote",
    },
    {
      title: " SIG, Web Dev Head ",
      company: "CSI (IPEC)",
      startDate: " Mar 2025",
      endDate: "  Present",
      bullets: [
        "  Simplified web concepts for beginners through hands-on coding sessions",
        " Taught modern JS frameworks, animation libraries, and responsive design",
        "Collaborated in a 5-member Agile team, contributing to core frontend features.",
        "  Led live project builds covering planning, coding, and deployment.",
        "  Mentored peers in Git, GitHub, and industry-standard workflows.",
      ],
    },
    {
      title: "  Software Developer ",
      company: "PMKVY",
      startDate: "  390 Hours",
      bullets: [
        "  Developed interactive web applications with modern frameworks. ",
        " Ensured code quality and compliance by following prescribed programming and internal language policies.",
      ],
      certificate: "PMKVY.jpg",
    },
  ];

  const certifications = [
    {
      name: " 3rd place, Silver Jubilee Poster Presentation (IPEC) – 2023.jpg",
      certificate: "poster23.jpg",
    },
    {
      name: " 3rd place, Silver Jubilee Poster Presentation (IPEC) – 2024.jpg",
      certificate: "poster24.jpg",
    },
    {
      name: "  IoT for Cyber Physical Systems – IHUB Divya Sampark, IIT Roorkee",
      certificate: "IOT.jpg",
    },
    {
      name: "Introduction to Cybersecurity – Cisco Networking Academy.",
      certificate: "cyber.pdf",
    },
    { name: "Sig WebDev - CSI Society of India.", certificate: "CSI.jpg" },
    { name: " Software Programmer - PMKVY. ", certificate: "PMKVY.jpg" },
    { name: " MongoDB", certificate: "MongoDB.pdf" },
  ];

  const profiles = [
    {
      platform: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/LISTEDMILE",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin className="text-blue-500" />,
      link: "https://www.linkedin.com/in/kunal-sharma-5a3a27295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      platform: "Portfolio",
      icon: <FaGlobe />,
      link: "https://portfolio-five-wheat-37.vercel.app/",
    },
    { platform: "Resume", icon: <FaFileAlt />, link: "/resume.pdf" },
  ];

  const qualifications = [
    {
      course: "B.Tech",
      trade: "Computer Science and Engineering",
      organisation: "Inderprastha Engineering College",
      year: "2023-2027",
    },
    {
      course: "Class 12th CBSE",
      trade: "PCM",
      organisation: "Indraprastha Public School",
      year: "2021-2022",
    },
    {
      course: "Class 10th CBSE",
      organisation: "Indraprastha Public School",
      year: "2019-2020",
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
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0,
          rotate: 1.5,
          boxShadow: "0px 12px 30px rgba(99, 102, 241, 0.3)",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0,
          rotate: 0,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
        });
      });
    });

    certificationsRef.current.filter(Boolean).forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        duration: 0.5,
        delay: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0,
          boxShadow: "0px 12px 30px rgba(99, 102, 241, 0.3)",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
        });
      });
    });

    qualificationsRef.current.filter(Boolean).forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        duration: 0.5,
        delay: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0,
          boxShadow: "0px 12px 30px rgba(99, 102, 241, 0.3)",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
        });
      });
    });

    profileRefs.current.filter(Boolean).forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0,
          boxShadow: "0px 12px 30px rgba(99, 102, 241, 0.3)",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
        });
      });
    });

    experienceRef.current.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      const bullets = card.querySelectorAll(".bullet");

      gsap.from(bullets, {
        opacity: 0,
        x: -20,
        stagger: 0.15,
        delay: 0.3,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0,
          boxShadow: "0px 12px 30px rgba(99, 102, 241, 0.3)",
          borderColor: "rgba(99, 102, 241, 1)",
          border: 2,
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0,

          border: 0,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
        });
      });
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
            href="/connect"
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
              className="relative bg-[#111827] shadow-2xl duration-500  w-full max-w-[1000px] flex flex-col md:flex-row gap-6 p-6 md:rounded-2xl"
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
      <section className="py-24  flex flex-col items-center gap-12  w-full mx-auto">
        <Heading heading="Experience" />
        <div className="flex flex-col px-8 md:flex-row md:justify-center gap-8 flex-wrap w-full">
          {experience.map(
            (
              {
                title,
                company,
                startDate,
                endDate,
                bullets,
                certificate,
                type,
              },
              idx
            ) => (
              <article
                key={idx}
                ref={(el) => (experienceRef.current[idx] = el)}
                className=" w-full max-w-[1000px] p-4 md:p-6 bg-gradient-to-br from-white/90 to-sky-50/80 dark:from-slate-800 dark:to-slate-900/60 rounded-2xl shadow-2xl ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden hover:scale-[1.02] transition-transform"
              >
                <div className="relative">
                  {/* decorative circle */}
                  <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-tr from-pink-300 to-indigo-300 opacity-40 blur-2xl transform rotate-12 pointer-events-none" />

                  <header className="flex flex-col">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                        {title}
                      </h3>
                      <p className="text-sm text-slate-400">{company}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-300 self-end">
                      <span className="whitespace-nowrap">
                        <strong className="font-medium">{startDate}</strong>
                        <span className="mx-1">—</span>
                        <span className="opacity-90">{endDate}</span>
                      </span>
                    </div>
                  </header>

                  <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-700 dark:text-slate-300">
                    {bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 bullet">
                        <span className="mt-1 flex-none w-2 h-2 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 shadow-sm" />
                        <p className="leading-snug">{b}</p>
                      </li>
                    ))}
                  </ul>

                  {type && (
                    <p className=" text-slate-400 mt-4">
                      <span className="text-xs ">{type} </span>
                    </p>
                  )}
                  {certificate && (
                    <div className="mt-5 flex items-center justify-end">
                      <a
                        aria-label="See more"
                        className="inline-flex items-center gap-2 text-sm font-medium rounded-lg px-3 py-1.5 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm ring-1 ring-slate-100 dark:ring-slate-700 hover:scale-105 transition-transform"
                        href={`/${certificate}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Certificate
                      </a>
                    </div>
                  )}
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 flex flex-col items-center gap-12 bg-gradient-to-b from-cyan-900 to-black  w-full">
        <Heading heading="Qualifications" />
        <div className="flex px-12 flex-col md:flex-row md:justify-center gap-8 flex-wrap">
          {qualifications.map((qual, idx) => (
            <div
              key={idx}
              ref={(el) => (qualificationsRef.current[idx] = el)}
              className="relative p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-500 
               bg-gradient-to-br from-gray-900 to-black
               text-center border border-gray-700 hover:border-indigo-400 group"
            >
              {/* Glow background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-900 to-gray-900 opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>

              {/* Qualification Content */}
              <div className="relative flex gap-8 justify-around flex-wrap">
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-semibold text-white">
                    {qual.course}
                  </p>
                  {qual.trade && (
                    <p className="text-sm text-gray-300 mt-1 italic">
                      {qual.trade}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 mt-2">
                    {qual.organisation}
                  </p>
                  <p className="text-sm text-indigo-400 mt-1 font-medium">
                    {qual.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24  flex flex-col items-center gap-12 w-full mx-auto">
        <Heading heading="Certifications & Awards" />
        <div className="flex px-8 md:p-0 flex-wrap justify-center gap-6 w-full max-w-[1200px]">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              ref={(el) => (certificationsRef.current[idx] = el)}
              className="relative p-6 rounded-2xl text-center flex flex-col w-full md:w-fit
             bg-gradient-to-br from-gray-900 via-gray-800 to-black
             shadow-lg hover:shadow-indigo-500/30 transition-all duration-500
             border border-transparent hover:border-indigo-400/50
             transform hover:scale-105 group"
            >
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-900 to-black opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>

              <p className="relative text-lg font-semibold text-white tracking-wide">
                {cert.name}
              </p>

              {cert.certificate && (
                <div className="mt-6 flex items-center justify-center">
                  <a
                    aria-label="See certificate"
                    href={`/${cert.certificate}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
                   rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                   text-white shadow-md hover:shadow-pink-500/50
                   transition-all duration-300 ease-out
                   hover:scale-110 active:scale-95"
                  >
                    Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Profiles */}
      <section className="py-24 p-8 flex flex-col items-center bg-black/70 gap-12 w-full">
        <Heading heading="Profiles" />
        <div className="flex  flex-wrap justify-around gap-10 w-full max-w-[1000px]   ">
          {profiles.map((cert, idx) => (
            <a
              href={cert.link}
              target="_blank"
              key={idx}
              ref={(el) => (profileRefs.current[idx] = el)}
              className="relative p-4 rounded-2xl items-center flex flex-col flex-1  w-full md:w-fit
             shadow-lg hover:shadow-indigo-500/30 transition-all duration-500
             border border-white/10 hover:border-indigo-400/50
             transform hover:scale-105 group gap-4"
            >
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-900 to-black opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>

              <span className="text-6xl">{cert.icon}</span>
              <p className=" text-lg font-semibold text-white tracking-wide">
                {cert.platform}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
