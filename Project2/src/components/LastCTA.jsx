import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Last from '../assets/v.mp4';

const LastCTA = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const progress = Math.min(
          Math.max((windowHeight - sectionTop) / (windowHeight * 0.8), 0),
          1
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

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
          transition: `all 0.4s ease-out ${i * 0.02}s`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <>
      <style>{`
        .last-cta-icon {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .last-cta-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 300;
          letter-spacing: 0.15em;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
          margin-bottom: 2rem;
        }

        .last-cta-description {
          font-family: 'Lato', sans-serif;
          font-size: 1.15rem;
          line-height: 1.8;
          font-weight: 300;
          max-width: 700px;
          margin: 0 auto;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.6);
        }

        .video-overlay-gradient {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.5)
          );
        }

        @media (max-width: 768px) {
          .last-cta-title {
            font-size: 3rem;
          }
          
          .last-cta-description {
            font-size: 1rem;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="house"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={Last}
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 video-overlay-gradient"></div>

        {/* Content */}
        <div
          className="relative z-10 text-white text-center px-6"
          style={{
            opacity: scrollProgress,
          }}
        >
          <div 
            className="last-cta-icon"
            style={{
              opacity: scrollProgress,
              transform: `translateY(${(1 - scrollProgress) * 20}px)`,
              transition: 'all 0.6s ease-out',
            }}
          >
            ✦
          </div>

          <h3 className="last-cta-title text-6xl md:text-7xl lg:text-8xl">
            {splitText('WESTERN BEAUTY')}
          </h3>
          
          <p
            className="last-cta-description"
            style={{
              opacity: scrollProgress,
              transform: `translateY(${(1 - scrollProgress) * 20}px)`,
              transition: 'all 0.6s ease-out 0.4s',
            }}
          >
            Some moments speak louder than words — a trail through morning mist, a hand on a horse's mane, the shadow of trees dancing on an old wooden floor.
          </p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
      </section>
    </>
  );
};

export default LastCTA;