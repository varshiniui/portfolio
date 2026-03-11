"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, BadgeCheck, BookOpen } from "lucide-react";

interface Certification {
  title: string;
  platform: string;
  skills: string[];
  certificateUrl: string;
  iconBg: string;
  iconColor: string;
  cardAccent: string;
  badgeBg: string;
  badgeColor: string;
  badgeBorder: string;
}

const certifications: Certification[] = [
  {
    title: "Python for AI & Data Science",
    platform: "Coursera",
    skills: ["Python", "AI Fundamentals", "Data Science Basics", "Data Analysis"],
    certificateUrl: "https://drive.google.com/file/d/1fJZ-uo-GTHAau7BR-EodmDzGRYrxajqW/preview",
    // butter yellow accent
    iconBg: "oklch(0.92 0.10 130 / 0.22)",
    iconColor: "oklch(0.40 0.12 140)",
    cardAccent: "linear-gradient(135deg, oklch(0.92 0.10 130 / 0.10), transparent)",
    badgeBg: "oklch(0.92 0.10 130 / 0.18)",
    badgeColor: "oklch(0.40 0.12 140)",
    badgeBorder: "oklch(0.88 0.10 130 / 0.40)",
  },
];

export function CertificationsSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="certifications">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-10 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "var(--gradient-2)", opacity: 0.18 }}
          animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--gradient-3)", opacity: 0.20 }}
          animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full border"
            style={{
              color: "oklch(0.45 0.13 160)",
              background: "oklch(0.88 0.12 160 / 0.15)",
              borderColor: "oklch(0.88 0.12 160 / 0.35)",
            }}
          >
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Courses and certifications that have shaped my skills
          </p>
        </motion.div>

        {/* Cards grid — single card centers itself, multiple fill grid */}
        <div className={`grid gap-6 lg:gap-8 ${certifications.length === 1 ? "max-w-md mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="glass-card rounded-2xl p-6 lg:p-8 card-3d relative overflow-hidden"
              style={{ background: cert.cardAccent }}
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.38,
                delay: index * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -6 }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-bl-full pointer-events-none"
                style={{
                  background: `linear-gradient(225deg, ${cert.iconBg}, transparent)`,
                }}
              />

              {/* Certification badge */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border"
                  style={{
                    background: cert.badgeBg,
                    color: cert.badgeColor,
                    borderColor: cert.badgeBorder,
                  }}
                >
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Certification
                </span>
              </div>

              {/* Icon + title + platform */}
              <div className="flex items-start gap-4 mb-5">
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: cert.iconBg, color: cert.iconColor }}
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Award className="w-6 h-6" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {cert.title}
                  </h3>
                  <div
                    className="flex items-center gap-1.5 mt-1 text-sm font-medium"
                    style={{ color: cert.iconColor }}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    {cert.platform}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full border"
                    style={{
                      background: "oklch(0.99 0.005 280 / 0.6)",
                      borderColor: cert.badgeBorder,
                      color: cert.badgeColor,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* View Certificate button */}
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all"
                style={{
                  color: cert.iconColor,
                  borderColor: cert.badgeBorder,
                  background: cert.badgeBg,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = cert.iconBg;
                  e.currentTarget.style.boxShadow = `0 4px 14px ${cert.badgeBorder}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = cert.badgeBg;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}