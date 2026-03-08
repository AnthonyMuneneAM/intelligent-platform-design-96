import { ArrowDown, Diamond, Star, Sparkles, ExternalLink } from "lucide-react";
import projectDQ from "@/assets/project-digitalqatalyst.jpg";
import projectTMaaS from "@/assets/project-tmaas.jpg";
import projectDFSA from "@/assets/project-dfsa.jpg";
import projectTurnaxis from "@/assets/project-turnaxis.jpg";
import avatarImg from "@/assets/avatar-anthony.jpg";

const floatingCards = [
  { img: projectDQ, label: "DigitalQatalyst", role: "Lead Designer", x: "5%", y: "15%", rotate: "-6deg", delay: "0s" },
  { img: projectTMaaS, label: "TMaaS", role: "UI/UX Design", x: "65%", y: "8%", rotate: "4deg", delay: "0.5s" },
  { img: projectDFSA, label: "DFSA", role: "Product Design", x: "75%", y: "55%", rotate: "-3deg", delay: "1s" },
  { img: projectTurnaxis, label: "TurnAxis", role: "Brand & Web", x: "10%", y: "60%", rotate: "5deg", delay: "1.5s" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] top-1/3 left-1/2 -translate-x-1/2 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-highlight/20 blur-[100px] top-1/4 left-1/4 animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-[hsl(260,60%,70%)]/20 blur-[100px] bottom-1/4 right-1/4 animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      {/* Headline */}
      <div className="relative z-10 text-center px-6 pt-28 pb-8">
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

      {/* Floating cards area */}
      <div className="relative z-10 flex-1 min-h-[340px] sm:min-h-[400px] mx-auto w-full max-w-5xl">
        {/* Floating project cards */}
        {floatingCards.map((card, i) => (
          <div
            key={i}
            className="absolute floating-card group"
            style={{
              left: card.x,
              top: card.y,
              transform: `rotate(${card.rotate})`,
              animationDelay: card.delay,
            }}
          >
            <div className="bg-background/90 backdrop-blur-xl border border-border rounded-2xl p-3 shadow-xl shadow-foreground/5 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer w-[160px] sm:w-[200px]">
              <div className="rounded-xl overflow-hidden h-20 sm:h-24 mb-2">
                <img src={card.img} alt={card.label} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">{card.label}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{card.role}</p>
                </div>
                <ExternalLink size={12} className="ml-auto text-muted-foreground" />
              </div>
            </div>
          </div>
        ))}

        {/* Floating avatar bubbles */}
        <div className="absolute left-[40%] top-[5%] floating-card" style={{ animationDelay: '0.3s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-background shadow-lg">
            <img src={avatarImg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="absolute right-[15%] top-[35%] floating-card" style={{ animationDelay: '0.8s' }}>
          <div className="bg-background/90 backdrop-blur-xl border border-border rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
            <Sparkles size={12} className="text-accent" />
            <span className="text-xs font-medium text-foreground">Available for work</span>
          </div>
        </div>

        <div className="absolute left-[35%] bottom-[5%] floating-card" style={{ animationDelay: '1.2s' }}>
          <div className="bg-background/90 backdrop-blur-xl border border-border rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
            <Star size={12} className="text-highlight" fill="currentColor" />
            <span className="text-xs font-medium text-foreground">5+ years experience</span>
          </div>
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
