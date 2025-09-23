import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  metrics: {
    label: string;
    value: string;
  }[];
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Head of Talent Acquisition",
    company: "TechFlow Inc.",
    avatar: "SC",
    content: "RecuitPro AI has revolutionized our hiring process. We've reduced time-to-hire by 60% while significantly improving candidate quality. The AI matching is incredibly accurate.",
    rating: 5,
    metrics: [
      { label: "Time Saved", value: "60%" },
      { label: "Quality Improvement", value: "85%" }
    ]
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "VP of Human Resources",
    company: "Growth Dynamics",
    avatar: "MR",
    content: "The predictive analytics feature helped us identify top performers before our competitors. Our successful hire rate has increased dramatically since implementing RecuitPro AI.",
    rating: 5,
    metrics: [
      { label: "Success Rate", value: "92%" },
      { label: "ROI Increase", value: "150%" }
    ]
  },
  {
    id: "3",
    name: "Emily Johnson",
    role: "Recruitment Director",
    company: "InnovateHub",
    avatar: "EJ",
    content: "The platform's ability to eliminate bias while maintaining accuracy is outstanding. We've built more diverse teams and our employee retention has improved significantly.",
    rating: 5,
    metrics: [
      { label: "Diversity Increase", value: "40%" },
      { label: "Retention Improvement", value: "30%" }
    ]
  },
  {
    id: "4",
    name: "David Kim",
    role: "Chief People Officer",
    company: "ScaleUp Solutions",
    avatar: "DK",
    content: "RecuitPro AI scales with our rapid growth. The automation features handle high-volume recruiting while maintaining personalized candidate experiences.",
    rating: 5,
    metrics: [
      { label: "Volume Handled", value: "500%" },
      { label: "Efficiency Gain", value: "70%" }
    ]
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-br from-accent/10 via-background to-accent/20">
      <div className="container-max">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by
            <span className="gradient-text block">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how companies across industries are transforming their recruitment 
            with RecuitPro AI and achieving exceptional results.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="card-premium bg-gradient-card border-2 border-primary/10 p-8 md:p-12 slide-in-left">
            <div className="relative">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-accent/20 rounded-lg">
                {currentTestimonial.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {currentTestimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-muted-foreground">{currentTestimonial.role}</div>
                  <div className="text-primary font-medium">{currentTestimonial.company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="btn-outline-premium p-3 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="btn-outline-premium p-3 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {isAutoPlaying ? 'Pause' : 'Resume'} auto-play
            </button>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-16 text-center fade-in-up">
          <p className="text-muted-foreground mb-8">Trusted by 500+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['TechFlow', 'Growth Dynamics', 'InnovateHub', 'ScaleUp Solutions', 'NextGen Corp'].map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;