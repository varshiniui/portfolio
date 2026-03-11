"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/30 relative overflow-hidden">
      {/* Subtle Sorbet glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 rounded-full blur-3xl"
          style={{ background: "var(--gradient-1)", opacity: 0.12 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xl font-bold gradient-text">Sahaya Varshini M J</span>
            <p className="text-sm text-muted-foreground">
              Aspiring Software Developer | B.Tech IT Student
            </p>
          </div>

          {/* Social icons — Sorbet hover tints */}
          <div className="flex items-center gap-4">
            {[
              { href: "#", Icon: Github, label: "GitHub", hoverBg: "oklch(0.88 0.12 160 / 0.10)", hoverColor: "oklch(0.45 0.13 160)" },
              { href: "#", Icon: Linkedin, label: "LinkedIn", hoverBg: "oklch(0.90 0.08 320 / 0.14)", hoverColor: "oklch(0.42 0.11 180)" },
              { href: "mailto:varshini562021@gmail.com", Icon: Mail, label: "Email", hoverBg: "oklch(0.92 0.10 130 / 0.18)", hoverColor: "oklch(0.40 0.12 140)" },
            ].map(({ href, Icon, label, hoverBg, hoverColor }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all group"
                style={{ background: "oklch(0.94 0.02 280 / 0.5)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = hoverBg;
                  (e.currentTarget.querySelector("svg") as SVGElement)?.style.setProperty("color", hoverColor);
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "oklch(0.94 0.02 280 / 0.5)";
                  (e.currentTarget.querySelector("svg") as SVGElement)?.style.setProperty("color", "");
                }}
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground transition-colors" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}