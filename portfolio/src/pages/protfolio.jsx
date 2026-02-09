import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../../globals/skills";
import { projects } from "../../globals/projects";
import { certifications } from "../../globals/certificates";
import { experience } from "../../globals/experience";
import { profiles } from "../../globals/profiles";
import { qualifications } from "../../globals/qualifications";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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

  useGSAP(() => {
    gsap.from(heroRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.from(".skillsRef", {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".containerSkills",
        start: "top 40%",
        toggleActions: "play none none reverse",
        scroller: "body",
      },
    });

    gsap.utils.toArray(".projectsRef").forEach((card) => {
      gsap.from(card, {
        x: -10,
        opacity: 0,
        duration: 0.5,
        delay: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
          scroller: "body",
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

    gsap.utils.toArray(".certificationRef").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        duration: 0.5,
        delay: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
          scroller: "body",
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

    gsap.utils.toArray(".qualificationRef").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        duration: 0.5,
        delay: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
          scroller: "body",
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

    gsap.utils.toArray(".profileRef").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
          scroller: "body",
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

    gsap.utils.toArray(".experienceRef").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.5,
        scrollTrigger: {
          trigger: card,
          start: "top 65%",
          toggleActions: "play none none reverse",
          scroller: "body",
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
          scroller: "body",
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

  //  useGSAP(() => {
  //   const isMobile = window.innerWidth < 768;

  //   // 🧭 Set default ScrollTrigger behavior
  //   ScrollTrigger.defaults({
  //     scroller: "body",
  //     invalidateOnRefresh: true,
  //   });

  //   // 🧍 Hero section animation
  //   gsap.from(heroRef.current, {
  //     y: 100,
  //     opacity: 0,
  //     duration: 1.5,
  //     ease: "power4.out",
  //   });

  //   // 💻 Skills section
  //   gsap.utils.toArray(".skillsRef").forEach((el) => {
  //     gsap.from(el, {
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: ".containerSkills",
  //         start: isMobile ? "top 85%" : "top 40%",
  //         end: "bottom 70%",
  //         scrub: true,
  //       },
  //     });
  //   });

  //   // 🧱 Project cards
  //   gsap.utils.toArray(".projectsRef").forEach((card) => {
  //     gsap.from(card, {
  //       x: -10,
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: card,
  //         start: isMobile ? "top 85%" : "top 65%",
  //         end: "bottom 60%",
  //         scrub: true,
  //       },
  //     });

  //     card.addEventListener("mouseenter", () => {
  //       gsap.to(card, {
  //         scale: 1.05,
  //         rotate: 1.5,
  //         boxShadow: "0px 12px 30px rgba(99, 102, 241, 0.3)",
  //       });
  //     });
  //     card.addEventListener("mouseleave", () => {
  //       gsap.to(card, {
  //         scale: 1,
  //         rotate: 0,
  //         boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  //       });
  //     });
  //   });

  //   // 🧾 Certification cards
  //   gsap.utils.toArray(".certificationRef").forEach((card) => {
  //     gsap.from(card, {
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: card,
  //         start: isMobile ? "top 85%" : "top 65%",
  //         end: "bottom 60%",
  //         scrub: true,
  //       },
  //     });

  //     card.addEventListener("mouseenter", () => {
  //       gsap.to(card, {
  //         scale: 1.05,
  //         boxShadow: "0px 12px 30px rgba(99, 102, 241, 0.3)",
  //       });
  //     });
  //     card.addEventListener("mouseleave", () => {
  //       gsap.to(card, {
  //         scale: 1,
  //         boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  //       });
  //     });
  //   });

  //   // 🎓 Qualification cards
  //   gsap.utils.toArray(".qualificationRef").forEach((card) => {
  //     gsap.from(card, {
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: card,
  //         start: isMobile ? "top 85%" : "top 65%",
  //         end: "bottom 60%",
  //         scrub: true,
  //       },
  //     });

  //     card.addEventListener("mouseenter", () => {
  //       gsap.to(card, {
  //         scale: 1.05,
  //         boxShadow: "0px 12px 30px rgba(99, 102, 241, 0.3)",
  //       });
  //     });
  //     card.addEventListener("mouseleave", () => {
  //       gsap.to(card, {
  //         scale: 1,
  //         boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  //       });
  //     });
  //   });

  //   // 👤 Profile cards
  //   gsap.utils.toArray(".profileRef").forEach((card) => {
  //     gsap.from(card, {
  //       opacity: 0,
  //       y: 10,
  //       scrollTrigger: {
  //         trigger: card,
  //         start: isMobile ? "top 85%" : "top 65%",
  //         end: "bottom 60%",
  //         scrub: true,
  //       },
  //     });

  //     card.addEventListener("mouseenter", () => {
  //       gsap.to(card, {
  //         scale: 1.05,
  //         boxShadow: "0px 12px 30px rgba(99, 102, 241, 0.3)",
  //       });
  //     });
  //     card.addEventListener("mouseleave", () => {
  //       gsap.to(card, {
  //         scale: 1,
  //         boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  //       });
  //     });
  //   });

  //   // 💼 Experience cards
  //   gsap.utils.toArray(".experienceRef").forEach((card) => {
  //     gsap.from(card, {
  //       opacity: 0,
  //       y: 40,
  //       scale: 0.95,
  //       scrollTrigger: {
  //         trigger: card,
  //         start: isMobile ? "top 85%" : "top 65%",
  //         end: "bottom 60%",
  //         scrub: true,
  //       },
  //     });

  //     const bullets = card.querySelectorAll(".bullet");
  //     gsap.from(bullets, {
  //       opacity: 0,
  //       x: -20,
  //       stagger: 0.15,
  //       delay: 0.3,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: card,
  //         start: isMobile ? "top 85%" : "top 65%",
  //         end: "bottom 60%",
  //         scrub: true,
  //       },
  //     });

  //     card.addEventListener("mouseenter", () => {
  //       gsap.to(card, {
  //         scale: 1.05,
  //         boxShadow: "0px 12px 30px rgba(99, 102, 241, 0.3)",
  //         borderColor: "rgba(99, 102, 241, 1)",
  //       });
  //     });
  //     card.addEventListener("mouseleave", () => {
  //       gsap.to(card, {
  //         scale: 1,
  //         boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  //         borderColor: "transparent",
  //       });
  //     });
  //   });
  // });

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
              className="skillsRef py-4 px-8 md:px-20 bg-gray-800 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 flex md:flex-col items-center gap-8 md:gap-4 w-full md:w-fit"
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
              className="projectsRef relative bg-[#111827] shadow-2xl duration-500  w-full max-w-[1000px] flex flex-col md:flex-row gap-6 p-6 md:rounded-2xl"
              key={index}
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
              idx,
            ) => (
              <article
                key={idx}
                className="experienceRef w-full max-w-[1000px] p-4 md:p-6 bg-gradient-to-br from-white/90 to-sky-50/80 dark:from-slate-800 dark:to-slate-900/60 rounded-2xl shadow-2xl ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden hover:scale-[1.02] transition-transform"
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
            ),
          )}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24  flex flex-col items-center gap-12 w-full bg-gradient-to-b from-cyan-900 to-black ">
        <Heading heading="Certifications & Awards" />
        <div className="flex px-8 md:p-0 flex-wrap justify-center gap-6 w-full max-w-[1200px]">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="certificationRef relative p-6 rounded-2xl text-center flex flex-col w-full md:w-fit
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

      {/* Qualifications */}
      <section className="py-24 flex flex-col items-center gap-12  w-full">
        <Heading heading="Qualifications" />
        <div className="flex px-12 flex-col md:flex-row md:justify-center gap-8 flex-wrap">
          {qualifications.map((qual, idx) => (
            <div
              key={idx}
              className="qualificationRef relative p-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-500 
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

      {/* Profiles */}
      <section className="py-24 p-8 flex flex-col items-center bg-black/70 gap-12 w-full">
        <Heading heading="Profiles" />
        <div className="flex  flex-wrap justify-around gap-10 w-full max-w-[1000px]   ">
          {profiles.map((cert, idx) => (
            <a
              href={cert.link}
              target="_blank"
              key={idx}
              className="profileRef relative p-4 rounded-2xl items-center flex flex-col flex-1  w-full md:w-fit
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
