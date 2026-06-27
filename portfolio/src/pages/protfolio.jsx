import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TypeAnimation } from "react-type-animation";
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

  const allSkills = skills.flatMap((cat) => cat.skills);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.from(".heroHead", {
      delay: 0.5,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
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

  return (
    <div className="font-sans text-white  min-h-screen overflow-x-hidden relative">
      <div className="fixed top-0 left-0 bg-black w-screen h-screen overflow-hidden -z-10">
        <div className="w-[200%] h-[200%] bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 animate-[spin_20s_linear_infinite] opacity-30 blur-3xl"></div>
      </div>

      {/* Hero */}
      <section
        ref={heroRef}
        className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 pt-[200px] md:pt-0 gap-10 md:gap-40 text-center md:text-left max-w-screen-xl mx-auto"
      >
        <div className="w-full md:w-80 md:h-80 flex justify-center  ">
          <div className="  relative">
            <img
              src="/Owner.jpg"
              alt="Myse"
              className="w-64 h-64 rounded-full border-4 border-blue-500 md:w-80 md:h-80   shadow-2xl object-cover"
            />

            <div className="absolute -bottom-5 -left-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 z-20">
              <h3 className="font-semibold text-white">Building</h3>

              <p className="text-gray-400 text-sm">Modern Web Experiences</p>
            </div>

            <div className="absolute top-10 -right-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
              🚀 Full Stack
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[60%] md:max-w-[800px] ">
          <h1 className="heroHead">
            <span className="block text-white text-lg">Hi, I'm</span>

            <span className="block text-8xl md:text-8xl font-black text-cyan-300 tracking-[-6px] rotate-[-2deg] inline-block">
              Kunal
            </span>
            <br />

            <span className="block text-8xl md:text-8xl font-black text-white tracking-[-6px] rotate-[2deg] inline-block  mb-10">
              Sharma
            </span>
          </h1>
          <h3 className="block text-xl md:text-2xl font-medium tracking-[0.35em] uppercase text-zinc-500 mb-10 ">
            Full Stack Developer
          </h3>
          <h1 className="heroPara text-xl text-left text-gray-400 mb-6 max-w-lg">
            <TypeAnimation
              sequence={[
                "I build futuristic websites with interactive animations and modern web technologies.",
                2000,
              ]}
              wrapper="p"
              speed={45}
              cursor={true}
            />
          </h1>
          <a
            href="/connect"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 w-fit"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="skills" className="relative py-32 overflow-hidden">
        <Heading heading="Tech Stack" />

        <div className="relative z-10 mx-auto flex flex-col items-center px-6 lg:px-12">
          <p className="mt-5 mb-15 max-w-3xl text-center text-gray-400 leading-8">
            Technologies, frameworks and tools I use to build fast, scalable and
            modern web applications.
          </p>

          <div className="flex h-[500px] w-[500px] items-center justify-center rounded-full p-10 scale-75 animate-spin-slow md:scale-100">
            <div className="absolute h-[80px] w-[80px] rounded-full bg-gradient-to-br from-blue-500 to-purple-60"></div>

            {allSkills.map((tech, idx) => {
              const angle = (idx / allSkills.length) * 2 * Math.PI;
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={idx}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  className="absolute rounded-full p-2 text-4xl"
                >
                  {tech.icon}
                </div>
              );
            })}
          </div>

          <div className="mt-24 flex w-full max-w-6xl flex-col gap-12">
            {skills.map((category, index) => (
              <div
                key={index}
                className="skill-category group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_60px_rgba(34,211,238,.12)]"
              >
                {/* Glow */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.10),transparent_55%)] opacity-0 duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Header */}

                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="mt-2 text-3xl font-bold">
                        {category.title}
                      </h2>

                      <div className="mt-5 h-[4px] w-16 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-transform duration-700 group-hover:scale-x-100" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 w-fit self-end">
                      <span className="text-3xl font-bold text-cyan-400">
                        {category.skills.length}
                      </span>

                      <p className="text-sm text-gray-400">Technologies</p>
                    </div>
                  </div>

                  {/* Skills */}

                  <div className="mt-10 flex flex-wrap gap-4">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="skill-pill w-full sm:w-fit group/pill relative flex cursor-default items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-6 py-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,.18)]"
                      >
                        {/* Animated Glow */}

                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition-all duration-500 group-hover/pill:opacity-100" />

                        {/* Shine Effect */}

                        <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover/pill:left-[130%]" />

                        {/* Icon */}

                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 transition-all duration-300 group-hover/pill:rotate-6 group-hover/pill:scale-110 group-hover/pill:bg-cyan-500/15">
                          <span className="text-2xl">{skill.icon}</span>
                        </div>

                        {/* Name */}

                        <div className="relative">
                          <h3 className="text-base font-medium transition-all duration-300 group-hover/pill:text-cyan-300">
                            {skill.name}
                          </h3>

                          <div className="mt-1 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover/pill:w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
             transform hover:scale-105 group gap-4 text-nowrap"
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
