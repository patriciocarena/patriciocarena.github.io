import { Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
          About<span className="text-gold">.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm an Industrial Engineering student from Córdoba, Argentina, currently on academic exchange at the
          University of San Francisco. I specialize in quality management systems, KPI design, and process
          improvement using tools like PDCA, Ishikawa, and 5W2H. I combine engineering rigor with a
          collaborative mindset and a strong drive to deliver measurable results.
        </p>
        <div className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border">
          <Target className="text-gold mt-0.5 shrink-0" size={22} />
          <div>
            <h3 className="font-semibold text-primary text-sm uppercase tracking-wider mb-1">
              What I'm looking for
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Internships or entry-level roles in Operations, Quality Engineering, Supply Chain, Analytics,
              or AI-enabled operations tools — where I can apply structured problem-solving and continuous
              improvement methodologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
