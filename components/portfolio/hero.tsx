"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const ROLES = [
  "AI Engineer",
  "Generative AI Developer",
  "RAG Systems Builder",
  "Full-Stack Developer",
  "Open to Internships",
];

const CURRENTLY = [
  "Building TechDoc-AI a RAG pipeline answering questions across real PDFs",
  "AI Intern at Softrate — shipping Ledger and SkillWave",
  "Improved retrieval accuracy (MRR 0.778 → 0.823) by fine-tuning an embedding model",
  "1st Prize, National-Level Paper Presentation — SACOESIUM 2025",
];

function useTypewriter(words: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 100);
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [display, phase, wordIdx, words, speed, pause]);

  return display;
}

function CurrentlyTicker({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 3400);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div
      className="mt-8 mx-auto flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border max-w-xl"
      style={{ borderColor: "oklch(0.88 0.12 160 / 0.20)" }}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full"
          style={{ background: "oklch(0.52 0.18 162)" }}
          animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.8, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span
          className="relative inline-flex rounded-full h-2.5 w-2.5"
          style={{ background: "oklch(0.52 0.18 162)" }}
        />
      </span>

      <span
        className="text-xs font-bold tracking-wide uppercase shrink-0"
        style={{ color: "oklch(0.42 0.17 162)" }}
      >
        Currently
      </span>

      <div className="relative flex-1 h-5 overflow-hidden text-left">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="absolute inset-0 text-sm text-muted-foreground truncate"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {items[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const role = useTypewriter(ROLES);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { href: "https://github.com/varshiniui", Icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/varshini-shya", Icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:varshiniishya@gmail.com", Icon: Mail, label: "Email" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--gradient-1)", opacity: 0.40 }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--gradient-2)", opacity: 0.30 }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "var(--gradient-3)", opacity: 0.22 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ background: "var(--gradient-1)", opacity: 0.18 }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        style={{ y, opacity, scale }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold rounded-full border"
            style={{
              color: "oklch(0.45 0.13 160)",
              background: "oklch(0.88 0.12 160 / 0.15)",
              borderColor: "oklch(0.88 0.12 160 / 0.35)",
            }}
          >
            B.Tech Information Technology
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {"Hi, I'm "}
          <span className="gradient-text">Sahaya Varshini M J</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="mt-5 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="px-5 py-2 rounded-xl border text-lg md:text-xl font-semibold font-mono tracking-tight"
            style={{
              color: "oklch(0.42 0.17 162)",
              background: "oklch(0.88 0.12 160 / 0.10)",
              borderColor: "oklch(0.88 0.12 160 / 0.25)",
              minWidth: "280px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {role}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-0.5 inline-block w-0.5 h-5 align-middle rounded-full"
              style={{ background: "oklch(0.52 0.18 162)" }}
            />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mt-5 text-base text-muted-foreground/80 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          Transforming ideas into elegant digital experiences
        </motion.p>

        {/* Currently ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <CurrentlyTicker items={CURRENTLY} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            className="relative flex items-center gap-2.5 px-9 py-4 rounded-2xl text-base font-bold text-white overflow-hidden"
            style={{
              background: "linear-gradient(135deg, oklch(0.52 0.18 162), oklch(0.44 0.16 172))",
              boxShadow: "0 6px 24px oklch(0.52 0.18 162 / 0.35), inset 0 1px 0 oklch(1 0 0 / 0.20)",
            }}
            onClick={scrollToProjects}
            whileHover={{ scale: 1.04, boxShadow: "0 10px 32px oklch(0.52 0.18 162 / 0.45), inset 0 1px 0 oklch(1 0 0 / 0.20)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Explore My Work
              <ArrowDown className="w-4 h-4" />
            </span>
          </motion.button>

          <motion.button
            className="flex items-center gap-2.5 px-9 py-4 rounded-2xl text-base font-bold border-2"
            style={{
              borderColor: "oklch(0.52 0.18 162 / 0.45)",
              color: "oklch(0.42 0.17 162)",
              background: "oklch(0.88 0.12 160 / 0.08)",
            }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{
              scale: 1.04,
              background: "oklch(0.88 0.12 160 / 0.18)",
              borderColor: "oklch(0.52 0.18 162 / 0.70)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.40, ease: [0.22, 1, 0.36, 1] }}
        >
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card border border-transparent transition-all duration-300 group"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "oklch(0.88 0.12 160 / 0.35)";
                e.currentTarget.style.background = "oklch(0.88 0.12 160 / 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.background = "";
              }}
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.48 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 flex justify-center pt-2"
          style={{ borderColor: "oklch(0.88 0.12 160 / 0.35)" }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-1.5 h-3 rounded-full"
            style={{ background: "oklch(0.88 0.12 160 / 0.55)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}