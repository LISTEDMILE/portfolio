import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";

export default function Header() {

  const [showNav, setShowNav] = useState(false);
  useGSAP(() => {
    gsap.from(".logo", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(".nav-link", {
      y: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-cyan-500/30">
      <div className="  flex justify-between items-center px-6 md:px-10 py-1">
        <div className="flex gap-4 items-center ">
          <img src="/Logo.png" className="h-15" />
          <h1 className="logo text-2xl font-bold tracking-widest text-cyan-400 ">
            MY<span className="text-purple-500">DEV</span>
          </h1>
        </div>

         <div className={`${showNav?"flex":"hidden"} flex-col min-h-screen w-[300px] fixed top-0 right-0 bg-gradient-to-b from-cyan-950 to-black text-3xl gap-20 p-8`}>
            <div className="inset-0 h-screen w-screen fixed bg-black/60 " onClick={() => setShowNav(false)}></div>
          <IoClose className="text-white text-5xl self-end cursor-pointer "  onClick={()=>setShowNav(false)}/>
          <div className="flex flex-col gap-6">
          <a
            href="/"
            className="nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/portfolio"
            className="nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Portfolio
          </a>

          <a
            href="/connect"
            className="nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Connect
            </a>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
         
          <a
            href="/"
            className="nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/portfolio"
            className="nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Portfolio
          </a>

          <a
            href="/connect"
            className="nav-link text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Connect
          </a>
        </nav>

         <GiHamburgerMenu className="text-white text-2xl cursor-pointer md:hidden"  onClick={()=> setShowNav(true)}/>
      </div>
    </header>
  );
}
