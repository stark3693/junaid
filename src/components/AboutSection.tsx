import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const personalDetails = [
    { label: "Age", value: "27 years" },
    { label: "Birthplace", value: "Asansol, West Bengal" },
    { label: "Height", value: "5'9\"" },
    { label: "Weight", value: "60 kg" },
    { label: "Complexion", value: "Fair" },
    { label: "Body Type", value: "Fit" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-gold bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold rounded-full mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-semibold text-primary">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body text-lg">
                I am a versatile actor with 7–8 years of experience in the acting field. 
                I believe in hard work and I am passionate about my craft. I have taken on 
                different roles in various performances and always study every character 
                thoroughly before playing it.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body text-lg">
                My approach to acting involves deep character analysis and dedication to 
                bringing authentic performances to life. Every role is an opportunity to 
                explore new dimensions of storytelling and connect with audiences.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="font-display text-xl font-semibold text-primary mb-4">
                Core Strengths
              </h4>
              <ul className="space-y-3">
                {[
                  "Ability to adapt into different roles",
                  "Deep character study before performances", 
                  "Strong stage and screen presence",
                  "Experience in acting and modeling projects"
                ].map((strength, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full flex-shrink-0" />
                    <span className="text-muted-foreground font-body">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Personal Details */}
          <div className="animate-fade-in-right">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-sm text-muted-foreground font-body">
                      {detail.label}
                    </p>
                    <p className="text-foreground font-body font-medium">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary font-display">7+</p>
                    <p className="text-sm text-muted-foreground font-body">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary font-display">4+</p>
                    <p className="text-sm text-muted-foreground font-body">Projects Completed</p>
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

export default AboutSection;