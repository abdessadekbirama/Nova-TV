import "./App.css";
import { useState, useEffect } from "react";
import logo from "./assets/logo.jpeg";
function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070709] overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* deep-center glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-violet-700/20 blur-[120px]" />
        {/* top-left accent */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[100px]" />
        {/* bottom-right accent */}
        <div className="absolute -bottom-24 -right-24 w-[360px] h-[360px] rounded-full bg-fuchsia-600/15 blur-[100px]" />
        {/* subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Nav bar ── */}
      <header className="absolute top-0 inset-x-0 flex items-center justify-between px-8 py-6 z-10">
        <div className="flex items-center gap-2 select-none"></div>
        <nav className="hidden sm:flex items-center gap-8 text-xs font-semibold tracking-widest text-white/40 uppercase">
          <a
            href="#"
            className="hover:text-white/80 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:text-white/80 transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-white/80 transition-colors duration-200"
          >
            Support
          </a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <main
        className={`relative z-10 flex flex-col items-center text-center px-6 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase">
            Now Streaming Live
          </span>
        </div>

        {/* logo mark */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 blur-2xl opacity-60 scale-110" />
          <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 via-violet-600 to-fuchsia-600 shadow-2xl">
            <img
              src={logo}
              className="w-full h-full object-contain rounded-2xl"
              alt="Nova TV Logo"
            />
          </div>
        </div>

        {/* wordmark */}
        <h1
          className="text-4xl sm:text-5xl font-black leading-none tracking-tight text-white"
          style={{
            fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          NOVA{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            TV
          </span>
        </h1>

        {/* subtitle */}
        <p className="mt-5 max-w-xs sm:max-w-md text-lg sm:text-xl font-light text-white/50 leading-relaxed tracking-wide">
          Watch live TV anywhere,&nbsp;anytime.
          <br />
          <span className="text-white/30 text-base">
            500+ channels · 4K quality · zero buffering.
          </span>
        </p>

        {/* ── CTA buttons ── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <button
            className="
              group relative overflow-hidden
              flex items-center gap-3
              rounded-2xl px-9 py-5
              text-base font-bold tracking-wide text-white
              bg-gradient-to-r from-blue-500 via-violet-600 to-fuchsia-500
              shadow-[0_0_40px_rgba(139,92,246,0.5)]
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_64px_rgba(139,92,246,0.75)]
              active:scale-95
            "
          >
            {/* shimmer sweep */}
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            {/* icon */}
            <svg
              className="h-5 w-5 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.18 23.76c.34.19.73.19 1.07 0L20.8 14.38c.35-.2.55-.56.55-.96s-.2-.76-.55-.96L4.25.07C3.91-.12 3.52-.12 3.18.07 2.83.26 2.63.62 2.63 1.02v21.96c0 .4.2.76.55.78z" />
            </svg>
            Download for Android
          </button>
          {/* Primary download */}
          {/* <button
            className="
              group relative overflow-hidden
              flex items-center gap-3
              rounded-2xl px-9 py-5
              text-base font-bold tracking-wide text-white
              bg-gradient-to-r from-blue-500 via-violet-600 to-fuchsia-500
              shadow-[0_0_40px_rgba(139,92,246,0.5)]
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_64px_rgba(139,92,246,0.75)]
              active:scale-95
            "
          >
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <svg
              className="h-5 w-5 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.42.07 2.41.74 3.24.8 1.23-.24 2.41-.93 3.72-.84 1.57.12 2.75.72 3.53 1.84-3.24 1.94-2.71 6.17.51 7.36-.61 1.61-1.42 3.19-3 3.7M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Download on App Store
          </button> */}

          {/* <button
            className="
              group
              flex items-center gap-3
              rounded-2xl px-9 py-5
              text-base font-bold tracking-wide text-white/70
              border border-white/10 bg-white/5
              backdrop-blur-sm
              transition-all duration-300
              hover:scale-105 hover:border-white/25 hover:text-white hover:bg-white/10
              active:scale-95
            "
          >
            <svg
              className="h-5 w-5 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.18 23.76c.34.19.73.19 1.07 0L20.8 14.38c.35-.2.55-.56.55-.96s-.2-.76-.55-.96L4.25.07C3.91-.12 3.52-.12 3.18.07 2.83.26 2.63.62 2.63 1.02v21.96c0 .4.2.76.55.78z" />
            </svg>
            Get it on Google Play
          </button> */}
        </div>

        {/* social proof */}
        <div className="mt-14 flex items-center gap-6 text-white/30">
          <div className="text-center">
            <p className="text-2xl font-black text-white/70">4.9</p>
            <p className="text-[11px] tracking-widest uppercase mt-0.5">
              Rating
            </p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-black text-white/70">2M+</p>
            <p className="text-[11px] tracking-widest uppercase mt-0.5">
              Downloads
            </p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-black text-white/70">500+</p>
            <p className="text-[11px] tracking-widest uppercase mt-0.5">
              Channels
            </p>
          </div>
        </div>

        
      </main>

      {/* ── Footer ── */}
      <footer className="relative flex justify-center z-10 mt-10 mb-5">
        <p className="text-[11px] text-white/20 tracking-widest uppercase">
          © {new Date().getFullYear()} Nova TV · All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
