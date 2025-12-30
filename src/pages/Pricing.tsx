import { Helmet } from "react-helmet-async";
import { Check, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/lib/constants";

const instagramPackages = [
  {
    name: "Starter",
    price: "15,000",
    description: "Perfect for small businesses getting started",
    features: [
      { label: "Platform", value: "Instagram only" },
      { label: "Posts per month", value: "12 posts" },
      { label: "Stories", value: "8 stories" },
      { label: "Engagement", value: "Basic (comments & DMs)" },
      { label: "Reporting", value: "Monthly report" },
      { label: "Strategy calls", value: "1 per month" },
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "35,000",
    description: "For businesses ready to scale their presence",
    features: [
      { label: "Platform", value: "Instagram only" },
      { label: "Posts per month", value: "20 posts" },
      { label: "Stories", value: "16 stories + Reels" },
      { label: "Engagement", value: "Active (daily engagement)" },
      { label: "Reporting", value: "Bi-weekly reports" },
      { label: "Strategy calls", value: "2 per month" },
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "60,000",
    description: "Maximum growth with premium support",
    features: [
      { label: "Platform", value: "Instagram only" },
      { label: "Posts per month", value: "30 posts" },
      { label: "Stories", value: "Daily stories + Reels" },
      { label: "Engagement", value: "Premium (influencer outreach)" },
      { label: "Reporting", value: "Weekly reports + insights" },
      { label: "Strategy calls", value: "4 per month" },
    ],
    popular: false,
  },
];

const fullPackages = [
  {
    name: "Essential",
    price: "45,000",
    description: "Multi-platform presence for growing brands",
    features: [
      { label: "Platforms", value: "Instagram, Facebook, LinkedIn" },
      { label: "Posts per month", value: "24 posts (8 per platform)" },
      { label: "Stories/Content", value: "12 stories + platform content" },
      { label: "Engagement", value: "Active across all platforms" },
      { label: "Reporting", value: "Bi-weekly comprehensive reports" },
      { label: "Strategy calls", value: "2 per month" },
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "85,000",
    description: "Complete social media dominance",
    features: [
      { label: "Platforms", value: "Instagram, Facebook, LinkedIn, TikTok, X" },
      { label: "Posts per month", value: "40 posts across platforms" },
      { label: "Stories/Content", value: "Daily content + Reels/Shorts" },
      { label: "Engagement", value: "Premium (community building)" },
      { label: "Reporting", value: "Weekly reports + competitor analysis" },
      { label: "Strategy calls", value: "4 per month" },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "150,000",
    description: "White-glove service for established brands",
    features: [
      { label: "Platforms", value: "All platforms + emerging channels" },
      { label: "Posts per month", value: "60+ posts with custom schedule" },
      { label: "Stories/Content", value: "Unlimited content creation" },
      { label: "Engagement", value: "Dedicated community manager" },
      { label: "Reporting", value: "Real-time dashboard + weekly calls" },
      { label: "Strategy calls", value: "Unlimited access" },
    ],
    popular: false,
  },
];

const PricingCard = ({ pkg }: { pkg: typeof instagramPackages[0] }) => (
  <div className={`relative p-8 rounded-2xl border transition-all duration-300 ${
    pkg.popular 
      ? "bg-gradient-to-b from-primary/10 to-background border-primary/50 scale-105" 
      : "bg-gradient-card border-border/50 hover:border-primary/30"
  }`}>
    {pkg.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-center mb-8">
      <h3 className="font-display text-2xl font-bold mb-2">{pkg.name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-lg text-muted-foreground">KES</span>
        <span className="text-4xl font-display font-bold">{pkg.price}</span>
        <span className="text-muted-foreground">/month</span>
      </div>
    </div>

    <div className="space-y-4 mb-8">
      {pkg.features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-muted-foreground text-sm">{feature.label}: </span>
            <span className="text-foreground text-sm font-medium">{feature.value}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="space-y-3">
      <Button className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={pkg.popular ? "default" : "outline"} asChild>
        <Link to="/payment">
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
      <Button variant="ghost" className="w-full" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
        <MessageCircle className="w-4 h-4 mr-2" />
        Book a Call
      </Button>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Trivio Digital | Social Media Marketing Packages in KES</title>
        <meta name="description" content="Transparent pricing for social media management in Kenyan Shillings. Choose from Instagram-only or full social media packages. Start growing your brand today." />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Pricing</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent<span className="text-gradient"> Pricing</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the package that fits your business. No hidden fees, no long-term contracts. Pay via M-Pesa or Crypto.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Instagram-Only Packages</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Focused Instagram growth for businesses that want to dominate the platform.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {instagramPackages.map((pkg) => <PricingCard key={pkg.name} pkg={pkg} />)}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Full Social Media Management</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Complete multi-platform management for maximum reach and engagement.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {fullPackages.map((pkg) => <PricingCard key={pkg.name} pkg={pkg} />)}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Not Sure Which Package Is Right for You?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Book a free strategy call with our team via WhatsApp.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Free Strategy Call
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Pricing;
