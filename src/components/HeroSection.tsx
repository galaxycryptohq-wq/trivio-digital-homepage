import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Trusted by 250+ Growing Brands</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            Scale Your Brand with
            <span className="text-gradient block mt-2">Data-Driven Marketing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            We help ambitious businesses dominate social media, generate qualified leads, 
            and achieve measurable growth through proven digital strategies.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="group w-full sm:w-auto"
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Watch Our Process
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { value: "500+", label: "Campaigns Launched" },
              { value: "3.2x", label: "Average ROI" },
              { value: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
