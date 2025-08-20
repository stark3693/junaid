import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-gold bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Information Cards */}
            <div className="animate-fade-in-up">
              <div className="flex flex-col items-center text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">Email</h3>
                <p className="text-foreground font-body font-medium">itstitlemediacreation@gmail.com</p>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="flex flex-col items-center text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">Phone</h3>
                <p className="text-foreground font-body font-medium">+91 8101708823</p>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="flex flex-col items-center text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30 h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">Location</h3>
                <p className="text-foreground font-body font-medium">Asansol, West Bengal, India</p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities and collaborate on compelling projects. 
                Whether it's a film role, commercial work, or creative collaboration, I'd love to hear from you.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display text-xl font-semibold text-primary mb-4">
                    Available For
                  </h4>
                  <ul className="space-y-3 text-left">
                    {[
                      "Film & Short Film Projects",
                      "Commercial & Brand Campaigns", 
                      "Modeling Assignments",
                      "Theater Performances",
                      "Voice-over Work"
                    ].map((service, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-gold rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground font-body">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-display text-xl font-semibold text-primary mb-4">
                    Experience Stats
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-body">Acting Experience</span>
                      <span className="text-primary font-body font-semibold">7+ Years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-body">Projects Completed</span>
                      <span className="text-primary font-body font-semibold">4+ Films</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-body">Specialization</span>
                      <span className="text-primary font-body font-semibold">Character Study</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;