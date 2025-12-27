const platforms = [
  { name: "Instagram", icon: "📸" },
  { name: "Facebook", icon: "📘" },
  { name: "TikTok", icon: "🎵" },
  { name: "LinkedIn", icon: "💼" },
  { name: "YouTube", icon: "📺" },
  { name: "Twitter/X", icon: "✖️" },
  { name: "Pinterest", icon: "📌" },
  { name: "Google Ads", icon: "🔍" },
];

const PlatformsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Platforms We Master
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            We Go Where Your Audience Lives
          </h2>
        </div>

        {/* Platforms Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-secondary transition-all duration-300"
            >
              <span className="text-xl">{platform.icon}</span>
              <span className="text-foreground font-medium">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
