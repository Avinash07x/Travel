import React, { useState } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';

export default function WoodlandArchitecture() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const totalSlides = 3;

  const services = [
    {
      number: '01',
      title: 'Architecture',
      description: 'We design buildings that are purposeful, enduring, and deeply connected to their surroundings.',
      points: ['Concept Design', 'Architectural Planning', '3D Visualization & Modeling', 'Construction Documentation'],
      image: 'https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685286491a3e4ce9a7b39573_service-1-img.webp'
    },
    {
      number: '02',
      title: 'Interior Design',
      description: 'Beyond surface-level styling, we craft interiors that feel as good as they look.',
      points: ['Spatial Identity', 'Material & Finish Selection', 'Furniture & Lighting Design', 'Detail Development'],
      image: 'https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6852860d55b59b8474e4a795_service-2-img.webp'
    },
    {
      number: '03',
      title: 'Layout Planning',
      description: 'We organize environments around people, movement, and use, creating clarity, comfort, and adaptability.',
      points: ['Functional Zoning', 'Human-Centered Design', 'Circulation Strategy', 'Flexibility & Future Use'],
      image: 'https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6852855e03e1fcb4ec5b46c3_service-3-img.webp'
    },
    {
      number: '04',
      title: 'Project Management',
      description: 'We ensure your vision is delivered on time, on budget, and to the highest standards.',
      points: ['Concept Design', 'Stakeholder Coordination', 'Quality Control', 'Budget & Timeline Tracking'],
      image: 'https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685285ca74c32db80127f923_service-4-img.webp'
    }
  ];

  const projects = [
    {
      title: 'Coastal Villa',
      location: 'Aspen',
      type: 'Residential',
      year: '2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059eeabc4d975b8b5d560_Contemporary%20House%20at%20Dawn_Dusk.jpeg',
      align: 'left'
    },
    {
      title: 'The Willow Loft',
      location: 'Aspen',
      type: 'Residential',
      year: '2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059eeabc4d975b8b5d554_Modern%20Minimalist%20House%20with%20Garden.jpeg',
      align: 'right'
    },
    {
      title: 'Sunshine Retreat',
      location: 'Aspen',
      type: 'Residential',
      year: '2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529216ec5c928ff5325ff9_project-2-img.webp',
      align: 'left'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setNewsletterEmail('');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img 
                src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059b4ced709fa6285f993_wp-logo.svg" 
                alt="Woodland" 
                className="h-8"
              />
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about-section" className="text-sm hover:text-gray-600 transition">About</a>
              <a href="#services-section" className="text-sm hover:text-gray-600 transition">Services</a>
              <a href="#projects-section" className="text-sm hover:text-gray-600 transition">Projects</a>
              <a href="#gallery-section" className="text-sm hover:text-gray-600 transition">Gallery</a>
              <a href="#reviews-section" className="text-sm hover:text-gray-600 transition">Reviews</a>
              <a href="#contact-section" className="text-sm hover:text-gray-600 transition">Contact</a>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#about-section" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gray-600">About</a>
              <a href="#services-section" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gray-600">Services</a>
              <a href="#projects-section" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gray-600">Projects</a>
              <a href="#gallery-section" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gray-600">Gallery</a>
              <a href="#reviews-section" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gray-600">Reviews</a>
              <a href="#contact-section" onClick={() => setMenuOpen(false)} className="block text-sm hover:text-gray-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-700"></div>
        <h1 className="relative z-10 text-7xl sm:text-8xl md:text-9xl font-bold text-white tracking-tight">
          Woodland
        </h1>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <h2 className="text-4xl md:text-5xl font-bold">About</h2>
            <div className="space-y-6">
              <div className="p-6 border border-gray-200">
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
              </div>
              <div className="p-6 border border-gray-200">
                <p className="text-gray-600 leading-relaxed">
                  Ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase">services</h2>
          </div>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="border-t border-gray-300">
                <button
                  onClick={() => setActiveService(activeService === index ? -1 : index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:text-gray-600 transition"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-xl md:text-2xl font-light text-gray-400">{service.number}</span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">{service.title}</h3>
                  </div>
                  <div className="flex-shrink-0">
                    {activeService === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                {activeService === index && (
                  <div className="pb-8 grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <p className="text-gray-600 text-lg">{service.description}</p>
                      <div className="space-y-3">
                        {service.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                            <p className="text-gray-700">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16">projects</h2>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${project.align === 'right' ? 'md:grid-flow-dense' : ''}`}>
                <div className={project.align === 'right' ? 'md:col-start-2' : ''}>
                  <div className="relative overflow-hidden group">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
                
                <div className={`space-y-4 ${project.align === 'right' ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span>{project.location}</span>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>{project.type}</span>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>{project.year}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12">by the numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl md:text-7xl font-bold mb-2">316+</div>
              <div className="text-gray-500">projects completed</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold mb-2">740+</div>
              <div className="text-gray-500">satisfied customers</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold mb-2">215+</div>
              <div className="text-gray-500">YTD transactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12">as featured in</h2>
          <div className="grid grid-cols-3 gap-8 items-center opacity-40">
            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059e3d57de667f9baf66f_logo-1.svg" alt="Logo 1" className="h-8" />
            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059e3d57de667f9baf671_logo-2.svg" alt="Logo 2" className="h-8" />
            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/685059e3d57de667f9baf670_logo-3.svg" alt="Logo 3" className="h-8" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">as featured in</h2>
            <h2 className="text-5xl md:text-6xl font-bold uppercase">gallery</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529b3a0bcd445139f318bd_gallery-img-tl.webp" alt="Gallery 1" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" />
            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529b3b11e36b1678dea751_gallery-img-center.webp" alt="Gallery 2" className="w-full h-48 md:h-96 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" />
            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529b3a78741023142f8959_gallery-img-tr.webp" alt="Gallery 3" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" />
            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529b3a0ce1e4a1d6e72db8_gallery-img-bl.webp" alt="Gallery 4" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" />
            <img src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/68529b3ae74327df7f86a491_gallery-img-br.webp" alt="Gallery 5" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 md:col-span-2 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews-section" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-2">hear our client</h2>
            <h2 className="text-4xl md:text-5xl font-bold">reviews</h2>
          </div>
          
          <div className="relative">
            <div className="text-center px-4 sm:px-12">
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8">
                "Working with Woodland Architects was a blessing for our home. We wanted a space that felt modern but still warm and inviting, and they absolutely nailed it. We highly recommend them for architecture and design projects."
              </p>
            </div>
            
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded transition">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded transition">
              <ChevronRight size={24} />
            </button>
            
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-8 h-8 rounded-full border-2 transition ${currentSlide === i ? 'bg-white border-white text-gray-900' : 'border-white/50 text-white'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner with us</h2>
              <p className="text-gray-600 mb-8">
                If you're someone who's looking to bring a space to life, share a few details to help me reach out to you so we can discuss how to bring your vision to life.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Your full name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900" 
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Your email address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">A little bit about your project</label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900" 
                    placeholder="Example Text"
                  ></textarea>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition"
                >
                  Submit
                </button>
              </div>
            </div>
            
            <div className="relative h-96 md:h-full">
              <img 
                src="https://cdn.prod.website-files.com/684afec0a4c0b1f83bda33ea/6865758e22cd592d1f498c76_Modern%20White%20Building%20(1).jpeg" 
                alt="Modern Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <a href="#about-section" className="block hover:text-gray-600">About</a>
                  <a href="#services-section" className="block hover:text-gray-600">Services</a>
                  <a href="#projects-section" className="block hover:text-gray-600">Projects</a>
                  <a href="#gallery-section" className="block hover:text-gray-600">Gallery</a>
                  <a href="#reviews-section" className="block hover:text-gray-600">Reviews</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Resources</h3>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block hover:text-gray-600">Style guide</a>
                  <a href="#" className="block hover:text-gray-600">Licenses</a>
                  <a href="#" className="block hover:text-gray-600">Changelog</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <div className="space-y-2 text-sm">
                  <a href="mailto:hi@woodland.com" className="block hover:text-gray-600">hi@woodland.com</a>
                  <a href="https://www.x.com" target="_blank" className="block hover:text-gray-600">Twitter</a>
                  <a href="https://www.linkedin.com" target="_blank" className="block hover:text-gray-600">LinkedIn</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Newsletter</h3>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:border-gray-900"
                    required
                  />
                  <button 
                    onClick={handleNewsletterSubmit}
                    className="w-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 pt-8 border-t border-gray-200">
              <div className="flex gap-4 mb-4 md:mb-0">
                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900">Cookie Policy</a>
              </div>
              <div className="flex gap-4">
                <a href="https://www.zoyaqib.com/" target="_blank" className="hover:text-gray-900">Created by Zoya Aqib</a>
                <a href="https://webflow.com" target="_blank" className="hover:text-gray-900">Powered by Webflow</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}