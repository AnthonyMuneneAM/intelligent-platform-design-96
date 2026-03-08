import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-background/80 backdrop-blur-xl border border-border rounded-full px-3 py-2 flex items-center gap-3 shadow-lg shadow-foreground/5">
        {/* Logo: Name + AI icon */}
        <div className="flex items-center gap-1.5 pl-2 pr-4">
          <span className="text-sm font-bold tracking-tight">
            anthony munene
          </span>
          <Sparkles size={14} className="text-foreground fill-foreground" />
        </div>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full mt-2 right-0 bg-background/90 backdrop-blur-xl border border-border rounded-2xl px-6 py-4 shadow-xl min-w-[180px]">
          <div className="flex flex-col gap-3 text-sm">
            <a href="#work" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#perspective" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              Perspective
            </a>
            <a
              href="mailto:hello@anthonymunene.com"
              onClick={() => setMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
