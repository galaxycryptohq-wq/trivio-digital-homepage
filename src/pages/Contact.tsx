import { Helmet } from "react-helmet-async";
import { Calendar, Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Trivio Digital | Book a Strategy Call</title>
        <meta name="description" content="Get in touch with Trivio Digital. Book a free strategy call or send us a message. We respond within 24 hours." />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Start Your
              <span className="text-gradient"> Growth Journey</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to transform your social media presence? Book a free strategy call 
              or send us a message. We're here to help you succeed.
            </p>
          </div>
        </section>

        {/* Strategy Call Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                    Book a Free Strategy Call
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    In just 30 minutes, we'll analyze your current social media presence, 
                    identify growth opportunities, and outline a custom strategy for your business.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "Comprehensive audit of your current presence",
                      "Competitor analysis and market insights",
                      "Custom growth strategy recommendations",
                      "Clear next steps and action items",
                      "No obligation, no pressure",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Free Call
                  </Button>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-card border border-border/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        What to Expect
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        30-minute video call
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-secondary/30">
                      <p className="text-sm font-medium text-foreground mb-1">
                        First 10 minutes
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We learn about your business, goals, and challenges
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/30">
                      <p className="text-sm font-medium text-foreground mb-1">
                        Next 15 minutes
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We share insights and strategy recommendations
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/30">
                      <p className="text-sm font-medium text-foreground mb-1">
                        Final 5 minutes
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Q&A and discussion of next steps
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Have a question? Fill out the form and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          required 
                          className="bg-secondary/30 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          required 
                          className="bg-secondary/30 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@company.com" 
                        required 
                        className="bg-secondary/30 border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company" 
                        className="bg-secondary/30 border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project and goals..." 
                        rows={5}
                        required 
                        className="bg-secondary/30 border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Prefer to reach out directly? Here's how you can contact us.
                  </p>

                  <div className="space-y-6 mb-12">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "hello@triviodigital.com",
                        href: "mailto:hello@triviodigital.com",
                      },
                      {
                        icon: Phone,
                        label: "Phone",
                        value: "+1 (555) 123-4567",
                        href: "tel:+15551234567",
                      },
                      {
                        icon: MapPin,
                        label: "Location",
                        value: "New York, NY",
                        href: null,
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a 
                              href={item.href} 
                              className="text-foreground font-medium hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Response Time */}
                  <div className="p-6 rounded-2xl bg-gradient-card border border-border/50">
                    <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                      Fast Response Guaranteed
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We understand time is valuable. Our team responds to all inquiries 
                      within 24 hours during business days. Most messages receive a 
                      response within just a few hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Don't let another day go by with an underperforming social media presence. 
              Take the first step toward real growth today.
            </p>
            <Button variant="hero" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Free Strategy Call
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              No commitment required. 100% free consultation.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
