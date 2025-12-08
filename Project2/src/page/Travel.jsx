import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero";
import About from "../components/About";
import CTASection from "../components/CTASection";
import Events from "../components/Events";
import Features from "../components/Features";
import LastCTA from "../components/LastCTA";

import CursorSVG from "../components/CursorSVG"; // ✅ SVG CURSOR


gsap.registerPlugin(ScrollTrigger);

// ✅ Smooth Scroll Mock
class Lenis {
  raf() {
    requestAnimationFrame(this.raf.bind(this));
  }
  start() {
    this.raf();
  }
}

const Travel = () => {
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.start();

    // ✅ HERO ANIMATION
    const heroTl = gsap.timeline();
    heroTl
      .from(".hero-icon", { y: 50, opacity: 0, duration: 1 })
      .from(".hero-title span", { y: 100, opacity: 0, stagger: 0.05 }, "-=0.5")
      .from(".hero-subtitle span", { y: 20, opacity: 0, stagger: 0.02 }, "-=0.4")
      .from(".hero-discover", { y: 20, opacity: 0 }, "-=0.2");

    // ✅ ABOUT ANIMATION
    ScrollTrigger.create({
      trigger: aboutRef.current,
      start: "top center",
      onEnter: () => {
        gsap.to(".about-heading span", { y: 0, opacity: 1, stagger: 0.03 });
        gsap.to(".photo-card", { y: 0, opacity: 1, stagger: 0.2 });
      },
    });

    // ✅ FEATURES ANIMATION
    ScrollTrigger.create({
      trigger: featuresRef.current,
      start: "top center",
      onEnter: () => {
        gsap.to(".feature-item", { y: 0, opacity: 1, stagger: 0.2 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-neutral-50 text-neutral-900 overflow-x-hidden relative">

      {/* ✅✅ SVG CUSTOM CURSOR */}
      <CursorSVG />
      <Hero />
      <About aboutRef={aboutRef} />
      <CTASection />
      <Events />
      <Features featuresRef={featuresRef} />
      <LastCTA />
    </div>
  );
};

export default Travel;
