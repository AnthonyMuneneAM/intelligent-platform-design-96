const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-base font-semibold tracking-tight">
          Anthony Munene
        </span>
        <div className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#" className="hover:text-foreground transition-colors">About</a>
        </div>
        <a
          href="mailto:hello@anthonymunene.com"
          className="bg-primary text-primary-foreground text-sm px-5 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
