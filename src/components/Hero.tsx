import { ArrowDown } from "lucide-react";
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

const collageImages = [
  { src: projectDQ, className: "w-32 h-40 -rotate-6 top-[5%] left-[8%]" },
  { src: heroStrip1, className: "w-28 h-36 rotate-3 top-[0%] left-[30%]" },
  { src: heroStrip3, className: "w-36 h-44 -rotate-3 top-[-2%] right-[28%]" },
  { src: projectTMaaS, className: "w-30 h-38 rotate-6 top-[5%] right-[6%]" },
  { src: heroStrip2, className: "w-28 h-36 rotate-12 top-[35%] left-[3%]" },
  { src: projectDFSA, className: "w-34 h-42 -rotate-6 top-[30%] left-[22%]" },
  { src: heroStrip5, className: "w-32 h-40 rotate-3 top-[28%] right-[20%]" },
  { src: projectTurnaxis, className: "w-28 h-36 -rotate-12 top-[32%] right-[2%]" },
  { src: heroStrip4, className: "w-30 h-38 rotate-6 top-[60%] left-[12%]" },
  { src: heroStrip6, className: "w-32 h-40 -rotate-3 top-[58%] left-[38%]" },
  { src: heroStrip1, className: "w-28 h-36 rotate-8 top-[62%] right-[15%]" },
  { src: heroStrip3, className: "w-26 h-34 -rotate-8 top-[55%] right-[0%]" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Subtle glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none opacity-40" />

      {/* Headline */}
      <div className="relative z-10 text-center px-6 pt-28 pb-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter">
          Hey, I'm Anthony
          <br />
          Munene. Based in
          <br />
          Dubai
        </h1>
      </div>

      {/* Collage of images */}
      <div className="relative z-10 flex-1 min-h-[50vh] mx-auto w-full max-w-3xl">
        <div className="relative w-full h-full">
          {collageImages.map((img, i) => (
            <div
              key={i}
              className={`absolute rounded-2xl overflow-hidden shadow-lg shadow-foreground/10 ${img.className}`}
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}

          {/* View All Works button centered in collage */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-xl"
            >
              View All Works
              <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
