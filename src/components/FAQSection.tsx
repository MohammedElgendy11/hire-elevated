import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "getting-started",
    question: "How quickly can we get started with RecuitPro AI?",
    answer: "You can be up and running within 24 hours. Our onboarding team will help you configure your account, import existing job requirements, and train the AI on your specific hiring criteria. Most clients see their first AI-matched candidates within the first week."
  },
  {
    id: "integration",
    question: "Does RecuitPro AI integrate with our existing HR systems?",
    answer: "Yes, we offer seamless integrations with 50+ popular HR tools including Workday, BambooHR, Greenhouse, Lever, and many more. Our API-first architecture ensures smooth data flow and we provide dedicated support for custom integrations."
  },
  {
    id: "accuracy",
    question: "How accurate is the AI matching technology?",
    answer: "Our AI matching engine achieves 95% accuracy in candidate-job fit predictions. The system continuously learns from your hiring decisions and improves over time. We use advanced machine learning algorithms trained on millions of successful placements across various industries."
  },
  {
    id: "data-security",
    question: "How secure is our candidate and company data?",
    answer: "Security is our top priority. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption for all data. Your data is stored in secure, geographically distributed data centers with 24/7 monitoring and regular security audits."
  },
  {
    id: "pricing",
    question: "What are the pricing options and is there a free trial?",
    answer: "We offer flexible pricing based on your hiring volume and feature requirements. Plans start at $199/month for small teams, with enterprise solutions available. Yes, we provide a 14-day free trial with full access to all features and dedicated support."
  },
  {
    id: "candidate-experience",
    question: "How does this improve the candidate experience?",
    answer: "Candidates benefit from faster response times, more relevant job matches, and transparent communication throughout the process. Our platform reduces application-to-interview time by 60% and provides candidates with real-time status updates and feedback."
  },
  {
    id: "bias-reduction",
    question: "How does RecuitPro AI help reduce hiring bias?",
    answer: "Our AI is specifically designed to minimize unconscious bias by focusing on skills, experience, and job-relevant criteria rather than demographic factors. We regularly audit our algorithms for fairness and provide bias detection reports to help you build more diverse teams."
  },
  {
    id: "support",
    question: "What kind of support and training do you provide?",
    answer: "We provide comprehensive onboarding, live training sessions, detailed documentation, and 24/7 customer support. Each client gets a dedicated success manager, and we offer regular webinars and best practice sessions to maximize your platform usage."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-max">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked
            <span className="gradient-text block">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Learn more about how RecuitPro AI 
            can transform your recruitment process and address common concerns.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 slide-in-left">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="card-premium border-2 border-transparent hover:border-primary/20 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary px-6 py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Support CTA */}
          <div className="text-center mt-12 fade-in-up">
            <div className="card-premium bg-accent/20 border-primary/20">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help you understand how RecuitPro AI can work for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero">
                  Schedule a Demo
                </button>
                <button className="btn-outline-premium">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;