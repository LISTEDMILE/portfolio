import React,{ useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function ErrorPage() {
  const terminalRef = useRef(null);

  const logs = [
    "> Visitor detected...",
    "",
    "✔ Identity verified.",
    "",
    "> Scanning modified URL...",
    "████████████████████ 100%",
    "",
    "> AI Analysis",
    "",
    "Bro really thought changing the URL",
    "would unlock a hidden page. 💀",
    "",
    "Confidence : 99.98%",
    "",
    "Backend   : 😂",
    "Frontend  : Not rendering that.",
    "Database  : User not found.",
    "",
    "----------------------------------",
    "",
    "404",
    "Secret page not found.",
    "",
    "Recommendation:",
    "Return before the developer notices 👀",
  ];

  const [visible, setVisible] = useState([]);

  useEffect(() => {
   

    let index = 0;

    const timer = setInterval(() => {
      if (index >= logs.length) {
        clearInterval(timer);
        return;
      }

      setVisible((prev) => [...prev, logs[index]]);
      index++;
    }, 350);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen py-20 bg-black flex items-center justify-center px-6">

      <div
        ref={terminalRef}
        className="w-full max-w-4xl rounded-xl border border-green-500/20 bg-[#050505] shadow-[0_0_80px_rgba(0,255,0,0.08)]"
      >
        <div className="border-b border-green-500/20 px-6 py-4 flex justify-between">

          <h1 className="text-green-400 font-bold tracking-[6px]">
            SYSTEM.LOG
          </h1>

          <span className="text-red-500">
            ● LIVE
          </span>

        </div>

        <div className="p-8 font-mono text-green-400 text-lg leading-8 min-h-[520px]">

          {visible.map((line, i) => (
            <p key={i}>
              {line || <br />}
            </p>
          ))}

          {visible.length < logs.length && (
            <span className="animate-pulse">▋</span>
          )}

        </div>

        {visible.length === logs.length && (
          <div className="border-t border-green-500/20 px-6 py-5 flex justify-end">

            <Link
              to="/"
              className="border text-white border-green-400 px-5 py-3 rounded hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              Return Home →
            </Link>

          </div>
        )}
      </div>

    </div>
  );
}