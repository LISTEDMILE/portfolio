import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript,SiGreensock, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiNextdotjs, SiEjs } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);


function Heading({heading}) {
    return(<h2 className="flex items-center justify-items-start gap-4 mb-12 text-5xl md:text-6xl font-bold text-white relative w-full">
  <span className="h-1 w-20 bg-white/10 rounded-full"></span>
  <span className=" text-nowrap">
    {heading}
  </span>
  <span className="h-1 w-full bg-white/10 rounded-full"></span>
</h2>)
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
  { name: "Next.js (Frontend)", icon: <SiNextdotjs className="text-white" /> },
  { name: "EJS", icon: <SiEjs className="text-red-500" /> },
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
            toggleActions:"play none none reverse",
      }
    });

    projectsRef.current.filter(Boolean).forEach((card) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,     // ✅ trigger = the card itself
        start: "top 85%",  // when card enters viewport
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
        className="flex flex-col md:flex-row items-center justify-center h-screen px-8 gap-10 text-center md:text-left max-w-screen-xl mx-auto"
      >
        <div className="flex-1">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Myse
          </h1>
          <p className="text-xl text-gray-400 mb-6 max-w-lg">
            I build futuristic websites with interactive animations and modern web technologies.
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
              src="https://i.pravatar.cc/400"
              alt="Myse"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-8 flex flex-col items-center gap-12">
<Heading heading="Tech Stack"/>
              
              <div className="flex justify-center items-center h-[500px] w-[500px] p-10  animate-spin-slow rounded-full">
                  <div className=" h-[80px] w-[80px] absolute bg-gradient-to-br from-blue-500 to-purple-60 rounded-full  ">
                  </div>
                  
                  {skills.map(
            (tech, idx) => {
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
              
             <div className=" containerSkills flex flex-col md:flex-row justify-center bg-white/5 rounded-lg  w-full p-12 gap-12 flex-wrap">
          {skills.map((tech, idx) => (
            <div
              key={idx}
              ref={(el) => (skillsRef.current[idx] = el)}
              className="py-4 px-16 bg-gray-800 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-4"
              >
                  <h1 className="text-5xl">{tech.icon}</h1>
              <h3 className="text-2xl font-semibold mb-1">{tech.name}</h3>
              
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-8 flex flex-col items-center gap-12 max-w-screen-xl mx-auto ">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Project 1", "Project 2", "Project 3", "Project 4"].map((project, idx) => (
            <div
              key={project}
              ref={(el) => (projectsRef.current[idx] = el)}
              className="bg-gray-900 rounded-xl p-6 w-80 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-md"
            >
              <h3 className="text-2xl font-bold mb-2">{project}</h3>
              <p className="text-gray-400">
                A futuristic web app built using modern tools and technologies.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-8 flex flex-col items-center gap-12 bg-gradient-to-t from-gray-900 to-black max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 flex-wrap">
          {["Company A - Frontend", "Company B - Fullstack", "Freelance"].map((exp, idx) => (
            <div
              key={exp}
              ref={(el) => (experienceRef.current[idx] = el)}
              className="p-6 bg-gray-800 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 flex-1 text-center"
            >
              <h3 className="text-2xl font-semibold mb-1">{exp}</h3>
              <p className="text-gray-400">Built interactive futuristic web apps using React & GSAP.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-8 flex flex-col items-center gap-12 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["React Expert", "Fullstack Developer", "GSAP Animation Pro"].map((cert, idx) => (
            <div
              key={cert}
              ref={(el) => (certificationsRef.current[idx] = el)}
              className="p-6 bg-gray-900 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <p className="text-lg font-semibold">{cert}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 px-8 flex flex-col items-center gap-12 bg-gradient-to-t from-gray-900 to-black max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Qualifications</h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 flex-wrap">
          {["B.Sc Computer Science", "Diploma in Web Design", "Various Workshops"].map((qual, idx) => (
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
      <section id="contact" className="py-24 px-8 text-center flex flex-col items-center gap-6 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-4">Let's build the future together. Reach out!</p>
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
