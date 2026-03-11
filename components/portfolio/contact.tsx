"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact">

      {/* Sunset Sorbet background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--gradient-1)", opacity: 0.28 }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--gradient-3)", opacity: 0.22 }}
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-56 h-56 rounded-full blur-2xl"
          style={{ background: "var(--gradient-2)", opacity: 0.18 }}
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge: lavender/blush tint */}
          <span
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full border"
            style={{
              color: "oklch(0.42 0.11 180)",
              background: "oklch(0.88 0.09 180 / 0.18)",
              borderColor: "oklch(0.90 0.08 320 / 0.40)",
            }}
          >
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">Let's Connect</span>
          </h2>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Interested in collaborating or discussing tech projects? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-6 lg:p-8 rounded-2xl">

              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "oklch(0.88 0.12 160 / 0.15)" }}
                  >
                    <CheckCircle
                      className="w-8 h-8"
                      style={{ color: "oklch(0.45 0.13 160)" }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I will respond as soon as possible.
                  </p>
                </motion.div>
              ) : (

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input type="text" placeholder="Your name" required className="rounded-xl h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" required className="rounded-xl h-12" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input type="text" placeholder="What's this about?" required className="rounded-xl h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="rounded-xl resize-none"
                    />
                  </div>

                  {/* Sunset Sorbet gradient button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl py-4 text-base font-semibold text-white transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, oklch(0.52 0.18 162), oklch(0.44 0.16 172))", boxShadow: "0 4px 18px oklch(0.52 0.18 162 / 0.32), inset 0 1px 0 oklch(1 0 0 / 0.18)" }}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-6 lg:p-8 rounded-2xl h-full">

              <h3 className="text-xl font-bold mb-6">Connect with me</h3>

              <div className="space-y-4 mb-8">

                {/* Email — coral */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: "oklch(0.88 0.12 160 / 0.15)",
                      color: "oklch(0.45 0.13 160)",
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground text-sm">varshini562021@gmail.com</p>
                  </div>
                </div>

                {/* Phone — lavender */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: "oklch(0.88 0.09 180 / 0.18)",
                      color: "oklch(0.42 0.11 180)",
                    }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 9047186256</p>
                  </div>
                </div>

                {/* Location — butter yellow */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: "oklch(0.92 0.10 130 / 0.25)",
                      color: "oklch(0.40 0.12 140)",
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground text-sm">Nagercoil, Tamil Nadu, India</p>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border/50">

                <h4 className="font-medium mb-4">Social Links</h4>

                <div className="space-y-3">

                  <a
                    href="https://github.com/varshiniui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/50 transition-all group"
                    style={{ background: "oklch(0.99 0.005 280 / 0.4)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "oklch(0.88 0.12 160 / 0.08)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "oklch(0.99 0.005 280 / 0.4)")}
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/varshini-shya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/50 transition-all"
                    style={{ background: "oklch(0.99 0.005 280 / 0.4)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "oklch(0.88 0.09 180 / 0.10)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "oklch(0.99 0.005 280 / 0.4)")}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}