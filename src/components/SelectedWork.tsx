import projectDQ from "@/assets/project-digitalqatalyst.jpg";
import projectTMaaS from "@/assets/project-tmaas.jpg";
import projectDFSA from "@/assets/project-dfsa.jpg";
import projectTurnaxis from "@/assets/project-turnaxis.jpg";

interface ProjectCardProps {
  title: string;
  company: string;
  role: string;
  buttonText: string;
  image: string;
  variant?: "light" | "dark";
}

const ProjectCard = ({ title, company, role, buttonText, image, variant = "dark" }: ProjectCardProps) => {
  const isDark = variant === "dark";
  
  return (
    <a
      href="#"
      className="group relative block overflow-hidden rounded-3xl aspect-[16/7]"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'bg-gradient-to-br from-black/60 via-black/40 to-black/30 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/40' : 'bg-gradient-to-br from-black/40 via-black/20 to-transparent group-hover:from-black/50 group-hover:via-black/30'}`} />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center">
            <span className="text-xs font-bold">{company.charAt(0)}</span>
          </div>
          <span className="text-sm font-semibold tracking-wide">{company}</span>
        </div>
        
        {/* Title & CTA */}
        <div>
          <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-md transition-transform duration-500 group-hover:translate-x-2">
            {title}
          </h3>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full transition-all duration-300 text-sm group-hover:px-8">
            {buttonText}
          </button>
        </div>
      </div>
    </a>
  );
};

const projects = [
  {
    title: "DigitalQatalyst Corporate Website",
    company: "DigitalQatalyst",
    role: "Product Designer",
    buttonText: "View project",
    image: projectDQ,
    variant: "light" as const,
  },
  {
    title: "DQ TMaaS Platform",
    company: "DigitalQatalyst",
    role: "Product Owner / Product Designer",
    buttonText: "View project",
    image: projectTMaaS,
    variant: "dark" as const,
  },
  {
    title: "DFSA Financial Services Authorisation",
    company: "DFSA",
    role: "Product Owner / Product Designer",
    buttonText: "View project",
    image: projectDFSA,
    variant: "dark" as const,
  },
  {
    title: "Turnaxis Energy Management",
    company: "Turnaxis",
    role: "Product Designer",
    buttonText: "View project",
    image: projectTurnaxis,
    variant: "light" as const,
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black">
            Recent work
          </h2>
        </div>

        {/* Project grid - stacked layout */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
