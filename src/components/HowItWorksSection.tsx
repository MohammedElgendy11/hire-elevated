import { Upload, Search, CheckCircle } from "lucide-react";

interface Step {
  id: number;
  icon: any;
  title: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    id: 1,
    icon: Upload,
    title: "Upload & Configure",
    description: "Start by uploading job requirements and configuring your ideal candidate profile with our intuitive setup wizard.",
    details: [
      "Define role requirements",
      "Set skill priorities",
      "Configure screening criteria",
      "Customize evaluation metrics"
    ]
  },
  {
    id: 2,
    icon: Search,
    title: "AI Matching Engine",
    description: "Our advanced AI analyzes millions of candidate profiles to find the perfect matches based on your specific criteria.",
    details: [
      "Intelligent profile scanning",
      "Multi-dimensional matching",
      "Bias-free evaluation",
      "Real-time scoring"
    ]
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Review & Select",
    description: "Review AI-ranked candidates with detailed insights and make data-driven hiring decisions with confidence.",
    details: [
      "Ranked candidate list",
      "Detailed match analysis",
      "Interview recommendations",
      "Hiring probability scores"
    ]
  }
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-accent/10">
      <div className="container-max">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in minutes with our streamlined 3-step process. 
            Our AI does the heavy lifting while you focus on making the best hiring decisions.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={step.id}
                  className="text-center group"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="bounce-in">
                    {/* Step Number & Icon */}
                    <div className="relative mb-8">
                      <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-medium">
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <div className="card-premium bg-accent/30 border-0 mt-6">
                        <ul className="space-y-2 text-sm">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-8">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
          <div className="text-center mt-16 fade-in-up">
          <div className="card-premium inline-block">
            <h3 className="text-xl font-semibold mb-2">Ready to transform your hiring?</h3>
            <p className="text-muted-foreground mb-6">Start your free trial today and experience the power of AI recruitment.</p>
            <button className="btn-hero">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;