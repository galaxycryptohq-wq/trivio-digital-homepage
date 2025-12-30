import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WHATSAPP_LINK } from "@/lib/constants";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">T</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">Trivio Digital</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                {isAdmin && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/admin">Dashboard</Link>
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth">Log In</Link>
              </Button>
            )}
            <Button 
              variant="default" 
              size="sm"
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                {user ? (
                  <>
                    {isAdmin && (
                      <Button variant="ghost" size="sm" className="justify-start" asChild>
                        <Link to="/admin" onClick={() => setIsOpen(false)}>Dashboard</Link>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="justify-start" onClick={() => { handleSignOut(); setIsOpen(false); }}>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button variant="ghost" size="sm" className="justify-start" asChild>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>Log In</Link>
                  </Button>
                )}
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => { window.open(WHATSAPP_LINK, "_blank"); setIsOpen(false); }}
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
