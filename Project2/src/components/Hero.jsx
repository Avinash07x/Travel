import React from "react";
import hero from "../assets/hero1.mp4";
import hero1 from "../assets/doun1.webm";

/* Split text into animated letters */
const splitText = (text) =>
  text.split("").map((char, i) => (
    <span
      key={i}
      className="inline-block animate-fadeIn opacity-0"
      style={{
        animationDelay: `${i * 0.05}s`,
        animationFillMode: "forwards",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

/* Split text into animated words */
const splitWords = (text) =>
  text.split(" ").map((word, i) => (
    <span
      key={i}
      className="inline-block mr-2 animate-fadeIn opacity-0"
      style={{
        animationDelay: `${0.8 + i * 0.1}s`,
        animationFillMode: "forwards",
      }}
    >
      {word}
    </span>
  ));

const Hero = () => {
  return (
    <>
      {/* ✅ Animations & Styling */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 300;
          letter-spacing: 0.15em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle {
          font-family: 'Lato', sans-serif;
          font-weight: 300;
          font-size: 1.1rem;
          line-height: 1.9;
          letter-spacing: 0.04em;
          text-shadow: 0 2px 15px rgba(0, 0, 0, 0.6);
        }

        .hero-icon {
          font-size: 1.8rem;
          opacity: 0;
          animation: fadeIn 1s ease-out 0.2s forwards;
        }

        /* ✅ DISCOVER BUTTON - BG NONE */
        .hero-discover {
          display: inline-flex;
          align-items: center;
          cursor: none;
          gap: 10px;
          padding: 14px 36px;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.25em;
          transition: all 0.3s ease;
          opacity: 0;
          animation: fadeIn 1s ease-out 2s forwards;
          font-family: 'Lato', sans-serif;
          text-transform: uppercase;

          background: transparent !important;   /* ✅ BG NONE */
          border: none;                          /* ✅ NO BORDER */
          outline: none;
          box-shadow: none;
          color: white;
          cursor: pointer;
        }

        .hero-discover:hover {
          transform: translateY(-2px);
        }

        .hero-button-video {
          width: 60px;
          height: 60px;
          object-fit: cover;
        }
      `}</style>

      {/* ✅ HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* ✅ Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={hero} type="video/mp4" />
        </video>

        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

        {/* ✅ Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <div className="hero-icon mb-8">✦</div>

          <h1 className="hero-title text-7xl md:text-9xl mb-10">
            {splitText("KALEO")}
          </h1>

          <p className="hero-subtitle max-w-2xl mx-auto mb-16 opacity-95">
            {splitWords(
              "Kaleo is a modern ranch retreat designed for quiet escapes, outdoor living, and meaningful gatherings. From scenic views to curated experiences, Kaleo offers a place to slow down, reconnect, and enjoy nature with intention."
            )}
          </p>

          {/* ✅ Discover Button With Video Inside */}
          <a href="#about" className="hero-discover">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="hero-button-video"
            >
              <source src={hero1} type="video/mp4" />
            </video>
          </a>
        </div>

        {/* ✅ Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
      </section>
    </>
  );
};

export default Hero;
