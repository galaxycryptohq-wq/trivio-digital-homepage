import { TrendingUp, Users, Target, BarChart3, Megaphone, Palette } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    description: "Strategic content creation and community management to build an engaged audience that converts.",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "High-performance ad campaigns across Meta, Google, and TikTok with optimized ROAS.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Proven funnels and landing pages designed to capture and nurture qualified leads.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards and monthly reports to track every metric that matters.",
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Strategic partnerships with creators who authentically connect with your target audience.",
  },
  {
    icon: Palette,
    title: "Brand Strategy",
    description: "Cohesive visual identity and messaging that positions you as the industry leader.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="text-gradient"> Dominate Online</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Full-service digital marketing solutions tailored to your growth goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
