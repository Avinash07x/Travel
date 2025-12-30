import React, { useRef, useEffect, useState } from "react";
import Exp1 from "../assets/About1.jpg";
import Exp2 from "../assets/About2.jpg";
import Exp3 from "../assets/About3.jpg";
import Exp4 from "../assets/About1.jpg";

const Experience = ({ experienceRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const images = [Exp1, Exp2, Exp3, Exp4];

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .exp-heading {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          color: #8b7355;
          font-weight: 400;
        }

        .exp-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 300;
          color: #2c2c2c;
        }

        .exp-description {
          font-family: 'Lato', sans-serif;
          font-size: 1.05rem;
          line-height: 1.8;
          color: #5a5a5a;
          font-weight: 300;
        }

        .fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .exp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .exp-card {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.4s, box-shadow 0.4s;
        }

        .exp-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }

        .exp-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }

        @media (min-width: 768px) {
          .exp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .exp-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <section
        ref={(node) => {
          sectionRef.current = node;
          if (experienceRef) {
            if (typeof experienceRef === "function") experienceRef(node);
            else experienceRef.current = node;
          }
        }}
        id="experience"
        className="py-32 px-6"
        style={{ backgroundColor: "#e8e1d6" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className={`exp-heading mb-4 opacity-0 ${isVisible ? "fadeInUp" : ""}`}>
            EXPERIENCE KALEO
          </p>

          <h2 className={`exp-title text-4xl md:text-5xl mb-6 opacity-0 ${isVisible ? "fadeInUp" : ""}`}>
            What our guests feel
          </h2>

          <p className={`exp-description max-w-3xl mx-auto mb-20 opacity-0 ${isVisible ? "fadeInUp" : ""}`}>
            Open fields. Whispering winds. Golden sunsets. Moments of stillness that let you reconnect with yourself and nature. 
            Every corner of Kaleo invites reflection, calm, and the simple joy of slow living.
          </p>

          <div className="exp-grid">
            {images.map((img, idx) => (
              <div key={idx} className={`exp-card opacity-0 ${isVisible ? "fadeInUp" : ""}`}>
                <img src={img} alt={`Experience ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
