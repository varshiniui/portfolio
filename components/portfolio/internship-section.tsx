"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, BadgeCheck, Code2, Palette, BarChart2 } from "lucide-react";

interface Internship {
  company: string;
  role: string;
  duration: string;
  description: string;
  skills: string[];
  certificateUrl: string;
  icon: React.ElementType;
  // Sunset Sorbet accent per card
  iconBg: string;
  iconColor: string;
  cardAccent: string;
  badgeBg: string;
  badgeColor: string;
  badgeBorder: string;
}

const internships: Internship[] = [
  {
    company: "Zoro Tech",
    role: "UI/UX Design Intern",
    duration: "Jul 14, 2025 – Jul 28, 2025",
    description:
      "Completed a hands-on internship focused on UI/UX designing, working on practical design projects and learning user-centred design principles under professional guidance.",
    skills: ["UI Design", "UX Research", "Figma", "Prototyping", "User Flows"],
    certificateUrl: "https://drive.google.com/file/d/1mgL7UUW7CjcLSXLtFXEO5qifs9j85M9R/preview",
    icon: Palette,
    // blush lavender
    iconBg: "oklch(0.88 0.09 180 / 0.18)",
    iconColor: "oklch(0.42 0.11 180)",
    cardAccent: "linear-gradient(135deg, oklch(0.88 0.09 180 / 0.09), transparent)",
    badgeBg: "oklch(0.88 0.09 180 / 0.15)",
    badgeColor: "oklch(0.40 0.11 180)",
    badgeBorder: "oklch(0.88 0.09 180 / 0.35)",
  },
  {
    company: "Besant Technologies",
    role: "Frontend Development Intern",
    duration: "Dec 2025 – Jan 2026",
    description:
      "Completed a 1-month internship in Frontend development using React JS, contributing to project-based tasks and hands-on assignments with both front-end and back-end technologies.",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Frontend Development"],
    certificateUrl: "https://drive.google.com/file/d/1p4hB62_ZC_c8hWXUMAVvES8_RDBt6Fu3/preview",
    icon: Code2,
    // coral
    iconBg: "oklch(0.88 0.12 160 / 0.15)",
    iconColor: "oklch(0.45 0.13 160)",
    cardAccent: "linear-gradient(135deg, oklch(0.88 0.12 160 / 0.09), transparent)",
    badgeBg: "oklch(0.88 0.12 160 / 0.15)",
    badgeColor: "oklch(0.42 0.13 160)",
    badgeBorder: "oklch(0.88 0.12 160 / 0.35)",
  },
  {
    company: "Besant Technologies",
    role: "Data Analytics Intern",
    duration: "1 Month (Virtual)",
    description:
      "Completed a one-month virtual internship actively participating in live classes and completing mini-projects related to Data Analytics using SQL and Power BI.",
    skills: ["SQL", "Power BI", "Data Analytics", "Data Visualization"],
    certificateUrl: "https://drive.google.com/file/d/1CLeVx0VP57jkGwiGNXZh-RKzxHRZQ2Ni/preview",
    icon: BarChart2,
    // peach
    iconBg: "oklch(0.90 0.08 150 / 0.20)",
    iconColor: "oklch(0.44 0.12 150)",
    cardAccent: "linear-gradient(135deg, oklch(0.90 0.08 150 / 0.09), transparent)",
    badgeBg: "oklch(0.90 0.08 150 / 0.15)",
    badgeColor: "oklch(0.44 0.12 150)",
    badgeBorder: "oklch(0.90 0.08 150 / 0.35)",
  },
];

export function InternshipSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="internships">
      {/* Sunset Sorbet background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "var(--gradient-2)", opacity: 0.20 }}
          animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--gradient-1)", opacity: 0.18 }}
          animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
          {/* Badge: butter yellow tint */}
          <span
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full border"
            style={{
              color: "oklch(0.40 0.12 140)",
              background: "oklch(0.92 0.10 130 / 0.22)",
              borderColor: "oklch(0.88 0.10 130 / 0.40)",
            }}
          >
            Work Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="gradient-text">Internship Experience</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Real-world experience gained through industry internships
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.company}
              className="glass-card rounded-2xl p-6 lg:p-8 card-3d relative overflow-hidden"
              style={{ background: internship.cardAccent }}
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
              {/* Corner accent wash */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-bl-full pointer-events-none"
                style={{
                  background: `linear-gradient(225deg, ${internship.iconBg.replace("0.18", "0.25")}, transparent)`,
                }}
              />

              {/* Internship • Certified badge */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border"
                  style={{
                    background: internship.badgeBg,
                    color: internship.badgeColor,
                    borderColor: internship.badgeBorder,
                  }}
                >
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Internship · Certified
                </span>
              </div>

              {/* Company icon + name + role */}
              <div className="flex items-start gap-4 mb-5">
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: internship.iconBg,
                    color: internship.iconColor,
                  }}
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <internship.icon className="w-6 h-6" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {internship.company}
                  </h3>
                  <p
                    className="text-sm font-medium mt-0.5"
                    style={{ color: internship.iconColor }}
                  >
                    {internship.role}
                  </p>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: internship.iconBg, color: internship.iconColor }}
                >
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <span>{internship.duration}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {internship.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {internship.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full border"
                    style={{
                      background: "oklch(0.99 0.005 280 / 0.6)",
                      borderColor: internship.badgeBorder,
                      color: internship.badgeColor,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* View Certificate button */}
              <a
                href={internship.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all"
                style={{
                  color: internship.iconColor,
                  borderColor: internship.badgeBorder,
                  background: internship.badgeBg,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = internship.iconBg;
                  e.currentTarget.style.boxShadow = `0 4px 14px ${internship.badgeBorder}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = internship.badgeBg;
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