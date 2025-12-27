import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-card border border-border/50 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                Limited Spots Available
              </span>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to 10x Your
                <span className="text-gradient block">Digital Presence?</span>
              </h2>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Join 200+ brands that have transformed their growth with Trivio Digital. 
                Book your free strategy call today and discover untapped opportunities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  Book Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  View Case Studies
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                ✓ No commitment required &nbsp; ✓ Free audit included &nbsp; ✓ Response within 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
