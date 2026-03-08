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
  heroStrip1, projectDQ, heroStrip2, heroStrip3, heroStrip5,
  projectTMaaS, heroStrip4, projectDFSA, heroStrip6, projectTurnaxis,
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none opacity-50" />

      {/* Top content */}
      <div className="relative z-10 text-center px-6 pt-32 pb-16 flex-1 flex flex-col items-center justify-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Product Designer & Product Owner
        </div>

        {/* Large typographic name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] tracking-tighter mb-6">
          Anthony
          <br />
          Munene
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
          Designing intelligent digital platforms that transform how organisations operate.
        </p>

        {/* Side labels */}
        <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-muted-foreground tracking-widest uppercase">
          ( Dubai, UAE )
        </div>
        <div className="hidden md:flex absolute right-6 bottom-[40%] text-xs text-muted-foreground gap-3">
          <span>BE</span>
          <span>/</span>
          <span>DR</span>
          <span>/</span>
          <span>X</span>
        </div>
      </div>

      {/* Image strip */}
      <div className="relative z-10 w-full overflow-hidden pb-0">
        <div className="flex gap-3 px-4 animate-strip">
          {stripImages.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-28 sm:w-36 md:w-44 h-48 sm:h-56 md:h-72 rounded-[2rem] overflow-hidden"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate for seamless scroll illusion */}
          {stripImages.map((img, i) => (
            <div
              key={`dup-${i}`}
              className="flex-shrink-0 w-28 sm:w-36 md:w-44 h-48 sm:h-56 md:h-72 rounded-[2rem] overflow-hidden"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Hero;
