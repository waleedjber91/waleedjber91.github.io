import { Users, Target, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Integro Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate software engineers and designers dedicated to creating 
              exceptional digital experiences that drive business success.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Building the Future of Software
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a vision to bridge the gap between innovative ideas and practical 
                software solutions, Integro Systems has been at the forefront of digital transformation 
                for businesses across various industries.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team combines deep technical expertise with a thorough understanding of business 
                processes to deliver solutions that not only meet current needs but also scale for 
                future growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-semibold">Agile Development</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-semibold">Quality Assurance</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-semibold">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img 
                src="/images/hero_background_2.jpeg" 
                alt="Our team at work" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">100+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>

            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">99%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;