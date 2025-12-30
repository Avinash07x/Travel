import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const formRef = useRef(null);
  const inputsRef = useRef([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Visit Request:", formData);
    alert("Your visit request has been sent.");
  };

  // GSAP Animation
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      formRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    ).fromTo(
      inputsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <section className="py-32 px-6 bg-[#f5eee0]">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        id="Contact-form"
        className="max-w-3xl mx-auto flex flex-col gap-6"
      >
        {/* NAME */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            ref={(el) => (inputsRef.current[0] = el)}
            type="text"
            name="name"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-lg border border-transparent focus:border-black focus:outline-none"
            required
          />
          <input
            ref={(el) => (inputsRef.current[1] = el)}
            type="text"
            name="surname"
            placeholder="Last Name"
            value={formData.surname}
            onChange={handleChange}
            className="p-4 rounded-lg border border-transparent focus:border-black focus:outline-none"
          />
        </div>

        {/* CONTACT */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            ref={(el) => (inputsRef.current[2] = el)}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg border border-transparent focus:border-black focus:outline-none"
            required
          />
          <input
            ref={(el) => (inputsRef.current[3] = el)}
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-4 rounded-lg border border-transparent focus:border-black focus:outline-none"
          />
        </div>

        {/* DATE + GUESTS */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            ref={(el) => (inputsRef.current[4] = el)}
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-4 rounded-lg border border-transparent focus:border-black focus:outline-none"
            required
          />

          <select
            ref={(el) => (inputsRef.current[5] = el)}
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="p-4 rounded-lg border border-transparent focus:border-black focus:outline-none bg-white"
          >
            <option value="">Number of Guests</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3-4">3–4 Guests</option>
            <option value="5+">5+ Guests</option>
          </select>
        </div>

        {/* MESSAGE */}
        <textarea
          ref={(el) => (inputsRef.current[6] = el)}
          name="message"
          placeholder="Tell us what draws you to Kaleo"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="p-4 rounded-lg border border-transparent focus:border-black focus:outline-none resize-none"
        />

        {/* BUTTON */}
        <button
          ref={(el) => (inputsRef.current[7] = el)}
          type="submit"
          className="mt-4 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
        >
          Book a Visit ✦
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
