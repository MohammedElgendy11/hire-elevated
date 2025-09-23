import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-accent/20 to-background relative overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="gradient-text block">
                  Hiring Process
                </span>
                with AI
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                RecuitPro AI revolutionizes recruitment with intelligent candidate matching, 
                automated screening, and data-driven insights. Find the perfect talent faster than ever.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-lg h-14 px-10">
                Request a Demo
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-premium text-lg h-14 px-10"
              >
                Watch Video
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">95%</div>
                <div className="text-sm text-muted-foreground">Match Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">60%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative slide-in-right">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI-powered recruitment platform interface showing candidate matching and analytics"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-medium animate-pulse-glow">
                <div className="text-sm font-semibold">Live Matching</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card border border-border p-4 rounded-lg shadow-medium">
                <div className="text-sm text-muted-foreground">AI Accuracy</div>
                <div className="text-2xl font-bold gradient-text">98.5%</div>
              </div>
            </div>
            
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-20 blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
    </section>
  );
};

export default HeroSection;