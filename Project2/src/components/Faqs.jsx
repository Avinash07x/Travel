import React, { useState } from "react";

const faqs = [
  {
    question: "What is Kaleo?",
    answer:
      "Kaleo is a private luxury ranch retreat rooted in western beauty — a place designed for stillness, nature, and slow living."
  },
  {
    question: "Is Kaleo open to everyone?",
    answer:
      "Kaleo welcomes kindred spirits seeking space, silence, and meaningful connection with the land. Visits are curated and intentional."
  },
  {
    question: "What experiences are offered?",
    answer:
      "Guests enjoy open landscapes, quiet mornings, nature walks, golden-hour views, and an unhurried ranch lifestyle."
  },
  {
    question: "Is this a real booking property?",
    answer:
      "Kaleo is a conceptual luxury retreat experience created for design and portfolio purposes."
  },
  {
    question: "Where is Kaleo located?",
    answer:
      "Kaleo exists in the spirit of Texas Hill Country — wide skies, raw land, and timeless western calm."
  }
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .faq-heading {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          color: #8b7355;
        }

        .faq-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 300;
          color: #2c2c2c;
        }

        .faq-item {
          border-bottom: 1px solid rgba(0,0,0,0.1);
          padding: 1.5rem 0;
          cursor: pointer;
        }

        .faq-question {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.25rem;
          font-weight: 400;
          color: #2c2c2c;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-answer {
          font-family: 'Lato', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: #5a5a5a;
          margin-top: 1rem;
          max-width: 90%;
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        id="faqs"
        className="py-32 px-6"
        style={{ backgroundColor: '#e8e1d6' }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="faq-heading mb-4 text-center">
            QUESTIONS & ANSWERS
          </p>

          <h2 className="faq-title text-4xl md:text-5xl mb-16 text-center">
            Things people often ask
          </h2>

          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span>{activeIndex === index ? "−" : "+"}</span>
                </div>

                {activeIndex === index && (
                  <p className="faq-answer">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
