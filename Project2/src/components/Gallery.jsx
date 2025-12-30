import React, { useEffect } from "react";

import Img1 from "../assets/About1.jpg";
import Img2 from "../assets/About2.jpg";
import Img3 from "../assets/About3.jpg";
import Img4 from "../assets/About1.jpg";
import Img5 from "../assets/About2.jpg";
import Img6 from "../assets/About3.jpg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const Gallery = () => {
  // Slow scroll feel
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <style>{`
        .gallery-heading {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          color: #8b7355;
        }

        .gallery-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 300;
          color: #2c2c2c;
        }

        .masonry {
          column-count: 1;
          column-gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .masonry {
            column-count: 2;
          }
        }

        @media (min-width: 1200px) {
          .masonry {
            column-count: 3;
          }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .masonry-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 1.2s ease;
        }

        .masonry-item:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <section
        className="min-h-screen px-6 py-32"
        style={{ backgroundColor: "#e8e1d6" }}
      >
        {/* HEADER */}
        <div className="max-w-6xl mx-auto mb-20 text-center">
          <p className="gallery-heading mb-4">THE LAND</p>
          <h1 className="gallery-title text-4xl md:text-6xl">
            A quiet collection of moments
          </h1>
        </div>

        {/* GALLERY */}
        <div className="max-w-6xl mx-auto masonry">
          {images.map((img, index) => (
            <div key={index} className="masonry-item">
              <img src={img} alt={`Ranch view ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
