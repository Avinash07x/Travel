import React from "react";

const splitText = text =>
  text.split("").map((char, i) => (
    <span key={i} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

const splitWords = text =>
  text.split(" ").map((word, i) => (
    <span key={i} className="inline-block mr-2">
      {word}
    </span>
  ));

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-countryside-meadow-4075-large.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-center text-white px-6">
        <div className="hero-icon mb-6">◆</div>

        <h1 className="hero-title text-7xl mb-8">{splitText("Kaleo")}</h1>

        <p className="hero-subtitle max-w-xl mx-auto mb-12">
          {splitWords(
            "Kaleo is a modern ranch retreat designed for quiet escapes and meaningful gatherings."
          )}
        </p>

        <a href="#ranch" className="hero-discover uppercase tracking-wider">
          Discover
        </a>
      </div>
    </section>
  );
};

export default Hero;
