import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Copy, 
  Check, 
  ArrowRight, 
  Wallet,
  MessageCircle,
  CreditCard
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MPESA_NUMBER, WHATSAPP_LINK, CRYPTO_WALLET } from "@/lib/constants";
import { Link } from "react-router-dom";

const Payment = () => {
  const { toast } = useToast();
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<"mpesa" | "crypto">("mpesa");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleMpesaPayment = () => {
    // Open WhatsApp to confirm payment
    const message = encodeURIComponent(
      `Hello Trivio Digital! I've made an M-Pesa payment of KES ${amount} from ${phoneNumber}. Please confirm.`
    );
    window.open(`${WHATSAPP_LINK}?text=${message}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Payment - Trivio Digital | Pay with M-Pesa or Crypto</title>
        <meta name="description" content="Make your payment securely via M-Pesa or cryptocurrency. Fast and reliable payment options for all our services." />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Secure Payment
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Complete Your
              <span className="text-gradient"> Payment</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your preferred payment method. All payments are secure and confirmed within 24 hours.
            </p>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Method Selector */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setSelectedMethod("mpesa")}
                  className={`flex-1 p-6 rounded-2xl border transition-all ${
                    selectedMethod === "mpesa"
                      ? "bg-primary/10 border-primary/50"
                      : "bg-gradient-card border-border/50 hover:border-primary/30"
                  }`}
                >
                  <Phone className={`w-8 h-8 mb-3 ${selectedMethod === "mpesa" ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="font-display text-lg font-semibold text-foreground">M-Pesa</h3>
                  <p className="text-sm text-muted-foreground">Instant mobile payment</p>
                </button>

                <button
                  onClick={() => setSelectedMethod("crypto")}
                  className={`flex-1 p-6 rounded-2xl border transition-all ${
                    selectedMethod === "crypto"
                      ? "bg-primary/10 border-primary/50"
                      : "bg-gradient-card border-border/50 hover:border-primary/30"
                  }`}
                >
                  <Wallet className={`w-8 h-8 mb-3 ${selectedMethod === "crypto" ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="font-display text-lg font-semibold text-foreground">Crypto</h3>
                  <p className="text-sm text-muted-foreground">BTC, ETH, USDT</p>
                </button>
              </div>

              {/* M-Pesa Payment */}
              {selectedMethod === "mpesa" && (
                <div className="p-8 rounded-2xl bg-gradient-card border border-border/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                      <Phone className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-foreground">Pay via M-Pesa</h2>
                      <p className="text-muted-foreground">Send payment to our paybill/till number</p>
                    </div>
                  </div>

                  <div className="bg-secondary/30 p-6 rounded-xl mb-6">
                    <p className="text-sm text-muted-foreground mb-2">M-Pesa Till Number</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-bold text-foreground">{MPESA_NUMBER}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(MPESA_NUMBER, "M-Pesa number")}
                      >
                        {copiedItem === "M-Pesa number" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="phone">Your M-Pesa Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="0700000000"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="mt-2 bg-secondary/30 border-border/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount (KES)</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="15000"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-2 bg-secondary/30 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Steps:</strong> 1) Go to M-Pesa → 2) Lipa Na M-Pesa → 3) Buy Goods & Services → 4) Enter Till Number → 5) Enter Amount → 6) Confirm
                    </p>
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      onClick={handleMpesaPayment}
                      disabled={!phoneNumber || !amount}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Confirm Payment via WhatsApp
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Crypto Payment */}
              {selectedMethod === "crypto" && (
                <div className="p-8 rounded-2xl bg-gradient-card border border-border/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                      <Wallet className="w-8 h-8 text-amber-500" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-foreground">Pay with Crypto</h2>
                      <p className="text-muted-foreground">For international clients</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(CRYPTO_WALLET).map(([currency, address]) => (
                      <div key={currency} className="bg-secondary/30 p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-foreground">{currency}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(address, `${currency} address`)}
                          >
                            {copiedItem === `${currency} address` ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground font-mono break-all">{address}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <p className="text-sm text-foreground">
                      <strong>Important:</strong> After sending payment, please contact us via WhatsApp with your transaction hash for confirmation.
                    </p>
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full mt-6"
                    onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Confirm Payment via WhatsApp
                  </Button>
                </div>
              )}

              {/* After Payment */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-card border border-border/50 text-center">
                <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  After Payment
                </h3>
                <p className="text-muted-foreground mb-4">
                  Once payment is confirmed, you'll be directed to complete your onboarding form.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/onboarding">
                    Go to Onboarding Form
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Payment;
