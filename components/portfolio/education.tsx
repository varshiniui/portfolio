"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="education">
      {/* Sunset Sorbet background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-10 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "var(--gradient-3)", opacity: 0.25 }}
          animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full blur-3xl"
          style={{ background: "var(--gradient-2)", opacity: 0.20 }}
          animate={{ x: [0, 12, 0], y: [0, -12, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
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
          {/* Badge: butter yellow tint */}
          <span
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full border"
            style={{
              color: "oklch(0.40 0.12 140)",
              background: "oklch(0.92 0.10 130 / 0.25)",
              borderColor: "oklch(0.88 0.10 130 / 0.40)",
            }}
          >
            Academic Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Academic foundation shaping my technical expertise
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="glass-card rounded-2xl p-8 lg:p-10 card-3d relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.88 0.12 160 / 0.06), transparent, oklch(0.88 0.09 180 / 0.06))",
            }}
            whileHover={{ y: -6 }}
          >
            {/* Subtle top-right sorbet wash */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-bl-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(225deg, oklch(0.92 0.10 130 / 0.18), transparent)",
              }}
            />

            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon: gradient-1 (coral → lavender) */}
              <motion.div
                className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                style={{ background: "var(--gradient-1)" }}
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="w-10 h-10 text-white" />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  B.Tech Information Technology
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  University College of Engineering Nagercoil
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  {/* Calendar — coral */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: "oklch(0.88 0.12 160 / 0.15)",
                        color: "oklch(0.45 0.13 160)",
                      }}
                    >
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>2023 – 2027</span>
                  </div>

                  {/* Location — lavender */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: "oklch(0.88 0.09 180 / 0.18)",
                        color: "oklch(0.42 0.11 180)",
                      }}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Nagercoil, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}