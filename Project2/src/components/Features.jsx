const Features = ({ featuresRef }) => {
  return (
    <section ref={featuresRef} id="features" className="py-32 px-6">
      <div className="space-y-32 max-w-6xl mx-auto">
        {["The Land", "The Spirit", "The Vision"].map(title => (
          <div
            key={title}
            className="feature-item opacity-0 translate-y-20 grid md:grid-cols-2 gap-12 items-center"
          >
            <img
              src="https://source.unsplash.com/800x600/?ranch"
              className="rounded-lg"
            />
            <div>
              <h4 className="text-3xl mb-6">{title}</h4>
              <p className="text-neutral-600">
                Kaleo reflects simplicity, rhythm, and belonging.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
