"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Globe, Brain, Trophy, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "Started B.Tech Journey",
    description:
      "Began studying B.Tech Information Technology at University College of Engineering Nagercoil, embarking on an exciting path in technology.",
    icon: GraduationCap,
    iconGrad: "var(--gradient-1)",
    yearColor: "oklch(0.45 0.13 160)",
    yearBg: "oklch(0.88 0.12 160 / 0.15)",
  },
  {
    year: "2024",
    title: "Learning Programming",
    description:
      "Mastered the fundamentals of JavaScript, Python, and web development technologies. Built my first applications and discovered my passion for coding.",
    icon: Code,
    iconGrad: "linear-gradient(135deg, oklch(0.88 0.09 180), oklch(0.88 0.12 160))",
    yearColor: "oklch(0.42 0.11 180)",
    yearBg: "oklch(0.88 0.09 180 / 0.18)",
  },
  {
    year: "2025",
    title: "AI & Data Analytics",
    description:
      "Explored artificial intelligence, machine learning, and data visualization with Power BI. Built AI-powered applications and dived deep into data-driven thinking.",
    icon: Brain,
    iconGrad: "var(--gradient-3)",
    yearColor: "oklch(0.44 0.12 150)",
    yearBg: "oklch(0.90 0.08 150 / 0.20)",
  },
  {
    year: "2025",
    title: "Full-Stack Development",
    description:
      "Built complete web applications using React.js, Next.js 14, Node.js, Express.js, and PostgreSQL. Developed real-world projects with authentication and CRUD operations.",
    icon: Globe,
    iconGrad: "var(--gradient-2)",
    yearColor: "oklch(0.40 0.12 140)",
    yearBg: "oklch(0.92 0.10 130 / 0.22)",
  },
  {
    year: "2025",
    title: "Technical Achievements",
    description:
      "Won 1st Prize at National Level Paper Presentation and 3rd Prize at College Symposium. Continuing to build, learn, and ship innovative solutions.",
    icon: Trophy,
    iconGrad: "var(--gradient-1)",
    yearColor: "oklch(0.45 0.13 160)",
    yearBg: "oklch(0.88 0.12 160 / 0.15)",
  },
  {
    year: "2026",
    title: "Building with AI APIs",
    description:
      "Built a production-ready AI Voice Note Summarizer with a multi-model fallback pipeline, 7-language support, waveform visualisation, and PDF export. Deployed on Vercel and Railway.",
    icon: Sparkles,
    iconGrad: "var(--gradient-1)",
    yearColor: "oklch(0.45 0.13 160)",
    yearBg: "oklch(0.88 0.12 160 / 0.15)",
  },
];

export function JourneyTimeline() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="journey">
      {/* Sunset Sorbet background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--gradient-2)", opacity: 0.22 }}
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--gradient-3)", opacity: 0.25 }}
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge: lavender tint */}
          <span
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full border"
            style={{
              color: "oklch(0.42 0.11 180)",
              background: "oklch(0.88 0.09 180 / 0.18)",
              borderColor: "oklch(0.90 0.08 320 / 0.40)",
            }}
          >
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="gradient-text">The Path I Have Traveled</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            A timeline of my growth as a developer and technology enthusiast
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line — sorbet gradient */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden md:block rounded-full"
            style={{ background: "var(--gradient-1)", opacity: 0.35 }}
          />
          <div
            className="absolute left-8 w-0.5 h-full md:hidden rounded-full"
            style={{ background: "var(--gradient-1)", opacity: 0.35 }}
          />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={`${milestone.year}-${milestone.title}`}
                  className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 50, x: isEven ? -30 : 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Content card */}
                  <div
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      className="glass-card p-6 rounded-2xl card-3d"
                      whileHover={{ y: -4 }}
                    >
                      <span
                        className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3"
                        style={{ color: milestone.yearColor, background: milestone.yearBg }}
                      >
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Icon node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: milestone.iconGrad }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <milestone.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>

                  {/* Empty column for alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}