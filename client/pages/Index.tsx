import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Trophy,
  Star,
  Calendar,
  MessageSquare,
  Instagram,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const tutors = [
  {
    name: "Pearson Skibidy",
    subjects: ["AP Chemistry", "AP Biology"],
    score: "5, 5",
    description:
      "A bum with 0 years of experience",
    avatar: "PS",
  },
  {
    name: "Marcus Johnson",
    subjects: ["AP Calculus AB/BC", "AP Physics"],
    score: "5, 5",
    description: "MIT engineering student, math competition winner",
    avatar: "MJ",
  },
  {
    name: "Elena Rodriguez",
    subjects: ["AP English Lit", "AP World History"],
    score: "5, 5",
    description: "Harvard English major, published writer",
    avatar: "ER",
  },
  {
    name: "David Kim",
    subjects: ["AP Computer Science", "AP Statistics"],
    score: "5, 5",
    description: "Carnegie Mellon CS student, coding bootcamp instructor",
    avatar: "DK",
  },
];

const features = [
  {
    icon: Users,
    title: "Expert Tutors",
    description: "Learn from students who scored perfect 5s on their AP exams",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Study sessions available 7 days a week to fit your schedule",
  },
  {
    icon: BookOpen,
    title: "All Subjects",
    description: "Comprehensive support across 20+ AP subjects",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "95% of our students improve their practice test scores",
  },
];

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-primary">Pearson's AP</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("tutors")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tutors
            </button>
            <button
              onClick={() => scrollToSection("join")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Join
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("tutors")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Tutors
              </button>
              <button
                onClick={() => scrollToSection("join")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in-0 duration-1000">
            <Badge variant="secondary" className="mb-4">
              🎓 Free AP Tutoring Community
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pearson's AP
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
              Discord Server
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students getting free, expert AP exam
              preparation from top-scoring tutors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group"
                onClick={() =>
                  window.open("https://discord.gg/eYZuc6d3Sf", "_blank")
                }
              >
                <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Join Discord Server
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/seoul.pearson/?hl=en",
                    "_blank",
                  )
                }
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Our Community?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the support you need to excel in your AP exams with our proven
              methods and dedicated tutors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutors Section */}
      <section id="tutors" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Expert Tutors
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from students who have mastered their AP exams and are
              passionate about helping others succeed
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutors.map((tutor, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {tutor.avatar}
                </div>
                <h3 className="text-xl font-semibold mb-2">{tutor.name}</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {tutor.subjects.map((subject, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">
                    AP Scores: {tutor.score}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {tutor.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="join"
        className="py-20 bg-gradient-to-r from-primary to-accent text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Ace Your AP Exams?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our Discord community today and start your journey towards AP
            success. It's completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 group bg-white text-primary hover:bg-gray-100"
              onClick={() =>
                window.open("https://discord.gg/eYZuc6d3Sf", "_blank")
              }
            >
              <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Join Discord Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
                className="text-lg px-8 py-6 group bg-white text-primary hover:bg-gray-100"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/seoul.pearson/?hl=en",
                    "_blank",
                  )
                }
            >
  <Instagram className="mr-2 h-5 w-5 group-hover:animate-pulse" />
  Follow Updates
  <ExternalLink className="ml-2 h-4 w-4" />
</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Pearson's AP Discord Server
            </h3>
            <p className="text-muted-foreground">
              Empowering students to achieve AP excellence
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://discord.gg/eYZuc6d3Sf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageSquare className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/seoul.pearson/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Pearson's AP Discord Server. Made with ❤️ for students, by
            students.
          </p>
        </div>
      </footer>
    </div>
  );
}
