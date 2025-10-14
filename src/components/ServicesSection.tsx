import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Palette, 
  Shield, 
  MessageSquare,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements and workflows.",
      features: ["Enterprise Applications", "API Development", "Database Design", "System Integration"]
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Modern, responsive web applications using cutting-edge technologies for optimal performance and user experience.",
      features: ["React & TypeScript", "Progressive Web Apps", "E-commerce Platforms", "Content Management Systems"]
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development (PWA)",
      description: "Cross-platform mobile solutions that work seamlessly across all devices with native-like performance.",
      features: ["Progressive Web Apps", "Cross-Platform Development", "Mobile-First Design", "Offline Functionality"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive interfaces that enhance user engagement and satisfaction.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"]
    },
    {
      icon: Shield,
      title: "Quality Assurance & Testing",
      description: "Comprehensive testing strategies ensuring your software is reliable, secure, and performs flawlessly.",
      features: ["Automated Testing", "Performance Testing", "Security Audits", "Code Reviews"]
    },
    {
      icon: MessageSquare,
      title: "Consulting Services",
      description: "Strategic technology consulting to help you make informed decisions about your digital transformation journey.",
      features: ["Technology Strategy", "Architecture Planning", "Digital Transformation", "Technical Audits"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive software development services to help your business 
              thrive in the digital landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help bring your ideas to life with our expert development services.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;