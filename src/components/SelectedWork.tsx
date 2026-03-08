import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  focusAreas: string[];
  index: number;
}

const ProjectCard = ({ title, role, description, focusAreas, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`group relative rounded-2xl border border-border bg-card p-8 md:p-12 transition-all duration-300 hover:shadow-lg hover:border-foreground/10 ${isEven ? '' : ''}`}>
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
          {role}
        </span>
        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">{description}</p>

      {/* Focus areas */}
      <div className="flex flex-wrap gap-2">
        {focusAreas.map((area) => (
          <span
            key={area}
            className="text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1"
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    title: "DigitalQatalyst Corporate Website",
    role: "Product Designer",
    description:
      "Redesigned the brand identity and corporate website for DigitalQatalyst, modernising the digital presence and aligning the experience with the firm's positioning as a digital transformation leader.",
    focusAreas: ["Brand Experience", "UX Architecture", "Corporate Storytelling", "Modern UI"],
  },
  {
    title: "DQ TMaaS Governance & Delivery Platform",
    role: "Product Owner / Product Designer",
    description:
      "Designed and led the development of TMaaS — a unified platform centralising project governance, delivery workflows, and operational visibility. Replaced scattered tools with a single source of truth.",
    focusAreas: ["Product Strategy", "Platform Architecture", "Governance Workflows", "B2B Product UX"],
  },
  {
    title: "DFSA Financial Services Authorisation",
    role: "Product Owner / Product Designer",
    description:
      "Part of the digital transformation initiative for the Dubai Financial Services Authority. Designed the digital experience for applying for financial services authorisation in DIFC, replacing manual documentation workflows.",
    focusAreas: ["Regulatory UX", "Complex Form Design", "Workflow Systems", "Enterprise Platform"],
  },
  {
    title: "Turnaxis Energy Management System",
    role: "Product Designer",
    description:
      "Designed the digital experience for Turnaxis, providing intelligent asset monitoring and cold chain management using BLE sensors and AI — from energy dashboards to corporate identity.",
    focusAreas: ["IoT Platform UX", "Real-time Dashboards", "Data Visualisation", "Industrial Design"],
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-handwriting text-accent text-xl md:text-2xl block mb-3">
            Selected work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Platforms that
            <br />
            move organisations forward
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
