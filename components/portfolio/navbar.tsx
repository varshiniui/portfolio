"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Internships", href: "#internships" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive("#" + visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          isScrolled ? "glass-card border-b border-border/30" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#")}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            SV
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors"
                  style={{
                    color: isActive ? "oklch(0.42 0.17 162)" : undefined,
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "oklch(0.88 0.12 160 / 0.15)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive
                        ? "font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "oklch(0.52 0.18 162)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Hire Me */}
          <div className="hidden lg:block">
            <motion.button
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, oklch(0.52 0.18 162), oklch(0.44 0.16 172))",
                boxShadow: "0 4px 16px oklch(0.52 0.18 162 / 0.30), inset 0 1px 0 oklch(1 0 0 / 0.18)",
              }}
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 6px 22px oklch(0.52 0.18 162 / 0.42), inset 0 1px 0 oklch(1 0 0 / 0.18)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.88 0.12 160 / 0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              className="absolute top-20 left-6 right-6 glass-card p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="px-4 py-3 text-base font-medium rounded-xl transition-colors text-left flex items-center justify-between"
                      style={{
                        background: isActive ? "oklch(0.88 0.12 160 / 0.12)" : "transparent",
                        color: isActive ? "oklch(0.42 0.17 162)" : undefined,
                      }}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "oklch(0.52 0.18 162)" }}
                        />
                      )}
                    </button>
                  );
                })}
                <div className="pt-4 mt-2 border-t border-border/50">
                  <motion.button
                    className="w-full py-3 rounded-xl text-sm font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.52 0.18 162), oklch(0.44 0.16 172))",
                      boxShadow: "0 4px 16px oklch(0.52 0.18 162 / 0.30)",
                    }}
                    onClick={() => scrollToSection("#contact")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Hire Me
                  </motion.button>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}