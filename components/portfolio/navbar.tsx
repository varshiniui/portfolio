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

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          {/* Logo — gradient-text already uses Sorbet palette */}
          <button
            onClick={() => scrollToSection("#")}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            SV
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
                onMouseEnter={e =>
                  (e.currentTarget.style.background = "oklch(0.88 0.12 160 / 0.08)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Hire Me — Sunset Sorbet gradient button */}
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
            style={{}}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onMouseEnter={e =>
              (e.currentTarget.style.background = "oklch(0.88 0.12 160 / 0.08)")
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = "transparent")
            }
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
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="px-4 py-3 text-base font-medium text-foreground rounded-xl transition-colors text-left"
                    onMouseEnter={e =>
                      (e.currentTarget.style.background = "oklch(0.88 0.12 160 / 0.08)")
                    }
                    onMouseLeave={e =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {link.name}
                  </button>
                ))}
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