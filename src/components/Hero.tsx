const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Rainbow glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Product Designer & Product Owner
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
          Designing intelligent
          <br />
          digital platforms
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          Bridging product strategy, UX design, and AI-driven digital platforms
          that transform how organisations operate.
        </p>

        {/* Handwriting annotation + CTA */}
        <div className="relative inline-block">
          <span className="font-handwriting text-accent text-xl md:text-2xl absolute -top-10 -left-4 -rotate-3">
            Let's build together
          </span>
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
          >
            View selected work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
