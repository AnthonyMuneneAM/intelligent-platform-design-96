const aiTopics = [
  {
    title: "AI-Enabled Platforms",
    description:
      "The next generation of digital products aren't just tools — they're intelligent systems that learn, adapt, and anticipate user needs.",
  },
  {
    title: "Enterprise Workflow Automation",
    description:
      "AI is eliminating the friction in enterprise processes — from regulatory compliance to project governance — making organisations faster and more transparent.",
  },
  {
    title: "Intelligent Digital Experiences",
    description:
      "Product design is evolving from static interfaces to dynamic, context-aware experiences that respond to real-time data and user behaviour.",
  },
  {
    title: "The Future of Product Design",
    description:
      "Product designers are becoming systems thinkers — orchestrating AI capabilities, data flows, and human interactions into cohesive platform experiences.",
  },
];

const AISection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-handwriting text-highlight text-xl md:text-2xl block mb-3">
            Perspective
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            AI is reshaping how
            <br />
            we design platforms
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The role of product design is expanding beyond interfaces. In the AI era,
            designers must think in systems — connecting intelligence, data, and human
            needs into platforms that truly transform.
          </p>
        </div>

        {/* Topics grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {aiTopics.map((topic, index) => (
            <div key={topic.title} className="group">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-sm font-medium text-muted-foreground/50">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-semibold">{topic.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
