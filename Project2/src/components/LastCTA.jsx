const LastCTA = () => {
  return (
    <section id="house" className="relative h-screen flex items-center justify-center">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-wooden-pier-in-the-middle-of-a-lake-4637-large.mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-white text-center">
        <h3 className="text-6xl mb-6">Western Beauty</h3>
        <p>Some moments speak louder than words.</p>
      </div>
    </section>
  );
};

export default LastCTA;
