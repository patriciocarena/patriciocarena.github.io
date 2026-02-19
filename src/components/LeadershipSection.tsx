import { Trophy, Heart } from "lucide-react";

const LeadershipSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8">
          Leadership & Activities<span className="text-gold">.</span>
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Trophy className="text-gold shrink-0 mt-0.5" size={18} />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="font-medium text-primary">Rugby team captain</span> (multiple seasons) at
              La Tablada Rugby Club — leadership, discipline, and team coordination under pressure.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Heart className="text-gold shrink-0 mt-0.5" size={18} />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="font-medium text-primary">Volunteering:</span> La Salle community
              initiatives & Cenáculo youth group — service-oriented mindset and community engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
