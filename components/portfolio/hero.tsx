"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* Sunset Sorbet floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Coral — top left */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--gradient-1)", opacity: 0.40 }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Lavender → yellow — bottom right */}
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--gradient-2)", opacity: 0.30 }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Yellow → peach — center pulse */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "var(--gradient-3)", opacity: 0.22 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Coral accent — top right quarter */}
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
        {/* Badge — coral tint */}
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

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {"Hi, I'm "}
          <span className="gradient-text">Sahaya Varshini M J</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          A B.Tech IT student and aspiring software developer, passionate about
          building web applications, exploring AI technologies, and working with data.
        </motion.p>

        <motion.p
          className="mt-4 text-base text-muted-foreground/80 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          Transforming ideas into elegant digital experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Primary — mint gradient with shimmer */}
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

          {/* Secondary — outlined with mint tint */}
          <motion.button
            className="flex items-center gap-2.5 px-9 py-4 rounded-2xl text-base font-bold border-2 transition-colors"
            style={{
              borderColor: "oklch(0.52 0.18 162 / 0.45)",
              color: "oklch(0.42 0.17 162)",
              background: "oklch(0.88 0.12 160 / 0.08)",
            }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{
              scale: 1.04,
              backgroundColor: "oklch(0.88 0.12 160 / 0.18)",
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
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            { href: "#", Icon: Github, label: "GitHub" },
            { href: "#", Icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:varshini562021@gmail.com", Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card border border-transparent transition-all duration-300 group"
              style={{}}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "oklch(0.88 0.12 160 / 0.35)";
                e.currentTarget.style.background = "oklch(0.88 0.12 160 / 0.08)";
              }}
              onMouseLeave={e => {
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
        transition={{ duration: 0.5, delay: 0.42 }}
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