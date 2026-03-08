import { ArrowUpRight } from "lucide-react";
import projectDQ from "@/assets/project-digitalqatalyst.jpg";
import projectTMaaS from "@/assets/project-tmaas.jpg";
import projectDFSA from "@/assets/project-dfsa.jpg";
import projectTurnaxis from "@/assets/project-turnaxis.jpg";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  focusAreas: string[];
  image: string;
  index: number;
}

const ProjectCard = ({ title, role, description, focusAreas, image, index }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Image container */}
      <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-[4/3] mb-5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        {/* Arrow button */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight size={16} className="text-foreground" />
        </div>
      </div>

      {/* Meta row */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <span className="text-sm text-muted-foreground">_{String(index + 1).padStart(2, "0")}</span>
      </div>

      {/* Role */}
      <p className="text-sm text-muted-foreground mb-3">{role}</p>

      {/* Focus area tags */}
      <div className="flex flex-wrap gap-1.5">
        {focusAreas.slice(0, 3).map((area) => (
          <span
            key={area}
            className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-0.5"
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
    image: projectDQ,
  },
  {
    title: "DQ TMaaS Platform",
    role: "Product Owner / Product Designer",
    description:
      "Designed and led the development of TMaaS — a unified platform centralising project governance, delivery workflows, and operational visibility.",
    focusAreas: ["Product Strategy", "Platform Architecture", "Governance Workflows", "B2B Product UX"],
    image: projectTMaaS,
  },
  {
    title: "DFSA Financial Services Authorisation",
    role: "Product Owner / Product Designer",
    description:
      "Designed the digital experience for applying for financial services authorisation in DIFC, replacing manual documentation workflows.",
    focusAreas: ["Regulatory UX", "Complex Form Design", "Workflow Systems", "Enterprise Platform"],
    image: projectDFSA,
  },
  {
    title: "Turnaxis Energy Management",
    role: "Product Designer",
    description:
      "Designed the digital experience for Turnaxis, providing intelligent asset monitoring and cold chain management using BLE sensors and AI.",
    focusAreas: ["IoT Platform UX", "Real-time Dashboards", "Data Visualisation", "Industrial Design"],
    image: projectTurnaxis,
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="font-handwriting text-accent text-xl md:text-2xl block mb-3">
              Selected work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Latest
              <br />
              Projects.
            </h2>
          </div>
          <span className="text-sm text-muted-foreground hidden md:block">( _©25 )</span>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
