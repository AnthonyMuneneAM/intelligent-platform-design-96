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
    <section className="relative min-h-[85vh] flex flex-col overflow-hidden bg-black">
      {/* Main headline with mixed background */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Top part - solid black background */}
          <div className="mb-0 flex items-start justify-between">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight text-[#ff4d00] uppercase">
              <span className="flex items-center gap-4 sm:gap-8">
                <span>Good</span>
                <Diamond className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" strokeWidth={1.5} />
              </span>
              <span className="block">Ideas</span>
            </h1>
            
            {/* Subtitle - top right */}
            <div className="hidden lg:block max-w-sm pt-4">
              <p className="text-base text-white/80 text-right">
                Product Designer for enterprises, startups, and next-gen brands.
              </p>
            </div>
          </div>

          {/* Bottom part - with image background */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background image */}
            <img
              src="https://images.pexels.com/photos/8070770/pexels-photo-8070770.jpeg"
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Text content */}
            <div className="relative py-12 md:py-16">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight text-[#ff4d00] uppercase px-6 md:px-12">
                <span className="flex items-center gap-4 sm:gap-8">
                  <span>With</span>
                  <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" strokeWidth={1.5} />
                  <span>Good</span>
                </span>
                <span className="flex items-center gap-4 sm:gap-8">
                  <Star className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" fill="currentColor" strokeWidth={0} />
                  <span>People</span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* View All Works button */}
      <div className="relative z-10 text-center pb-12">
        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-[#ff4d00] hover:bg-[#ff6b00] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors shadow-xl"
        >
          View All Works
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
