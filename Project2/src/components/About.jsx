import React, { useEffect, useRef, useState } from 'react';
import About1 from '../assets/About1.jpg';
import About2 from '../assets/About2.jpg';
import About3 from '../assets/About3.jpg';

const About = ({ aboutRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Sample images - replace with your actual images
  const images = [
    About1
    ,
    About2
    ,
    About3
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes tiltIn1 {
          from {
            opacity: 0;
            transform: translateY(60px) rotate(-8deg) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(-3deg) scale(1);
          }
        }

        @keyframes tiltIn2 {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes tiltIn3 {
          from {
            opacity: 0;
            transform: translateY(60px) rotate(8deg) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotate(3deg) scale(1);
          }
        }

        .about-heading {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          color: #8b7355;
          font-weight: 400;
        }

        .about-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 300;
          line-height: 1.6;
          color: #2c2c2c;
        }

        .about-description {
          font-family: 'Lato', sans-serif;
          font-size: 1.05rem;
          line-height: 1.8;
          color: #5a5a5a;
          font-weight: 300;
        }

        .about-heading.visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .about-title.visible {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .about-description.visible {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .photo-card {
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .photo-card:hover {
          transform: translateY(-8px) rotate(0deg) !important;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }

        .photo-card-1.visible {
          animation: tiltIn1 1s ease-out 0.6s forwards;
          transform: rotate(-3deg);
        }

        .photo-card-2.visible {
          animation: tiltIn2 1s ease-out 0.8s forwards;
        }

        .photo-card-3.visible {
          animation: tiltIn3 1s ease-out 1s forwards;
          transform: rotate(3deg);
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .photo-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <section 
        ref={(node) => {
          sectionRef.current = node;
          if (aboutRef) {
            if (typeof aboutRef === 'function') {
              aboutRef(node);
            } else {
              aboutRef.current = node;
            }
          }
        }}
        id="About" 
        className="py-32 px-6"
        style={{ backgroundColor: '#e8e1d6' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className={`about-heading mb-4 opacity-0 ${isVisible ? 'visible' : ''}`}>
            WHAT LIVES HERE
          </p>

          <h2 className={`about-title text-4xl md:text-5xl mb-6 opacity-0 ${isVisible ? 'visible' : ''}`}>
            Kaleo is more than a home — it's a living rhythm.
          </h2>

          <p className={`about-description max-w-3xl mx-auto mb-20 opacity-0 ${isVisible ? 'visible' : ''}`}>
            Open fields. Wooden fences weathered by time. Horses grazing at dawn. 
            Smoke curling from the hearth as dusk settles in.
          </p>

          <div className="photo-grid">
            {images.map((img, i) => (
              <div key={i} className="relative">
                <img
                  className={`photo-card photo-card-${i + 1} opacity-0 ${isVisible ? 'visible' : ''}`}
                  src={img}
                  alt={`Ranch scene ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;