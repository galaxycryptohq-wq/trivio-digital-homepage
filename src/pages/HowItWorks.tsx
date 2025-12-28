import { Helmet } from "react-helmet-async";
import { MessageSquare, Target, Rocket, TrendingUp, ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    subtitle: "Understanding Your Business",
    description: "Every successful partnership starts with understanding. We dive deep into your business, your target audience, your competitors, and your goals.",
    details: [
      "30-minute discovery call to understand your vision",
      "Comprehensive audit of your current social presence",
      "Competitor analysis and market research",
      "Identification of growth opportunities",
      "Clear goal setting with measurable KPIs",
    ],
    duration: "Week 1",
  },
  {
    icon: Target,
    number: "02",
    title: "Strategy",
    subtitle: "Building Your Roadmap",
    description: "Based on our discovery, we create a custom strategy tailored specifically to your business and objectives. No cookie-cutter approaches.",
    details: [
      "Custom content calendar development",
      "Brand voice and messaging guidelines",
      "Platform-specific strategies",
      "Hashtag and keyword research",
      "Engagement and growth tactics",
    ],
    duration: "Week 2",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execution",
    subtitle: "Bringing Strategy to Life",
    description: "This is where the magic happens. Our team executes your strategy with precision, creating content that resonates and engages your audience.",
    details: [
      "Professional content creation and scheduling",
      "Daily community engagement and management",
      "Influencer outreach and collaborations",
      "Paid advertising campaigns (if included)",
      "Real-time monitoring and response",
    ],
    duration: "Ongoing",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimization & Growth",
    subtitle: "Continuous Improvement",
    description: "We never stop improving. Through data analysis and continuous testing, we optimize your strategy for maximum ROI and sustainable growth.",
    details: [
      "Weekly performance analysis",
      "A/B testing of content and strategies",
      "Monthly strategy reviews and adjustments",
      "Transparent reporting with actionable insights",
      "Scaling successful campaigns",
    ],
    duration: "Ongoing",
  },
];

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works - Trivio Digital | Our Proven Process</title>
        <meta name="description" content="Discover our proven 4-step process: Discovery, Strategy, Execution, and Optimization. See how we help businesses grow their social media presence." />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Process
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              A Proven Path to
              <span className="text-gradient"> Social Media Success</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              We've refined our process over years of helping businesses grow. 
              Here's exactly how we'll work together to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-px bg-gradient-to-b from-primary/50 to-primary/10 hidden md:block" />
                  )}

                  <div className="flex gap-8 mb-16">
                    {/* Icon Column */}
                    <div className="flex-shrink-0 hidden md:block">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300">
                        {/* Header */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <span className="font-display text-4xl font-bold text-primary/30">
                            {step.number}
                          </span>
                          <div>
                            <h2 className="font-display text-2xl font-bold text-foreground">
                              {step.title}
                            </h2>
                            <p className="text-primary text-sm font-medium">
                              {step.subtitle}
                            </p>
                          </div>
                          <span className="ml-auto bg-secondary/50 text-muted-foreground text-sm px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="space-y-3">
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reassurance Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why Business Owners Trust Us
              </h2>
              <p className="text-muted-foreground text-lg mb-12">
                We understand running a business is challenging. That's why we've designed 
                our process to be transparent, collaborative, and results-driven.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "No Long-Term Contracts",
                    description: "Month-to-month flexibility. Stay because you love the results, not because you're locked in.",
                  },
                  {
                    title: "Transparent Reporting",
                    description: "Know exactly what's happening with your accounts. Clear metrics, honest insights, no vanity stats.",
                  },
                  {
                    title: "Direct Communication",
                    description: "Work directly with your dedicated team. No ticket systems or call centers. Real people, real support.",
                  },
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-gradient-card border border-border/50">
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              The first step is a simple conversation. Book a free strategy call and let's 
              discuss how we can help grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Strategy Call
              </Button>
              <Button variant="heroOutline" size="lg">
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HowItWorks;
