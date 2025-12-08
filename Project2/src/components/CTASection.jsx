import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cta from '../assets/book.mp4';

const CTASection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoScale, setVideoScale] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Start animation when section enters viewport
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Calculate progress (0 to 1)
        const progress = Math.min(
          Math.max((windowHeight - sectionTop) / (windowHeight * 0.8), 0),
          1
        );
        setScrollProgress(progress);
        
        // Calculate video scale (1 to 1.3) - zooms in as you scroll
        const scale = 1 + (progress * 0.3);
        setVideoScale(scale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className="inline-block"
        style={{
          opacity: scrollProgress,
          transform: `translateY(${(1 - scrollProgress) * 30}px)`,
          transition: `all 0.4s ease-out ${i * 0.03}s`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <>
      <style>{`
        .cta-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 300;
          letter-spacing: 0.2em;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }

        .cta-button {
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          padding: 16px 40px;
          border-radius: 2px;
          background-color: rgba(255, 255, 255, 0.95);
          color: #2c2c2c;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
        }

        .video-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.5)
          );
        }

        .zoom-video {
          transition: transform 0.1s ease-out;
        }

        @media (max-width: 768px) {
          .cta-title {
            font-size: 3.5rem;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background with Zoom Effect */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover zoom-video"
          style={{
            transform: `scale(${videoScale})`,
          }}
        >
          <source
            src={cta}
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 video-overlay"></div>

        {/* Content */}
        <div
          className="relative z-10 text-white text-center px-6"
          style={{
            opacity: scrollProgress,
          }}
        >
          <h3 className="cta-title text-7xl md:text-8xl lg:text-9xl mb-10">
            {splitText('BREATH')}
          </h3>
          
          <button
            className="cta-button"
            style={{
              opacity: scrollProgress,
              transform: `translateY(${(1 - scrollProgress) * 20}px)`,
              transition: 'all 0.6s ease-out 0.3s',
            }}
          >
            Book a Visit →
          </button>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>
    </>
  );
};

export default CTASection;