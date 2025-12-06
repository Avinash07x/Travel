const CTASection = () => {
  return (
    <section id="about" className="relative h-screen flex items-center justify-center">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-sunset-in-the-forest-2491-large.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white text-center">
        <h3 className="text-7xl mb-8">Breathe</h3>
        <button className="bg-white text-black px-8 py-3 rounded-full">
          Book a Visit
        </button>
      </div>
    </section>
  );
};

export default CTASection;
