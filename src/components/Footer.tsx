const Footer = () => {
  return (
    <footer className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <span className="font-handwriting text-accent text-xl md:text-2xl block mb-4">
          Let's connect
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Anthony Munene
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Product Designer · Product Owner · AI-era Platform Thinker
        </p>

        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href="mailto:hello@anthonymunene.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anthony Munene. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
