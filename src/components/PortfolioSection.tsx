import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Healthcare Management System",
      description: "A comprehensive healthcare management platform with patient records, appointment scheduling, and billing integration.",
      image: "/images/portfolio_web_app_1.png",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      category: "Web Application",
      features: ["Patient Management", "Appointment Scheduling", "Billing System", "Analytics Dashboard"]
    },
    {
      title: "E-commerce Mobile App",
      description: "Progressive web application for online retail with advanced product catalog and secure payment processing.",
      image: "/images/portfolio_mobile_app_1.png",
      technologies: ["React", "PWA", "Stripe", "Firebase"],
      category: "Mobile Application",
      features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Order Tracking"]
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization platform with advanced reporting and forecasting capabilities.",
      image: "/images/portfolio_web_app_2.jpeg",
      technologies: ["React", "D3.js", "Python", "MongoDB"],
      category: "Web Application",
      features: ["Real-time Data", "Interactive Charts", "Custom Reports", "Forecasting"]
    },
    {
      title: "Task Management Platform",
      description: "Collaborative project management tool with team coordination and progress tracking features.",
      image: "/images/portfolio_mobile_app_2.webp",
      technologies: ["React", "TypeScript", "Supabase", "Tailwind"],
      category: "Web Application",
      features: ["Team Collaboration", "Task Tracking", "File Sharing", "Time Management"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore some of our recent projects that showcase our expertise in delivering 
              high-quality software solutions across various industries.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-border">
                    <button className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Project
                    </button>
                    <button className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="h-4 w-4 mr-1" />
                      Source Code
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to See More?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              These are just a few examples of our work. We'd love to show you more projects 
              and discuss how we can help with your specific needs.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;