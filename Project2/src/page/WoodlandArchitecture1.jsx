import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const WoodlandArchitecture = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenisScript = document.createElement('script');
    lenisScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lenis/1.0.42/lenis.min.js';
    lenisScript.async = true;
    document.body.appendChild(lenisScript);

    // GSAP Setup
    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    gsapScript.async = true;
    document.body.appendChild(gsapScript);

    const scrollTrigger = document.createElement('script');
    scrollTrigger.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
    scrollTrigger.async = true;
    document.body.appendChild(scrollTrigger);

    let lenis;
    const initAnimations = () => {
      if (window.Lenis && window.gsap && window.ScrollTrigger) {
        // Initialize Lenis
        lenis = new window.Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP Animations
        window.gsap.registerPlugin(window.ScrollTrigger);

        // Hero Animation
        window.gsap.from('.hero-title', {
          opacity: 0,
          y: 100,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.3
        });

        window.gsap.from('.hero-subtitle', {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          delay: 0.6
        });

        // Service Cards Animation
        window.gsap.utils.toArray('.service-card').forEach((card, i) => {
          window.gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 80,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out'
          });
        });

        // Project Cards Animation
        window.gsap.utils.toArray('.project-card').forEach((card, i) => {
          window.gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power2.out'
          });
        });

        // Section Titles Animation
        window.gsap.utils.toArray('.section-title').forEach(title => {
          window.gsap.from(title, {
            scrollTrigger: {
              trigger: title,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
          });
        });

        // Parallax effect for hero background
        window.gsap.to('.hero-bg', {
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          y: 300,
          ease: 'none'
        });
      }
    };

    const checkScripts = setInterval(() => {
      if (window.Lenis && window.gsap && window.ScrollTrigger) {
        clearInterval(checkScripts);
        initAnimations();
      }
    }, 100);

    return () => {
      clearInterval(checkScripts);
      if (lenis) lenis.destroy();
      document.body.removeChild(lenisScript);
      document.body.removeChild(gsapScript);
      document.body.removeChild(scrollTrigger);
    };
  }, []);

  const services = [
    {
      title: 'Architecture',
      desc: 'We design buildings that are purposeful, enduring, and deeply connected to their surroundings.',
      items: ['Concept Design', 'Architectural Planning', '3D Visualization & Modeling', 'Construction Documentation']
    },
    {
      title: 'Interior Design',
      desc: 'Beyond surface-level styling, we craft interiors that feel as good as they look.',
      items: ['Spatial Identity', 'Material & Finish Selection', 'Furniture & Lighting Design', 'Detail Development']
    },
    {
      title: 'Space Planning',
      desc: 'We organize environments around people, movement, and use, creating clarity, comfort, and adaptability.',
      items: ['Functional Zoning', 'Human-Centered Design', 'Circulation Strategy', 'Flexibility & Future Use']
    },
    {
      title: 'Project Management',
      desc: 'We ensure your vision is delivered on time, on budget, and to the highest standards.',
      items: ['Concept Design', 'Stakeholder Coordination', 'Quality Control', 'Budget & Timeline Tracking']
    }
  ];

  const projects = [
    { title: 'Modern Villa', category: 'Residential', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
    { title: 'Urban Office', category: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800' },
    { title: 'Coastal Retreat', category: 'Residential', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800' }
  ];

  return (
    <div className="bg-neutral-50 text-neutral-900 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">WOODLAND</div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm hover:text-neutral-600 transition-colors">Services</a>
            <a href="#projects" className="text-sm hover:text-neutral-600 transition-colors">Projects</a>
            <a href="#about" className="text-sm hover:text-neutral-600 transition-colors">About</a>
            <button className="bg-neutral-900 text-white px-6 py-2 text-sm hover:bg-neutral-700 transition-colors">
              Contact
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 space-y-4">
            <a href="#services" className="block text-sm">Services</a>
            <a href="#projects" className="block text-sm">Projects</a>
            <a href="#about" className="block text-sm">About</a>
            <button className="w-full bg-neutral-900 text-white px-6 py-2 text-sm">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900"></div>
        <div className="hero-bg absolute inset-0 opacity-20" 
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600)', 
                     backgroundSize: 'cover', 
                     backgroundPosition: 'center'}}></div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Design that speaks<br />to its surroundings
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            We design buildings that are purposeful, enduring, and deeply connected to their environment
          </p>
          <button className="hero-subtitle bg-white text-neutral-900 px-8 py-4 text-sm font-medium hover:bg-neutral-100 transition-colors inline-flex items-center gap-2">
            Explore Our Work <ArrowRight size={18} />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-16 text-center">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="service-card bg-white p-8 border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="text-sm text-neutral-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-24 px-6 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-16 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="project-card group cursor-pointer">
                <div className="relative overflow-hidden bg-neutral-200 aspect-[4/5] mb-4">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-xs text-neutral-500 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-8">About Woodland</h2>
          <p className="text-lg text-neutral-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
          <p className="text-lg text-neutral-600">
            Ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. 
            Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">WOODLAND</div>
          <p className="text-neutral-400 text-sm">© 2024 Woodland Architecture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WoodlandArchitecture;