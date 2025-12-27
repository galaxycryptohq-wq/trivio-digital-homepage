import { MessageSquare, Search, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery Call",
    description: "We dive deep into your business, goals, and current marketing challenges to understand your unique needs.",
  },
  {
    icon: Search,
    number: "02",
    title: "Strategy Development",
    description: "Our team crafts a custom marketing plan with clear KPIs, timelines, and growth projections.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Campaign Launch",
    description: "We execute your strategy across all channels with precision, from content to paid ads.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimize & Scale",
    description: "Continuous A/B testing and optimization to maximize ROI and accelerate your growth.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From Strategy to
            <span className="text-gradient"> Explosive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven four-step process that delivers consistent, measurable results.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && index !== 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border/50" />
                )}

                <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span className="font-display text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
