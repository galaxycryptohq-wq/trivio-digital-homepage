import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ClipboardList, CheckCircle2, ArrowRight } from "lucide-react";

const platforms = [
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
  { id: "tiktok", label: "TikTok" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "twitter", label: "X (Twitter)" },
  { id: "youtube", label: "YouTube" },
];

const brandTones = [
  "Professional",
  "Fun & Playful",
  "Luxury & Premium",
  "Bold & Edgy",
  "Friendly & Approachable",
  "Minimalist & Clean",
  "Creative & Artistic",
];

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required").max(100),
  fullName: z.string().min(2, "Full name is required").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  socialLinks: z.string().max(500).optional(),
  platforms: z.array(z.string()).min(1, "Please select at least one platform"),
  mainGoal: z.string().min(10, "Please describe your main goal").max(500),
  targetAudience: z.string().min(10, "Please describe your target audience").max(500),
  brandTone: z.string().min(1, "Please select a brand tone"),
  competitors: z.string().max(500).optional(),
  hasContent: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  loginAccess: z.enum(["yes", "no"], { required_error: "Please confirm login access" }),
  specialRequests: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const Onboarding = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      fullName: "",
      email: "",
      phone: "",
      website: "",
      socialLinks: "",
      platforms: [],
      mainGoal: "",
      targetAudience: "",
      brandTone: "",
      competitors: "",
      hasContent: undefined,
      loginAccess: undefined,
      specialRequests: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Onboarding form submitted!",
      description: "We'll review your information and get back to you within 24 hours.",
    });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Thank You | Trivio Digital</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-2xl text-center">
              <div className="bg-card border border-border rounded-2xl p-12">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Thank You!
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  Your onboarding form has been submitted successfully. Our team will review your information and reach out within 24 hours to begin your social media journey.
                </p>
                <Button variant="hero" asChild>
                  <a href="/">Back to Home</a>
                </Button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Client Onboarding | Trivio Digital</title>
        <meta
          name="description"
          content="Complete your onboarding form to get started with Trivio Digital's social media management services."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <ClipboardList className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Client Onboarding</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Trivio Digital
                <span className="block text-primary">Onboarding Form</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Welcome aboard! Please fill out this form so we can understand your business and create the perfect social media strategy for you.
              </p>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Business Information */}
                  <div className="space-y-6">
                    <h2 className="font-display text-xl font-semibold text-foreground border-b border-border pb-3">
                      Business Information
                    </h2>

                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your business name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone / WhatsApp *</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 234 567 890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website (if any)</FormLabel>
                            <FormControl>
                              <Input placeholder="https://yourwebsite.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="socialLinks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Social Media Links</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Instagram: @yourbrand&#10;Facebook: facebook.com/yourbrand&#10;TikTok: @yourbrand"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Platform Selection */}
                  <div className="space-y-6">
                    <h2 className="font-display text-xl font-semibold text-foreground border-b border-border pb-3">
                      Platform Selection
                    </h2>

                    <FormField
                      control={form.control}
                      name="platforms"
                      render={() => (
                        <FormItem>
                          <FormLabel>Which platforms do you want us to manage? *</FormLabel>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                            {platforms.map((platform) => (
                              <FormField
                                key={platform.id}
                                control={form.control}
                                name="platforms"
                                render={({ field }) => (
                                  <FormItem
                                    key={platform.id}
                                    className="flex items-center space-x-3 space-y-0 bg-background border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(platform.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, platform.id])
                                            : field.onChange(
                                                field.value?.filter((value) => value !== platform.id)
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      {platform.label}
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Goals & Strategy */}
                  <div className="space-y-6">
                    <h2 className="font-display text-xl font-semibold text-foreground border-b border-border pb-3">
                      Goals & Strategy
                    </h2>

                    <FormField
                      control={form.control}
                      name="mainGoal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Main Goal *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="e.g., Generate more leads, increase sales, grow brand awareness, build community..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="targetAudience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Audience *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your ideal customer: age, location, interests, profession..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="brandTone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brand Tone *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your brand tone" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {brandTones.map((tone) => (
                                <SelectItem key={tone} value={tone.toLowerCase()}>
                                  {tone}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="competitors"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Competitors (optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="List any competitors or brands you admire..."
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Content & Access */}
                  <div className="space-y-6">
                    <h2 className="font-display text-xl font-semibold text-foreground border-b border-border pb-3">
                      Content & Access
                    </h2>

                    <FormField
                      control={form.control}
                      name="hasContent"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Do you already have content (photos, videos, graphics)? *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex gap-6"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Yes, I have content ready
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  No, I need content created
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="loginAccess"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Can you provide login access to your social media accounts? *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex gap-6"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="yes" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  Yes, I can provide access
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="no" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  No, let's discuss alternatives
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Any Special Requests?</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific requirements, preferences, or things we should know..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-6 border-t border-border">
                    <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                      Submit Onboarding Form
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-muted-foreground text-sm mt-4">
                      By submitting this form, you agree to work with Trivio Digital to manage your social media presence.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Onboarding;
