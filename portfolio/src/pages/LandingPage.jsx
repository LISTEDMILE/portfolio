import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LandingPage() {
  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });
    gsap.from(".sub-text", {
      y: 50,
      opacity: 0,
      delay: 0.4,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(".cta-btn", {
      scale: 0.8,
      opacity: 0,
      delay: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
    gsap.to(".neon-glow", {
      boxShadow: "0 0 30px #00f0ff, 0 0 60px #7700ff",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-start md:items-center justify-center overflow-hidden relative gap-4 p-6">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-3xl animate-pulse" />
      </div>
 
      <img
        src="/Owner.jpg"
        className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] self-center rounded-full border-cyan-500 border mb-8"
      />

      {/* Hero section */}
      <h1 className="hero-text text-4xl md:text-7xl font-bold tracking-widest bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent  md:text-center">
        Welcome to My Portfolio
      </h1>
      <p className="sub-text mt-6 text-lg md:text-xl text-gray-300 max-w-2xl md:text-center">
        I build futuristic and modern web experiences. Dive in and explore my
        work.
      </p>

      {/* Call to action */}
      <a
        href="/portfolio"
        className="cta-btn neon-glow mt-10 px-8 py-3 text-lg rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Explore Projects
      </a>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-cyan-500/30 blur-xl animate-bounce" />
      <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-purple-600/30 blur-xl animate-pulse" />
      <div className="absolute top-40 right-1/4 w-16 h-16  bg-blue-400/30 blur-lg animate-spin-slow" />
    </div>
  );
}
