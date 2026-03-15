import { useState } from "react";
import { Menu, X } from "lucide-react";
import avatarImg from "@/assets/avatar-anthony.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/70 backdrop-blur-xl border border-white/20 rounded-full px-2 py-2 flex items-center gap-2 shadow-2xl">
        {/* Avatar + Name */}
        <div className="flex items-center gap-3 pl-1">
          <img
            src={avatarImg}
            alt="Anthony Munene"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-white/30"
          />
          <span className="text-sm font-semibold tracking-tight text-white">
            Anthony Munene
          </span>
        </div>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-9 h-9 rounded-full bg-[#ff4d00] hover:bg-[#ff6b00] text-white flex items-center justify-center transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 shadow-2xl min-w-[180px]">
          <div className="flex flex-col gap-3 text-sm">
            <a href="#work" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-[#ff4d00] transition-colors">
              Work
            </a>
            <a href="#perspective" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-[#ff4d00] transition-colors">
              Perspective
            </a>
            <a
              href="mailto:hello@anthonymunene.com"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[#ff4d00] transition-colors"
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
