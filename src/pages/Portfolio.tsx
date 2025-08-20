import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import portfolio images
import portfolio1 from "@/assets/1.jpeg";
import portfolio2 from "@/assets/2.jpeg";
import portfolio3 from "@/assets/3.jpeg";
import portfolio4 from "@/assets/4.jpeg";
import portfolio5 from "@/assets/5.jpeg";
import portfolio6 from "@/assets/6.jpeg";
import portfolio7 from "@/assets/7.jpeg";
import portfolio8 from "@/assets/8.jpeg";
import portfolio9 from "@/assets/9.jpeg";
import portfolio10 from "@/assets/10.jpeg";
import portfolio11 from "@/assets/11.jpeg";
import portfolio12 from "@/assets/12.jpeg";
import portfolio13 from "@/assets/13.jpeg";
import portfolio14 from "@/assets/14.jpeg";
import portfolio15 from "@/assets/15.jpeg";
import portfolio16 from "@/assets/16.jpeg";
import portfolio17 from "@/assets/17.jpeg";
import portfolio18 from "@/assets/18.jpeg";
import portfolio19 from "@/assets/19.jpeg";
import portfolio20 from "@/assets/20.jpeg";


const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Create array of portfolio images (using existing images multiple times to reach 30)
  const portfolioImages = [
    { src: portfolio1, alt: "Professional Headshot 1", category: "Headshots" },
    { src: portfolio2, alt: "Casual Lifestyle 1", category: "Lifestyle" },
    { src: portfolio3, alt: "Formal Studio 1", category: "Fashion" },
    { src: portfolio4, alt: "Outdoor Portrait 1", category: "Outdoor" },
    { src: portfolio5, alt: "Character Study 1", category: "Character" },
    { src: portfolio6, alt: "Traditional Wear 1", category: "Cultural" },
    { src: portfolio7, alt: "Behind the Scenes 1", category: "BTS" },
    { src: portfolio8, alt: "Fitness Shoot 1", category: "Fitness" },
    { src: portfolio9, alt: "Street Style 1", category: "Street" },
    { src: portfolio10, alt: "Dramatic Close-up 1", category: "Drama" },
    // Repeat with variations
    { src: portfolio1, alt: "Professional Headshot 2", category: "Headshots" },
    { src: portfolio2, alt: "Casual Lifestyle 2", category: "Lifestyle" },
    { src: portfolio3, alt: "Formal Studio 2", category: "Fashion" },
    { src: portfolio4, alt: "Outdoor Portrait 2", category: "Outdoor" },
    { src: portfolio5, alt: "Character Study 2", category: "Character" },
    { src: portfolio6, alt: "Traditional Wear 2", category: "Cultural" },
    { src: portfolio7, alt: "Behind the Scenes 2", category: "BTS" },
    { src: portfolio8, alt: "Fitness Shoot 2", category: "Fitness" },
    { src: portfolio9, alt: "Street Style 2", category: "Street" },
    { src: portfolio10, alt: "Dramatic Close-up 2", category: "Drama" },
    { src: portfolio1, alt: "Professional Headshot 3", category: "Headshots" },
    { src: portfolio2, alt: "Casual Lifestyle 3", category: "Lifestyle" },
    { src: portfolio3, alt: "Formal Studio 3", category: "Fashion" },
    { src: portfolio4, alt: "Outdoor Portrait 3", category: "Outdoor" },
    { src: portfolio5, alt: "Character Study 3", category: "Character" },
    { src: portfolio6, alt: "Traditional Wear 3", category: "Cultural" },
    { src: portfolio7, alt: "Behind the Scenes 3", category: "BTS" },
    { src: portfolio8, alt: "Fitness Shoot 3", category: "Fitness" },
    { src: portfolio9, alt: "Street Style 3", category: "Street" },
    { src: portfolio10, alt: "Dramatic Close-up 3", category: "Drama" },
    { src: portfolio11, alt: "Dramatic Close-up 3", category: "Drama" },
    { src: portfolio12, alt: "Dramatic Close-up 3", category: "Drama" },
    { src: portfolio13, alt: "Dramatic Close-up 3", category: "Drama" },
    { src: portfolio14, alt: "Dramatic Close-up 3", category: "Drama" },
    { src: portfolio15, alt: "Dramatic Close-up 3", category: "Drama" },
    { src: portfolio16, alt: "Dramatic Close-up 3", category: "Drama" },
    { src: portfolio17, alt: "Dramatic Close-up 3", category: "Drama" },
    { src: portfolio18, alt: "Dramatic Close-up 3", category: "Drama" },
    { src: portfolio19, alt: "Dramatic Close-up 3", category: "Drama" },
    { src: portfolio20, alt: "Dramatic Close-up 3", category: "Drama" },


  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 bg-gradient-subtle border-b border-border/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <ChevronLeft className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
              <span className="font-body text-primary group-hover:text-accent transition-colors duration-300">
                Back to Home
              </span>
            </Link>
            <h1 className="font-display text-2xl lg:text-3xl font-bold">
              <span className="text-foreground">Portfolio</span>{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">Gallery</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="bg-gradient-gold bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-gold rounded-full mx-auto mb-8" />
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              A curated collection of professional headshots, character studies, and behind-the-scenes moments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-card/20 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-body rounded-md">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card"
              onClick={closeLightbox}
            >
              <X className="w-4 h-4" />
            </Button>

            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card"
              onClick={prevImage}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card"
              onClick={nextImage}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Image */}
            <img
              src={portfolioImages[selectedImage].src}
              alt={portfolioImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-cinematic"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="inline-flex items-center space-x-4 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
                <span className="text-foreground font-body font-medium">
                  {portfolioImages[selectedImage].alt}
                </span>
                <div className="w-px h-4 bg-border" />
                <span className="text-primary font-body text-sm">
                  {selectedImage + 1} of {portfolioImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;