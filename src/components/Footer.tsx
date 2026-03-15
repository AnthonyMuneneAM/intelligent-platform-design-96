import { useState } from "react";
import { ArrowRight, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      setFirstName("");
      alert("Thanks for subscribing!");
    }, 1000);
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Hero image section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&h=400&fit=crop"
          alt="Silhouettes at sunset"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Main footer content */}
      <div className="relative px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Large CTA Button */}
          <div className="relative -mt-24 md:-mt-32 mb-16">
            <a
              href="mailto:hello@anthonymunene.com"
              className="group relative block w-full bg-gradient-to-r from-[#ff4d00] to-[#ff6b00] rounded-3xl p-6 md:p-10 lg:p-12 overflow-hidden hover:shadow-2xl hover:shadow-[#ff4d00]/20 transition-all duration-300"
            >
              <div className="relative z-10 flex items-center justify-between">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
                  Work with me
                </h2>
                <ArrowRight className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
            </a>
          </div>

          {/* Connect Section */}
          <div className="mb-16">
            <h3 className="text-5xl md:text-6xl font-bold mb-12">Connect</h3>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Contact</h4>
                <div className="space-y-3 text-gray-400">
                  <p>Nairobi, Kenya</p>
                  <a
                    href="mailto:hello@anthonymunene.com"
                    className="block hover:text-white transition-colors"
                  >
                    hello@anthonymunene.com
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-8">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Weekly writings exploring creativity, design, and the hidden patterns
                  shaping how we think and make.
                </p>

                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#ff4d00] hover:bg-[#ff6b00] text-white font-semibold px-8 py-3 rounded-xl transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>

                <p className="text-sm text-gray-500 mt-4">
                  Join 3,000+ subscribers. I'll respect your inbox. Pinky promise.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Anthony Munene. All rights reserved.</p>
            <button className="hover:text-white transition-colors">Feedback</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
