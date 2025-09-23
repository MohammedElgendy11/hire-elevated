import { useState } from "react";
import { Sparkles, Brain, Target, BarChart3, Users, Zap } from "lucide-react";

interface FeatureCard {
  id: string;
  icon: any;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
}

const features: FeatureCard[] = [
  {
    id: "ai-matching",
    icon: Sparkles,
    title: "AI-Powered Matching",
    shortDescription: "Intelligent candidate matching using advanced algorithms",
    fullDescription: "Our proprietary AI engine analyzes thousands of data points to match candidates with job requirements, ensuring perfect fit every time.",
    benefits: ["95% accuracy rate", "Reduces screening time by 70%", "Eliminates unconscious bias", "Continuous learning improvement"]
  },
  {
    id: "smart-screening",
    icon: Brain,
    title: "Smart Screening",
    shortDescription: "Automated resume parsing and candidate evaluation",
    fullDescription: "Advanced NLP technology extracts key information from resumes and evaluates candidates against your specific criteria automatically.",
    benefits: ["Instant resume analysis", "Custom scoring models", "Multi-language support", "Integration with ATS systems"]
  },
  {
    id: "predictive-analytics",
    icon: Target,
    title: "Predictive Analytics",
    shortDescription: "Data-driven insights for better hiring decisions",
    fullDescription: "Leverage historical hiring data and market trends to predict candidate success and optimize your recruitment strategy.",
    benefits: ["Success prediction models", "Market salary insights", "Hiring timeline optimization", "ROI tracking"]
  },
  {
    id: "real-time-dashboard",
    icon: BarChart3,
    title: "Real-time Dashboard",
    shortDescription: "Comprehensive recruitment analytics and reporting",
    fullDescription: "Monitor your entire recruitment pipeline with detailed analytics, performance metrics, and customizable reports.",
    benefits: ["Live pipeline tracking", "Custom report builder", "Team performance metrics", "Export capabilities"]
  },
  {
    id: "candidate-experience",
    icon: Users,
    title: "Enhanced Experience",
    shortDescription: "Streamlined application process for candidates",
    fullDescription: "Create a seamless, engaging experience for candidates with personalized communication and transparent process updates.",
    benefits: ["Mobile-optimized applications", "Automated communications", "Progress tracking", "Feedback collection"]
  },
  {
    id: "integration-hub",
    icon: Zap,
    title: "Integration Hub",
    shortDescription: "Connect with your existing HR tech stack",
    fullDescription: "Seamlessly integrate with popular HRIS, ATS, and communication tools to create a unified recruitment ecosystem.",
    benefits: ["50+ integrations", "API-first architecture", "Single sign-on", "Data synchronization"]
  }
];

const FeaturesSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="gradient-text block">Modern Recruitment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI-powered platform transforms every aspect of your hiring process, 
            from candidate sourcing to final selection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isExpanded = expandedCard === feature.id;
            
            return (
              <div
                key={feature.id}
                className={`card-premium cursor-pointer transition-all duration-500 ${
                  isExpanded ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                onClick={() => toggleCard(feature.id)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    
                    <p className="text-muted-foreground">
                      {isExpanded ? feature.fullDescription : feature.shortDescription}
                    </p>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="space-y-4 animate-fade-in-up">
                        <div className="border-t border-border pt-4">
                          <h4 className="font-semibold mb-2">Key Benefits:</h4>
                          <ul className="space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Toggle Indicator */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-primary font-medium">
                        {isExpanded ? 'Show Less' : 'Learn More'}
                      </span>
                      <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;