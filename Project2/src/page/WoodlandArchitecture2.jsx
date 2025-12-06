import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';

const WoodlandArchitecture = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);

  // Simulating smooth scroll behavior (Lenis-like)
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const target = e.target.closest('a');
      if (target && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setMenuOpen(false);
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', smoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', smoothScroll));
    };
  }, []);

  // GSAP-like scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-up, .fade-in, .scale-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Forest House",
      location: "Pacific Northwest",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      year: "2024"
    },
    {
      title: "Modern Cabin",
      location: "Colorado Mountains",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      year: "2023"
    },
    {
      title: "Lake Villa",
      location: "Ontario, Canada",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      year: "2023"
    },
    {
      title: "Urban Loft",
      location: "New York City",
      image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
      year: "2024"
    }
  ];

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .fade-up {
          opacity: 0;
          transform: translateY(40px);
        }

        .fade-in {
          opacity: 0;
        }

        .scale-in {
          opacity: 0;
          transform: scale(0.95);
        }

        .animate-in.fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }

        .animate-in.fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-in.scale-in {
          animation: scaleIn 1s ease-out forwards;
        }

        .hero-text {
          animation: fadeUp 1s ease-out 0.3s backwards;
        }

        .hero-subtext {
          animation: fadeUp 1s ease-out 0.5s backwards;
        }

        .hero-cta {
          animation: fadeUp 1s ease-out 0.7s backwards;
        }

        .nav-item {
          transition: transform 0.3s ease;
        }

        .nav-item:hover {
          transform: translateY(-2px);
        }

        .project-card {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .project-image {
          transition: transform 0.7s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .smooth-scroll {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-lg border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-wider">WOODLAND</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="nav-item text-sm tracking-wide hover:text-emerald-700">HOME</a>
            <a href="#projects" className="nav-item text-sm tracking-wide hover:text-emerald-700">PROJECTS</a>
            <a href="#about" className="nav-item text-sm tracking-wide hover:text-emerald-700">ABOUT</a>
            <a href="#contact" className="nav-item text-sm tracking-wide hover:text-emerald-700">CONTACT</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-stone-50 border-t border-stone-200 py-4 px-6 space-y-4">
            <a href="#home" className="block text-sm tracking-wide hover:text-emerald-700">HOME</a>
            <a href="#projects" className="block text-sm tracking-wide hover:text-emerald-700">PROJECTS</a>
            <a href="#about" className="block text-sm tracking-wide hover:text-emerald-700">ABOUT</a>
            <a href="#contact" className="block text-sm tracking-wide hover:text-emerald-700">CONTACT</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-stone-100 opacity-60"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="hero-text text-6xl md:text-8xl font-light tracking-tight mb-6">
            Crafting Spaces<br />That Inspire
          </h1>
          <p className="hero-subtext text-xl md:text-2xl text-stone-600 mb-12 max-w-2xl mx-auto font-light">
            Award-winning architecture and interior design studio specializing in sustainable, nature-inspired spaces
          </p>
          <a 
            href="#projects"
            className="hero-cta inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full hover:bg-emerald-800 transition-all hover:gap-4"
          >
            View Our Work
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" ref={projectsRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">Featured Projects</h2>
            <p className="text-xl text-stone-600 font-light">Explore our latest architectural masterpieces</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="scale-in project-card bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-light">{project.title}</h3>
                    <span className="text-sm text-stone-500">{project.year}</span>
                  </div>
                  <p className="text-stone-600">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <h2 className="text-5xl md:text-6xl font-light mb-6">Our Philosophy</h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              At Woodland, we believe architecture should harmonize with nature, not compete with it. Our designs blend modern aesthetics with organic elements, creating spaces that are both functional and soul-nourishing.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              With over 15 years of experience, we've crafted more than 200 residential and commercial projects that stand as testaments to sustainable design excellence.
            </p>
          </div>
          <div className="scale-in">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
              alt="Architecture"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-emerald-700 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="fade-up">
            <div className="text-5xl font-light mb-2">200+</div>
            <div className="text-emerald-100">Projects Completed</div>
          </div>
          <div className="fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl font-light mb-2">15</div>
            <div className="text-emerald-100">Years Experience</div>
          </div>
          <div className="fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl font-light mb-2">25+</div>
            <div className="text-emerald-100">Awards Won</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="fade-up text-5xl md:text-6xl font-light mb-6">Let's Create Together</h2>
          <p className="fade-up text-xl text-stone-600 mb-12 font-light">
            Ready to bring your vision to life? Get in touch with our team.
          </p>
          <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full border border-stone-300 focus:outline-none focus:border-emerald-700 text-center sm:text-left"
            />
            <button className="bg-emerald-700 text-white px-8 py-4 rounded-full hover:bg-emerald-800 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="text-2xl font-light mb-4">WOODLAND</div>
              <p className="text-stone-400 text-sm">
                Crafting architectural excellence since 2009
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-4">Contact</h3>
              <p className="text-stone-400 text-sm mb-2">hello@woodland.design</p>
              <p className="text-stone-400 text-sm">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Instagram className="cursor-pointer hover:text-emerald-400 transition-colors" size={20} />
                <Twitter className="cursor-pointer hover:text-emerald-400 transition-colors" size={20} />
                <Linkedin className="cursor-pointer hover:text-emerald-400 transition-colors" size={20} />
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
            © 2024 Woodland Architecture & Design. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WoodlandArchitecture;