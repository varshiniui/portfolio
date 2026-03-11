"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Mic,
  MessageSquare,
  Book,
  BarChart3,
  X,
  Play,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ZoomIn,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  icon: React.ElementType;
  cardGrad: string;
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  screenshots: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "AI Voice Note Summarizer",
    description:
      "A web application that records voice notes, converts speech to text, and generates AI-powered summaries.",
    fullDescription:
      "A cutting-edge web application that leverages speech recognition and AI to transform voice notes into actionable insights. Record your thoughts, meetings, or ideas, and let the AI extract key points, action items, and summaries automatically.",
    techStack: ["Speech-to-text API", "AI Summarization", "JavaScript", "Web APIs", "HTML5", "CSS3"],
    icon: Mic,
    // coral
    cardGrad: "linear-gradient(135deg, oklch(0.88 0.12 160 / 0.10), transparent)",
    githubUrl: "https://github.com/varshiniui/voca",
    demoUrl: "http://voca-amber.vercel.app",
    featured: true,
    screenshots: [
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=500&fit=crop",
    ],
    highlights: [
      "Real-time speech-to-text conversion",
      "AI-powered summary generation",
      "Key points extraction",
      "Action items identification",
    ],
  },
  {
    title: "StudyMate AI – AI Chat Application",
    description:
      "A responsive AI chat application featuring user authentication and chat history persistence.",
    fullDescription:
      "An intelligent study companion powered by AI that helps students learn more effectively. Features user authentication, persistent chat history, and a responsive interface that works across all devices.",
    techStack: ["React.js", "REST APIs", "Netlify", "Render", "CSS3", "Node.js"],
    icon: MessageSquare,
    // blush lavender
    cardGrad: "linear-gradient(135deg, oklch(0.88 0.09 180 / 0.10), transparent)",
    githubUrl: "https://github.com/varshiniui/studymate-ai",
    demoUrl: "https://studymateeeai.netlify.app/",
    featured: true,
    screenshots: [
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1675557009875-436f7a5cc979?w=800&h=500&fit=crop",
    ],
    highlights: [
      "User authentication system",
      "Persistent chat history",
      "Responsive design",
      "AI-powered responses",
    ],
  },
  {
    title: "MyRecipeBook – Full Stack CRUD App",
    description:
      "A secure CRUD web application for recipe management with session-based authentication.",
    fullDescription:
      "A comprehensive recipe management platform for creating, reading, updating, and deleting recipes. Features robust session-based authentication with a clean Bootstrap-powered interface.",
    techStack: ["PHP", "MySQL", "Bootstrap", "HTML5", "CSS3", "JavaScript"],
    icon: Book,
    // butter yellow
    cardGrad: "linear-gradient(135deg, oklch(0.92 0.10 130 / 0.12), transparent)",
    githubUrl: "https://github.com/varshiniui/RecipeSharing-App",
    demoUrl: "#",
    featured: false,
    screenshots: [
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    ],
    highlights: [
      "Full CRUD operations",
      "Session-based authentication",
      "Recipe categorization",
      "User data protection",
    ],
  },
  {
    title: "Weather App",
    description:
      "A responsive React.js weather application that fetches real-time data for any city.",
    fullDescription:
      "A sleek weather application built with React.js that integrates the OpenWeatherMap API to display real-time weather information. Search any city for temperature, humidity, wind speed, sunrise and sunset details.",
    techStack: ["React.js", "JavaScript", "CSS", "OpenWeatherMap API"],
    icon: BarChart3,
    // peach
    cardGrad: "linear-gradient(135deg, oklch(0.90 0.08 150 / 0.12), transparent)",
    githubUrl: "https://github.com/varshiniui/weather-app",
    demoUrl: "https://weathercast-react.netlify.app/",
    featured: false,
    screenshots: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800&h=500&fit=crop",
    ],
    highlights: [
      "Real-time weather data using API",
      "City search functionality",
      "Temperature, humidity and wind speed display",
      "Sunrise and sunset information",
      "Responsive UI",
    ],
  },
];

// Per-project sorbet accent colors for icons/badges
const projectAccents = [
  { bg: "oklch(0.88 0.12 160 / 0.15)", color: "oklch(0.45 0.13 160)" },     // coral
  { bg: "oklch(0.88 0.09 180 / 0.18)", color: "oklch(0.42 0.11 180)" },    // lavender
  { bg: "oklch(0.92 0.10 130 / 0.22)", color: "oklch(0.40 0.12 140)" },      // yellow
  { bg: "oklch(0.90 0.08 150 / 0.20)", color: "oklch(0.44 0.12 150)" },      // peach
];

function TechPill({ tech, accentBg, accentColor }: { tech: string; accentBg: string; accentColor: string }) {
  return (
    <span
      className="px-3 py-1.5 text-xs font-medium rounded-full border"
      style={{
        background: accentBg,
        color: accentColor,
        borderColor: accentColor.replace(")", " / 0.30)").replace("oklch(", "oklch("),
      }}
    >
      {tech}
    </span>
  );
}

function ProjectPreviewModal({
  project,
  projectIndex,
  isOpen,
  onClose,
}: {
  project: Project | null;
  projectIndex: number;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!project) return null;

  const accent = projectAccents[projectIndex] ?? projectAccents[0];

  const nextScreenshot = () => {
    setSlideDirection("right");
    setActiveScreenshot((prev) => (prev + 1) % project.screenshots.length);
  };
  const prevScreenshot = () => {
    setSlideDirection("left");
    setActiveScreenshot((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };
  const goToScreenshot = (index: number) => {
    setSlideDirection(index > activeScreenshot ? "right" : "left");
    setActiveScreenshot(index);
  };

  const slideVariants = {
    enter: (direction: "left" | "right") => ({ x: direction === "right" ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: "left" | "right") => ({ x: direction === "right" ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <AnimatePresence>
            {isFullscreen && (
              <motion.div
                className="fixed inset-0 z-[60] bg-foreground/90 backdrop-blur-md flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFullscreen(false)}
              >
                <motion.img
                  src={project.screenshots[activeScreenshot]}
                  alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                  className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", damping: 20, stiffness: 380 }}
                />
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/30 transition-colors"
                >
                  <X className="w-6 h-6 text-background" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-4xl max-h-full overflow-hidden rounded-3xl glass-card pointer-events-auto"
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 380 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-6 border-b border-border/50">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: accent.bg, color: accent.color }}
                  >
                    <project.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {project.techStack.slice(0, 3).join(" • ")}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto max-h-[calc(100vh-16rem)]">
                {/* Screenshot Carousel */}
                <div className="p-6 border-b border-border/50">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted/30 group">
                    <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                      <motion.img
                        key={activeScreenshot}
                        src={project.screenshots[activeScreenshot]}
                        alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                        className="w-full h-full object-cover cursor-zoom-in"
                        custom={slideDirection}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                        onClick={() => setIsFullscreen(true)}
                        draggable={false}
                      />
                    </AnimatePresence>

                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() => setIsFullscreen(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ZoomIn className="w-4 h-4 text-foreground" />
                      <span className="text-xs font-medium text-foreground">Expand</span>
                    </motion.div>

                    {project.screenshots.length > 1 && (
                      <>
                        <motion.button
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                          onClick={prevScreenshot}
                          whileHover={{ scale: 1.1, x: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ChevronLeft className="w-6 h-6 text-foreground" />
                        </motion.button>
                        <motion.button
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                          onClick={nextScreenshot}
                          whileHover={{ scale: 1.1, x: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ChevronRight className="w-6 h-6 text-foreground" />
                        </motion.button>
                      </>
                    )}

                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm">
                      <span className="text-xs font-medium text-foreground">
                        {activeScreenshot + 1} / {project.screenshots.length}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm">
                      {project.screenshots.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => goToScreenshot(index)}
                          className="relative h-2 rounded-full transition-all duration-300"
                          style={{
                            width: index === activeScreenshot ? 32 : 8,
                            background: index === activeScreenshot ? accent.color : "oklch(0.6 0 0 / 0.3)",
                          }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">About This Project</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.fullDescription}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 shrink-0" style={{ color: accent.color }} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <TechPill key={tech} tech={tech} accentBg={accent.bg} accentColor={accent.color} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border/50 flex items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all"
                  style={{ borderColor: accent.color + "50", color: accent.color }}
                  onMouseEnter={e => (e.currentTarget.style.background = accent.bg)}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, oklch(0.52 0.18 162), oklch(0.44 0.16 172))", boxShadow: "0 4px 18px oklch(0.52 0.18 162 / 0.32), inset 0 1px 0 oklch(1 0 0 / 0.18)" }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function FeaturedProjectDemo({ project }: { project: Project }) {
  const [showDemo, setShowDemo] = useState(false);
  const accent = projectAccents[0]; // coral for featured

  return (
    <motion.div
      className="relative glass-card rounded-3xl overflow-hidden mb-12"
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated Sorbet gradient border */}
      <div className="absolute inset-0 rounded-3xl p-[1px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, oklch(0.52 0.18 162), oklch(0.44 0.16 172))", backgroundSize: "200% 100%", opacity: 0.7 }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative bg-background/95 m-[1px] rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left: Info */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5" style={{ color: accent.color }} />
              <span className="text-sm font-semibold" style={{ color: accent.color }}>
                Featured Project
              </span>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{project.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{project.fullDescription}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <TechPill key={tech} tech={tech} accentBg={accent.bg} accentColor={accent.color} />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, oklch(0.52 0.18 162), oklch(0.44 0.16 172))", boxShadow: "0 4px 18px oklch(0.52 0.18 162 / 0.32), inset 0 1px 0 oklch(1 0 0 / 0.18)" }}
                onClick={() => setShowDemo(true)}
              >
                <Play className="w-4 h-4" />
                Try Demo
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-all"
                style={{ borderColor: accent.color + "50", color: accent.color }}
                onMouseEnter={e => (e.currentTarget.style.background = accent.bg)}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>

          {/* Right: Preview */}
          <div
            className="relative aspect-square lg:aspect-auto flex items-center justify-center p-8"
            style={{ background: "linear-gradient(135deg, oklch(0.88 0.12 160 / 0.06), transparent, oklch(0.88 0.09 180 / 0.06))" }}
          >
            <AnimatePresence mode="wait">
              {showDemo ? (
                <motion.div
                  key="demo"
                  className="w-full h-full rounded-2xl overflow-hidden bg-background border border-border shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", damping: 20, stiffness: 380 }}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ background: "oklch(0.88 0.12 160 / 0.70)" }} />
                        <div className="w-3 h-3 rounded-full" style={{ background: "oklch(0.88 0.12 160 / 0.70)" }} />
                        <div className="w-3 h-3 rounded-full" style={{ background: "oklch(0.88 0.09 180 / 0.70)" }} />
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">voice-note-summarizer.app</span>
                      <button onClick={() => setShowDemo(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex-1 p-6 flex flex-col items-center justify-center gap-6">
                      <div className="relative w-24 h-24">
                        {[0, 1].map((i) => (
                          <motion.div
                            key={i}
                            className="absolute inset-0 rounded-full"
                            style={{ border: `2px solid oklch(0.55 0.14 160 / ${0.5 - i * 0.2})` }}
                            animate={{ scale: [1, 1.7 + i * 0.3, 1], opacity: [0.7, 0, 0.7] }}
                            transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, ease: "easeOut" }}
                          />
                        ))}
                        <motion.div
                          className="absolute inset-0 rounded-full flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, oklch(0.68 0.13 160), oklch(0.55 0.13 175))",
                            boxShadow: "0 4px 20px oklch(0.68 0.13 160 / 0.35)",
                          }}
                          animate={{ scale: [1, 1.06, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Mic className="w-10 h-10 text-white" />
                        </motion.div>
                      </div>

                      <div className="text-center">
                        <p className="text-foreground font-medium mb-2">Click to start recording</p>
                        <p className="text-sm text-muted-foreground">
                          Your voice will be converted to text and summarized by AI
                        </p>
                      </div>

                      <button
                        className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white"
                        style={{ background: "linear-gradient(135deg, oklch(0.52 0.18 162), oklch(0.44 0.16 172))" }}
                      >
                        <Mic className="w-4 h-4" />
                        Start Recording
                      </button>

                      <div className="w-full mt-4 p-4 rounded-xl bg-muted/30 border border-border">
                        <p className="text-xs text-muted-foreground mb-2">Sample Summary:</p>
                        <p className="text-sm text-foreground">
                          &ldquo;Key points: Project deadline is Friday. Need to review the API documentation. Schedule meeting with the team.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="preview"
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full"
                        style={{
                          border: `${2 - i * 0.5}px solid oklch(0.55 0.14 160 / ${0.55 - i * 0.15})`,
                          boxShadow: i === 0 ? "0 0 20px oklch(0.68 0.13 160 / 0.25)" : "none",
                        }}
                        animate={{ scale: [1, 1.6 + i * 0.25, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2.2, delay: i * 0.55, repeat: Infinity, ease: "easeOut" }}
                      />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, oklch(0.68 0.13 160), oklch(0.55 0.13 175))",
                          boxShadow: "0 8px 32px oklch(0.68 0.13 160 / 0.40), 0 0 0 4px oklch(0.88 0.12 160 / 0.30)",
                        }}
                        whileHover={{ scale: 1.07 }}
                        animate={{ boxShadow: [
                          "0 8px 32px oklch(0.68 0.13 160 / 0.35), 0 0 0 4px oklch(0.88 0.12 160 / 0.25)",
                          "0 8px 48px oklch(0.68 0.13 160 / 0.55), 0 0 0 8px oklch(0.88 0.12 160 / 0.15)",
                          "0 8px 32px oklch(0.68 0.13 160 / 0.35), 0 0 0 4px oklch(0.88 0.12 160 / 0.25)",
                        ]}}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Mic className="w-16 h-16 lg:w-20 lg:h-20 text-white drop-shadow-lg" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProject = projects.find((p) => p.title === "AI Voice Note Summarizer")!;
  const otherProjects = projects.filter((p) => p.title !== "AI Voice Note Summarizer");

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setSelectedProjectIndex(projects.indexOf(project));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--gradient-3)", opacity: 0.22 }}
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "var(--gradient-1)", opacity: 0.25 }}
          animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge: coral tint */}
          <span
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full border"
            style={{
              color: "oklch(0.45 0.13 160)",
              background: "oklch(0.88 0.12 160 / 0.15)",
              borderColor: "oklch(0.88 0.12 160 / 0.35)",
            }}
          >
            My Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            A selection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <FeaturedProjectDemo project={featuredProject} />

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {otherProjects.map((project, index) => {
            const realIndex = projects.indexOf(project);
            const accent = projectAccents[realIndex] ?? projectAccents[0];

            return (
              <motion.div
                key={project.title}
                className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer"
                style={{ background: project.cardGrad }}
                initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -10, scale: 1.025 }}
                onClick={() => openProjectModal(project)}
              >
                {/* Click hint */}
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium text-muted-foreground bg-muted/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to preview
                </span>

                <div className="relative p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: accent.bg, color: accent.color }}
                    >
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 pr-16">
                      <h3 className="text-xl font-bold text-foreground group-hover:transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <TechPill key={tech} tech={tech} accentBg={accent.bg} accentColor={accent.color} />
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1.5 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all"
                      style={{ borderColor: accent.color + "50", color: accent.color }}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={e => (e.currentTarget.style.background = accent.bg)}
                      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, oklch(0.52 0.18 162), oklch(0.44 0.16 172))", boxShadow: "0 4px 18px oklch(0.52 0.18 162 / 0.32), inset 0 1px 0 oklch(1 0 0 / 0.18)" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ProjectPreviewModal
        project={selectedProject}
        projectIndex={selectedProjectIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}