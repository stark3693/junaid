import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const projects = [
    {
      title: "Nikamma",
      type: "Short Film",
      description: "A compelling story of a lazy boy living in Bihar district, exploring themes of personal growth and social dynamics.",
      category: "Drama",
      year: "2023"
    },
    {
      title: "The Train Love",
      type: "Short Film", 
      description: "A true love story about a policeman on a train, showcasing romance and duty intertwined in an emotional narrative.",
      category: "Romance",
      year: "2023"
    },
    {
      title: "Devopnnar Luxury Collection",
      type: "Commercial Project",
      description: "Acting role for a luxury collection project in Kolkata through a prestigious modeling agency.",
      category: "Commercial",
      year: "2022"
    },
    {
      title: "Indian Luxury Collection",
      type: "Modeling & Acting",
      description: "Successfully completed modeling and acting roles in a high-end luxury brand campaign.",
      category: "Fashion",
      year: "2022"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Acting <span className="bg-gradient-gold bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold rounded-full mx-auto mb-8" />
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A showcase of my diverse acting portfolio across films, commercials, and modeling projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-primary font-body text-sm uppercase tracking-wider">
                      {project.type}
                    </p>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge 
                      variant="outline" 
                      className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {project.category}
                    </Badge>
                    <p className="text-muted-foreground font-body text-sm">
                      {project.year}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed font-body">
                  {project.description}
                </p>
                
                <div className="pt-4 border-t border-border/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full" />
                    <span className="text-sm text-primary font-body font-medium">
                      Featured Performance
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-4 p-6 bg-card/20 backdrop-blur-sm rounded-2xl border border-border/30">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary font-display">7+</p>
              <p className="text-sm text-muted-foreground font-body">Years</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary font-display">4+</p>
              <p className="text-sm text-muted-foreground font-body">Projects</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary font-display">100%</p>
              <p className="text-sm text-muted-foreground font-body">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;