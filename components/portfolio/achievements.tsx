"use client";

import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    place: "1st Prize",
    event: "National Level Paper Presentation",
    topic: "The Role of Micro Interactions in Web UX",
    icon: Trophy,
    highlight: true,
  },
  {
    place: "3rd Prize",
    event: "College Symposium Paper Presentation",
    topic: "Real-Time Stray Dogs Detection and Risk Analysis using YOLOv5",
    icon: Award,
    highlight: false,
  },
];

export function Achievements() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="achievements">
      {/* Sunset Sorbet background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--gradient-1)", opacity: 0.30 }}
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "var(--gradient-3)", opacity: 0.25 }}
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Extra sorbet accent */}
        <motion.div
          className="absolute top-1/2 left-10 w-48 h-48 rounded-full blur-2xl"
          style={{ background: "var(--gradient-2)", opacity: 0.18 }}
          animate={{ x: [0, 10, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
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
          {/* Badge: coral tint */}
          <span
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full border"
            style={{
              color: "oklch(0.45 0.13 160)",
              background: "oklch(0.88 0.12 160 / 0.15)",
              borderColor: "oklch(0.88 0.12 160 / 0.35)",
            }}
          >
            Recognition
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Recognition for technical excellence and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.event}
              className="glass-card rounded-2xl p-6 lg:p-8 card-3d relative overflow-hidden"
              style={
                achievement.highlight
                  ? { boxShadow: "0 0 0 2px oklch(0.88 0.12 160 / 0.40)" }
                  : {}
              }
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
              {/* Highlight corner wash — peach/coral */}
              {achievement.highlight && (
                <div
                  className="absolute top-0 right-0 w-36 h-36 rounded-bl-full"
                  style={{
                    background:
                      "linear-gradient(225deg, oklch(0.88 0.12 160 / 0.25), transparent)",
                  }}
                />
              )}

              <div className="flex items-start gap-4">
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={
                    achievement.highlight
                      ? {
                          background: "var(--gradient-1)",
                          color: "white",
                        }
                      : {
                          background: "oklch(0.68 0.13 160 / 0.12)",
                          color: "oklch(0.45 0.13 160)",
                        }
                  }
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <achievement.icon className="w-7 h-7" />
                </motion.div>

                <div className="flex-1">
                  {/* Place badge */}
                  <span
                    className="inline-block px-3 py-1 text-sm font-bold rounded-full mb-2"
                    style={
                      achievement.highlight
                        ? {
                            background: "var(--gradient-1)",
                            color: "white",
                          }
                        : {
                            background: "oklch(0.92 0.10 130 / 0.35)",
                            color: "oklch(0.40 0.12 140)",
                          }
                    }
                  >
                    {achievement.place}
                  </span>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {achievement.event}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    <span className="font-medium text-foreground/80">Topic:</span>{" "}
                    {achievement.topic}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}