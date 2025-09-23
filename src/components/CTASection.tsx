import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import BookDemoModal from "@/components/BookDemoModal";

const benefits = [
  "14-day free trial",
  "No setup fees",
  "Full feature access",
  "Dedicated support",
  "Cancel anytime"
];

const CTASection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <BookDemoModal 
        open={isDemoModalOpen} 
        onOpenChange={setIsDemoModalOpen} 
      />
    <section className="section-padding bg-gradient-to-br from-dark via-dark/95 to-primary/20 text-dark-foreground relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
              Your Hiring Process?
            </span>
          </h2>
          
          <p className="text-xl text-dark-foreground/80 mb-8 leading-relaxed">
            Join 500+ companies already using RecuitPro AI to hire better talent faster. 
            Start your transformation today with our risk-free trial.
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit}
                className="flex items-center gap-2 text-dark-foreground/90"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CheckCircle className="w-5 h-5 text-primary-glow" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 bounce-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-glow to-primary text-primary-foreground px-12 py-6 text-xl font-semibold rounded-xl shadow-glow hover:shadow-strong hover:scale-105 transition-all duration-300 group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary-glow text-primary-glow px-12 py-6 text-xl font-semibold rounded-xl hover:bg-primary-glow hover:text-primary-foreground transition-all duration-300"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 text-center slide-in-left">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-dark-foreground/70">Match Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
                60%
              </div>
              <div className="text-dark-foreground/70">Time Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-dark-foreground/70">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-primary opacity-15 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary-glow)_1px,_transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CTASection;