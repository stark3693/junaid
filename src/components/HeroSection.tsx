import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-transparent to-charcoal-deep opacity-80" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-glow-pulse animation-delay-1000" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-primary font-body text-lg tracking-wider uppercase">
                Professional Actor
              </p>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Junaid</span>
                <span className="block bg-gradient-gold bg-clip-text text-transparent">
                  Afsar Ali
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-gold rounded-full" />
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-body max-w-md">
              Versatile actor with 7+ years of experience, passionate about bringing characters to life through dedicated craft and hard work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio">
                <Button 
                  size="lg" 
                  className="bg-gradient-gold hover:shadow-gold-glow transition-all duration-300 font-body font-semibold"
                >
                  View Portfolio
                </Button>
              </Link>
              <a href="#contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body"
                >
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          
          {/* Portrait Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-2xl rounded-2xl" />
              <img 
                src={heroPortrait}
                alt="Junaid Afsar Ali - Professional Actor"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-cinematic object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/30 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;