import { Helmet } from "react-helmet-async";
import { Target, Heart, Zap, Users, Award, TrendingUp, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision we make is focused on delivering measurable results for your business. We don't chase vanity metrics—we chase growth.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success. We treat your business as if it were our own, with the same care, dedication, and attention to detail.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Social media evolves daily. We stay ahead of trends, algorithms, and best practices to keep your brand at the forefront.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "No hidden fees, no confusing reports. We believe in clear communication and honest feedback at every step.",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "50M+", label: "Engagement Generated" },
  { value: "300%", label: "Average ROI" },
  { value: "98%", label: "Client Retention" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Trivio Digital | Results-Driven Marketing Agency</title>
        <meta name="description" content="Learn about Trivio Digital's mission, values, and results-focused approach. We help businesses grow through strategic social media marketing." />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                We Help Businesses
                <span className="text-gradient"> Dominate Social Media</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Trivio Digital was founded with a simple mission: to help businesses cut through 
                the noise and build meaningful connections with their audience. We believe that 
                great social media marketing should deliver real, measurable results—not just 
                likes and followers.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  We exist to transform how businesses approach social media. Too many companies 
                  waste time and money on strategies that don't work. We're here to change that.
                </p>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Our approach combines data-driven strategy with creative execution. We don't 
                  just post content—we build brands, engage communities, and drive conversions.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you're a startup looking to establish your presence or an established 
                  brand ready to scale, we have the expertise and passion to help you succeed.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-2xl bg-gradient-card border border-border/50 text-center"
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These principles guide everything we do—from strategy to execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Results That Speak for Themselves
                </h2>
                <p className="text-muted-foreground text-lg">
                  We're proud of the results we've delivered for our clients.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Award,
                    title: "Award-Winning Campaigns",
                    description: "Our creative campaigns have been recognized for driving exceptional engagement and conversions.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Consistent Growth",
                    description: "We've helped clients achieve an average of 300% ROI on their social media investment.",
                  },
                  {
                    icon: Users,
                    title: "Happy Clients",
                    description: "With a 98% retention rate, our clients stay because they see real results.",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business grow. Book a free strategy call 
              and discover what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Strategy Call
              </Button>
              <Button variant="heroOutline" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
