import React, { useEffect, useRef, useState } from "react";
import Features1 from "../assets/Features1.jpeg";
import Features2 from "../assets/Features2.jpeg";
import Features3 from "../assets/Features3.jpeg";
import { Link } from "react-router-dom";

const featuresData = [
  {
    title: "THE LAND",
    description:
      "Kaleo begins with the land - the rolling fields, tall mornings, and the quiet rhythm of nature. This is a place where sheep graze under golden light, where slow dawns and the earth reminds us what it means to be rooted.",
    image: Features1,
    imageLeft: true,
  },
  {
    title: "THE SPIRIT",
    description:
      "There's a spirit here that lives in the details - the warmth of shared meals, the honesty of hard work, the echo of footsteps on wooden floors. It's in the stories passed down, in the breath between tasks, in the way every simple act is honored.",
    image: Features2,
    imageLeft: false,
  },
  {
    title: "THE VISION",
    description:
      "Our vision is to protect what matters - space, silence, beauty, and belonging. Kaleo is not just a place to visit, but a way of being. We invite those who seek intention, wonder, and a deeper kind of wealth to return to what truly nourishes.",
    image: Features3,
    imageLeft: true,
  },
];

const Features = ({ featuresRef }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .features-heading {
          font-family: 'Lato', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: #8b7355;
          font-weight: 400;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .features-intro {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 300;
          line-height: 1.7;
          color: #2c2c2c;
          font-size: 1.15rem;
          text-align: center;
          max-width: 600px;
          margin: 0 auto 5rem;
        }

        .feature-item {
          opacity: 0;
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .feature-item.visible {
          animation: fadeInUp 1s ease-out forwards;
        }

        .feature-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
        }

        .feature-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          color: #2c2c2c;
          letter-spacing: 0.02em;
        }

        .feature-description {
          font-family: 'Lato', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: #5a5a5a;
          font-weight: 300;
        }

        .cta-button {
          display: inline-block;
          margin-top: 4rem;
          padding: 16px 40px;
          background-color: #2c2c2c;
          color: white;
          font-family: 'Lato', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .cta-button:hover {
          background-color: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .feature-image {
            height: 300px;
          }
          .feature-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <section
        ref={featuresRef}
        id="Features"
        className="py-32 px-6"
        style={{ backgroundColor: "#e8e1d6" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <p className="features-heading">THE THINGS THAT STILL MATTER</p>
          <p className="features-intro">
            Kaleo invites you to slow down — to move with purpose, to remember
            what life feels like when it breathes with meaning.
          </p>

          {/* Feature Items */}
          <div className="space-y-32">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`feature-item ${
                  visibleItems.includes(index) ? "visible" : ""
                } grid md:grid-cols-2 gap-12 items-center`}
              >
                {feature.imageLeft ? (
                  <>
                    <div>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="feature-image"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 md:order-1">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                    <div className="order-1 md:order-2">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="feature-image"
                        loading="lazy"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-20">
            <Link href="/contact" className="cta-button">
              Book a Visit ✦
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
