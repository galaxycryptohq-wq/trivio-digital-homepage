import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Video, 
  Globe, 
  Palette, 
  MessageCircle, 
  BarChart3, 
  Target,
  Check,
  Sparkles
} from "lucide-react";

const services = [
  {
    id: "instagram",
    icon: Instagram,
    title: "Instagram Management",
    subtitle: "Visual storytelling that drives engagement",
    description: "Transform your Instagram presence into a powerful brand asset. We craft scroll-stopping content, optimize your profile for discovery, and build genuine connections with your target audience.",
    features: [
      "Custom content calendar & strategy",
      "Feed posts, Stories & Reels creation",
      "Hashtag research & optimization",
      "Bio & profile optimization",
      "Engagement & DM management",
      "Monthly performance reports"
    ],
    stats: { metric: "3.2x", label: "Average engagement increase" }
  },
  {
    id: "facebook",
    icon: Facebook,
    title: "Facebook Management",
    subtitle: "Community building at scale",
    description: "Leverage Facebook's massive reach to connect with your audience. From organic content to community management, we help you build a loyal following that converts into customers.",
    features: [
      "Page optimization & branding",
      "Content creation & scheduling",
      "Facebook Groups management",
      "Event promotion & management",
      "Messenger response management",
      "Insights & analytics reporting"
    ],
    stats: { metric: "45%", label: "Average reach increase" }
  },
  {
    id: "tiktok",
    icon: Video,
    title: "TikTok Management",
    subtitle: "Viral potential, strategic execution",
    description: "Tap into TikTok's explosive growth with content that resonates. Our team stays ahead of trends, creating authentic videos that capture attention and drive massive organic reach.",
    features: [
      "Trend research & ideation",
      "Short-form video production",
      "Sound & hashtag optimization",
      "Duets & collaboration strategy",
      "Community engagement",
      "Performance analytics & insights"
    ],
    stats: { metric: "10M+", label: "Views generated for clients" }
  },
  {
    id: "linkedin",
    icon: Linkedin,
    title: "LinkedIn Management",
    subtitle: "B2B authority building",
    description: "Position your brand as an industry leader on LinkedIn. We create thought leadership content, expand your professional network, and generate qualified B2B leads.",
    features: [
      "Profile & company page optimization",
      "Thought leadership content",
      "Article & newsletter publishing",
      "Strategic connection building",
      "LinkedIn Sales Navigator support",
      "Lead generation campaigns"
    ],
    stats: { metric: "85%", label: "Increase in profile views" }
  },
  {
    id: "twitter",
    icon: Twitter,
    title: "X (Twitter) Management",
    subtitle: "Real-time brand presence",
    description: "Stay relevant in fast-moving conversations. We manage your X presence with timely content, community interaction, and strategic engagement that builds brand awareness.",
    features: [
      "Tweet strategy & scheduling",
      "Thread creation & optimization",
      "Trending topic participation",
      "Community engagement & replies",
      "Spaces & audio content",
      "Real-time monitoring & response"
    ],
    stats: { metric: "2.5x", label: "Follower growth rate" }
  },
  {
    id: "full-management",
    icon: Globe,
    title: "Full Social Media Management",
    subtitle: "Complete digital presence solution",
    description: "Get comprehensive management across all your social platforms. One unified strategy, consistent branding, and coordinated execution that maximizes your online impact.",
    features: [
      "Multi-platform strategy & coordination",
      "Unified brand voice & messaging",
      "Cross-platform content repurposing",
      "Centralized analytics dashboard",
      "Dedicated account manager",
      "Monthly strategy sessions"
    ],
    stats: { metric: "360°", label: "Complete brand coverage" },
    featured: true
  },
  {
    id: "content-creation",
    icon: Palette,
    title: "Content Creation",
    subtitle: "Scroll-stopping visuals & copy",
    description: "Professional content that captures attention and drives action. From photography to graphics to video, we create assets that elevate your brand across every touchpoint.",
    features: [
      "Brand photography & videography",
      "Graphic design & templates",
      "Copywriting & caption creation",
      "Reels & short-form video",
      "Carousel & infographic design",
      "Brand style guide development"
    ],
    stats: { metric: "500+", label: "Assets created monthly" }
  },
  {
    id: "community",
    icon: MessageCircle,
    title: "Community Management",
    subtitle: "Turn followers into advocates",
    description: "Build meaningful relationships with your audience. We handle all community interactions, fostering engagement and turning casual followers into loyal brand advocates.",
    features: [
      "Comment monitoring & response",
      "DM management & customer service",
      "User-generated content curation",
      "Brand mention tracking",
      "Crisis management protocols",
      "Community growth strategies"
    ],
    stats: { metric: "4hr", label: "Average response time" }
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reporting",
    subtitle: "Data-driven decision making",
    description: "Understand what's working and optimize for results. Our comprehensive analytics provide actionable insights that guide strategy and demonstrate clear ROI.",
    features: [
      "Custom analytics dashboard",
      "Weekly performance snapshots",
      "Monthly detailed reports",
      "Competitor benchmarking",
      "Audience insights & demographics",
      "ROI tracking & attribution"
    ],
    stats: { metric: "100%", label: "Transparency in metrics" }
  },
  {
    id: "paid-ads",
    icon: Target,
    title: "Paid Advertising Strategy",
    subtitle: "Optional add-on for accelerated growth",
    description: "Amplify your organic efforts with strategic paid campaigns. We design, launch, and optimize ad campaigns that deliver measurable results and maximize your ad spend.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "TikTok Ads management",
      "LinkedIn Ads for B2B",
      "Audience research & targeting",
      "A/B testing & optimization",
      "Budget management & scaling"
    ],
    stats: { metric: "4.2x", label: "Average ROAS" },
    addon: true
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Trivio Digital - Full-Service Social Media Management</title>
        <meta
          name="description"
          content="Explore Trivio Digital's comprehensive social media services including Instagram, Facebook, TikTok, LinkedIn, and X management, content creation, and paid advertising."
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Full-Service Digital Marketing</span>
              </span>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Services That
                <span className="text-gradient block">Drive Real Results</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                From platform-specific management to comprehensive digital strategies, 
                we offer everything you need to dominate social media and grow your brand.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="group">
                  Get a Custom Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroOutline" size="lg">
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 ${
                    service.featured 
                      ? "p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/5 border border-primary/20" 
                      : ""
                  }`}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          service.addon 
                            ? "bg-accent/20" 
                            : service.featured 
                              ? "bg-gradient-primary" 
                              : "bg-primary/10"
                        }`}>
                          <service.icon className={`w-7 h-7 ${
                            service.featured ? "text-primary-foreground" : "text-primary"
                          }`} />
                        </div>
                        {service.addon && (
                          <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                            Optional Add-On
                          </span>
                        )}
                        {service.featured && (
                          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                            Most Popular
                          </span>
                        )}
                      </div>
                      
                      <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-primary font-medium mb-4">{service.subtitle}</p>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <Button variant={service.featured ? "hero" : "default"} className="group">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    
                    {/* Features Card */}
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="p-8 rounded-2xl bg-gradient-card border border-border/50">
                        {/* Stats */}
                        <div className="mb-8 pb-8 border-b border-border/50">
                          <div className="text-4xl font-display font-bold text-gradient mb-1">
                            {service.stats.metric}
                          </div>
                          <div className="text-muted-foreground text-sm">{service.stats.label}</div>
                        </div>
                        
                        {/* Features List */}
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          What's Included
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your
                <span className="text-gradient"> Social Presence?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Let's discuss which services are right for your brand. 
                Book a free strategy call and get a custom proposal.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="group">
                  Book Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroOutline" size="lg">
                  View Pricing Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Services;
