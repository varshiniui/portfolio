"use client";

import { motion } from "framer-motion";
import { Code2, Globe, BarChart3, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["JavaScript", "Python", "Java (Basics)", "SQL"],
    // coral tint
    iconBg: "oklch(0.88 0.12 160 / 0.15)",
    iconColor: "oklch(0.45 0.13 160)",
    cardAccent: "linear-gradient(135deg, oklch(0.88 0.12 160 / 0.10), transparent)",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["React.js", "Next.js 14", "Node.js", "Express.js", "HTML", "CSS", "REST APIs", "Framer Motion"],
    // blush lavender tint
    iconBg: "oklch(0.88 0.09 180 / 0.18)",
    iconColor: "oklch(0.42 0.11 180)",
    cardAccent: "linear-gradient(135deg, oklch(0.88 0.09 180 / 0.10), transparent)",
  },
  {
    title: "AI & APIs",
    icon: Sparkles,
    skills: ["Groq Whisper Large v3", "LLaMA 3.3 70B", "Gemini 2.0 Flash", "AssemblyAI", "Multi-model Fallback Pipeline"],
    // coral-to-lavender tint (featured)
    iconBg: "var(--gradient-1)",
    iconColor: "white",
    cardAccent: "linear-gradient(135deg, oklch(0.88 0.12 160 / 0.10), oklch(0.90 0.08 320 / 0.08))",
    featured: true,
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: ["Power BI", "Pandas", "Matplotlib", "PostgreSQL"],
    // butter yellow tint
    iconBg: "oklch(0.92 0.10 130 / 0.25)",
    iconColor: "oklch(0.40 0.12 140)",
    cardAccent: "linear-gradient(135deg, oklch(0.92 0.10 130 / 0.12), transparent)",
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Railway", "Netlify", "Render", "Figma", "Canva"],
    // peach tint
    iconBg: "oklch(0.90 0.08 150 / 0.20)",
    iconColor: "oklch(0.44 0.12 150)",
    cardAccent: "linear-gradient(135deg, oklch(0.90 0.08 150 / 0.10), transparent)",
  },
];

// Skill pill hover colors per category
const pillHoverAccent = [
  "oklch(0.68 0.13 160 / 0.12)",   // coral — Programming
  "oklch(0.88 0.09 180 / 0.14)",  // teal — Web Dev
  "oklch(0.88 0.12 160 / 0.10)",   // coral-lavender blend — AI & APIs
  "oklch(0.92 0.10 130 / 0.18)",   // yellow — Data
  "oklch(0.90 0.08 150 / 0.16)",   // sage — Tools
];

export function Skills() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="skills">
      {/* Sunset Sorbet background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "var(--gradient-1)", opacity: 0.28 }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--gradient-3)", opacity: 0.22 }}
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-56 h-56 rounded-full blur-2xl"
          style={{ background: "var(--gradient-2)", opacity: 0.18 }}
          animate={{ x: [0, 12, 0], y: [0, -12, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
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
          {/* Badge: peach tint */}
          <span
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full border"
            style={{
              color: "oklch(0.44 0.12 150)",
              background: "oklch(0.90 0.08 150 / 0.18)",
              borderColor: "oklch(0.90 0.08 150 / 0.40)",
            }}
          >
            My Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const isFeatured = !!(category as { featured?: boolean }).featured;
            return (
              <motion.div
                key={category.title}
                className={`glass-card p-6 lg:p-8 rounded-2xl card-3d group relative overflow-hidden ${
                  isFeatured ? "md:col-span-2" : ""
                }`}
                style={{ background: category.cardAccent }}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.38,
                  delay: categoryIndex * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -6 }}
              >
                {/* Featured shimmer border */}
                {isFeatured && (
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-bl-full pointer-events-none"
                    style={{ background: "linear-gradient(225deg, oklch(0.88 0.12 160 / 0.18), transparent)" }}
                  />
                )}

                <div className={`flex items-center gap-4 mb-6 ${isFeatured ? "flex-wrap" : ""}`}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0"
                    style={
                      isFeatured
                        ? { background: "var(--gradient-1)", color: "white" }
                        : { background: category.iconBg, color: category.iconColor }
                    }
                  >
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    {isFeatured && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Latest project — AI Voice Note Summarizer v2 · Transcribes &amp; summarises a 1-min note in under 10 s
                      </p>
                    )}
                  </div>
                  {isFeatured && (
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full border shrink-0"
                      style={{
                        color: "oklch(0.45 0.13 160)",
                        background: "oklch(0.88 0.12 160 / 0.15)",
                        borderColor: "oklch(0.88 0.12 160 / 0.35)",
                      }}
                    >
                      New
                    </span>
                  )}
                </div>

                <div className={`flex flex-wrap gap-2 ${isFeatured ? "md:columns-2" : ""}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium rounded-full border border-border/50 transition-all duration-300 cursor-default"
                      style={{ background: "oklch(0.99 0.005 280 / 0.6)" }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.15,
                        delay: categoryIndex * 0.05 + skillIndex * 0.02,
                      }}
                      whileHover={{
                        y: -2,
                        scale: 1.05,
                        background: pillHoverAccent[categoryIndex],
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}