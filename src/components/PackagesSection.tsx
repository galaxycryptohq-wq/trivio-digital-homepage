import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/month",
    description: "Perfect for small businesses starting their digital journey.",
    features: [
      "2 Social Media Platforms",
      "12 Posts per Month",
      "Basic Analytics Report",
      "Community Management",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$3,500",
    period: "/month",
    description: "For businesses ready to scale and dominate their market.",
    features: [
      "4 Social Media Platforms",
      "30 Posts per Month",
      "Paid Ad Management ($2k spend)",
      "Advanced Analytics Dashboard",
      "Lead Generation Funnel",
      "Priority Support",
      "Monthly Strategy Call",
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full-service partnership for established brands.",
    features: [
      "Unlimited Platforms",
      "Custom Content Volume",
      "Full Ad Management",
      "Influencer Partnerships",
      "Brand Strategy",
      "Dedicated Account Manager",
      "24/7 Support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transparent Pricing,
            <span className="text-gradient"> Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the package that matches your ambition. No hidden fees, ever.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-card border-primary/50 shadow-glow scale-105 z-10"
                  : "bg-gradient-card border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
