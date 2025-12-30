import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  CreditCard,
  MessageSquare,
  TrendingUp
} from "lucide-react";

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/auth");
    }
  }, [user, isAdmin, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const stats = [
    { label: "Total Leads", value: "156", icon: Users, change: "+12%" },
    { label: "Active Clients", value: "42", icon: TrendingUp, change: "+5%" },
    { label: "Messages", value: "28", icon: MessageSquare, change: "+8%" },
    { label: "Revenue (KES)", value: "2.4M", icon: CreditCard, change: "+18%" },
  ];

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Clients", icon: Users },
    { label: "Submissions", icon: FileText },
    { label: "Payments", icon: CreditCard },
    { label: "Messages", icon: MessageSquare },
    { label: "Settings", icon: Settings },
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Trivio Digital</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        {/* Sidebar */}
        <aside className="w-64 bg-secondary/30 border-r border-border/50 p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">T</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">Admin Panel</span>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          <Button 
            variant="ghost" 
            className="justify-start text-muted-foreground hover:text-destructive"
            onClick={handleSignOut}
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </Button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Welcome back, Admin
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your business today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-gradient-card border border-border/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-emerald-500">{stat.change}</span>
                </div>
                <p className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="p-6 rounded-2xl bg-gradient-card border border-border/50">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              Recent Form Submissions
            </h2>
            <div className="space-y-4">
              {[
                { name: "John Kamau", email: "john@company.co.ke", type: "Onboarding", time: "2 hours ago" },
                { name: "Sarah Wanjiku", email: "sarah@brand.com", type: "Contact", time: "5 hours ago" },
                { name: "Michael Ochieng", email: "michael@startup.io", type: "Onboarding", time: "1 day ago" },
              ].map((submission, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">{submission.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{submission.name}</p>
                      <p className="text-sm text-muted-foreground">{submission.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {submission.type}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{submission.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Admin;
