import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Events2 from '../assets/Events1.jpeg';
import Events1 from '../assets/Events2.jpeg';

const Events = () => {
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

  const events = [
    {
      image: Events1,
      title: 'A RETURN TO SLOW MORNINGS & OPEN SKIES',
      description: 'Kaleo is a retreat built for those who long for peace, space, and simplicity. Set among quiet hills and endless skies, it invites you to slow down, breathe deeply, and rediscover a sense of presence.'
    },
    {
      image: Events2,
      title: 'A RETURN TO RHYTHM, MOVEMENT, AND EARTH',
      description: 'At Kaleo, life follows the land. Horses run free, silence speaks, and the wild reminds us who we are. This is where motion meets meaning, and presence becomes a way of life.'
    }
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

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .events-heading {
          font-family: 'Lato', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: #8b7355;
          font-weight: 400;
        }

        .events-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 300;
          line-height: 1.6;
          color: #2c2c2c;
        }

        .events-heading.visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .events-title.visible {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }

        .event-card {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          height: 560px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .event-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }

        .event-card-1.visible {
          animation: cardSlideIn 1s ease-out 0.4s forwards;
        }

        .event-card-2.visible {
          animation: cardSlideIn 1s ease-out 0.6s forwards;
        }

        .event-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .event-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.6)
          );
        }

        .event-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2.5rem;
          color: white;
        }

        .event-icon {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .event-card-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.4;
          margin-bottom: 1rem;
          letter-spacing: 0.02em;
        }

        .event-divider {
          width: 40px;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1rem;
        }

        .event-description {
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          font-weight: 300;
          opacity: 0.95;
        }

        @media (max-width: 768px) {
          .event-card {
            height: 480px;
          }
          
          .event-card-title {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <section 
        ref={sectionRef}
        id="Events" 
        className="py-32 px-6"
        style={{ backgroundColor: '#e8e1d6' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className={`events-heading mb-4 opacity-0 ${isVisible ? 'visible' : ''}`}>
              THE LAND, THE SPIRIT, THE NAME
            </p>
            
            <h2 className={`events-title text-3xl md:text-4xl max-w-3xl mx-auto opacity-0 ${isVisible ? 'visible' : ''}`}>
              Kaleo was born from the desire to return — to the land, to meaning, to something deeper than speed and noise.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <div 
                key={i} 
                className={`event-card event-card-${i + 1} opacity-0 ${isVisible ? 'visible' : ''}`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                  loading="lazy"
                />
                
                <div className="event-overlay"></div>
                
                <div className="event-content">
                  <div className="event-icon">✦</div>
                  
                  <h3 className="event-card-title">
                    {event.title}
                  </h3>
                  
                  <div className="event-divider"></div>
                  
                  <p className="event-description">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;