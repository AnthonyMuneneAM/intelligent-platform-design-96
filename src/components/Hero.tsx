import { ArrowDown, Diamond, Star } from "lucide-react";
import heroStrip1 from "@/assets/hero-strip-1.jpg";
import heroStrip2 from "@/assets/hero-strip-2.jpg";
import heroStrip3 from "@/assets/hero-strip-3.jpg";
import heroStrip4 from "@/assets/hero-strip-4.jpg";
import heroStrip5 from "@/assets/hero-strip-5.jpg";
import heroStrip6 from "@/assets/hero-strip-6.jpg";
import projectDQ from "@/assets/project-digitalqatalyst.jpg";
import projectTMaaS from "@/assets/project-tmaas.jpg";
import projectDFSA from "@/assets/project-dfsa.jpg";
import projectTurnaxis from "@/assets/project-turnaxis.jpg";

const stripImages = [
  heroStrip1, heroStrip2, heroStrip3, heroStrip4, heroStrip5, heroStrip6,
  projectDQ, projectTMaaS, projectDFSA, projectTurnaxis,
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Subtle glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none opacity-40" />

      {/* Headline */}
      <div className="relative z-10 text-center px-6 pt-28 pb-12">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tighter">
          <span className="inline-flex items-center gap-2 sm:gap-4">
            Hey, I'm
            <span className="inline-block bg-accent text-accent-foreground px-3 sm:px-5 py-1 rounded-xl -rotate-1">
              Anthony
            </span>
          </span>
          <br />
          <span className="inline-flex items-center gap-2 sm:gap-4">
            <Diamond className="w-8 h-8 sm:w-12 sm:h-12 text-highlight shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
            Munene.
            <span className="inline-block bg-highlight text-highlight-foreground px-3 sm:px-5 py-1 rounded-xl rotate-1">
              Based
            </span>
            in
          </span>
          <br />
          <span className="inline-flex items-center gap-2 sm:gap-4">
            <Star className="w-7 h-7 sm:w-10 sm:h-10 text-accent shrink-0" fill="currentColor" />
            Nairobi
          </span>
        </h1>
      </div>

      {/* Scrolling image strip */}
      <div className="relative z-10 mt-auto overflow-hidden py-6">
        <div className="animate-strip flex items-end gap-3 sm:gap-4">
          {[...stripImages, ...stripImages].map((src, i) => {
            const shapes = [
              "w-36 h-48 sm:w-48 sm:h-64 rounded-t-full rounded-b-2xl",
              "w-40 h-44 sm:w-52 sm:h-56 rounded-[2rem]",
              "w-32 h-52 sm:w-44 sm:h-68 rounded-t-full rounded-b-2xl",
              "w-44 h-40 sm:w-56 sm:h-52 rounded-[2rem]",
              "w-36 h-56 sm:w-48 sm:h-72 rounded-t-full rounded-b-2xl",
            ];
            const shape = shapes[i % shapes.length];
            return (
              <div
                key={i}
                className={`${shape} overflow-hidden shadow-lg shadow-foreground/5 shrink-0`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>

      {/* View All Works button */}
      <div className="relative z-10 text-center py-8">
        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-xl"
        >
          View All Works
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
