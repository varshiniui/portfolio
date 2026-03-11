"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  scale?: boolean;
  blur?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 40,
  once = true,
  scale = false,
  blur = false,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
        return {};
      default:
        return { y: distance };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
      ...(scale && { scale: 0.95 }),
      ...(blur && { filter: "blur(10px)" }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for child animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger item to be used inside StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  scale?: boolean;
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 30,
  scale = false,
}: StaggerItemProps) {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
        return {};
      default:
        return { y: distance };
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
      ...(scale && { scale: 0.9 }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// Text reveal with character animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({
  children,
  className = "",
  speed = 0.5,
}: ParallaxProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        willChange: "transform",
      }}
      initial={{ y: 0 }}
      whileInView={{
        y: [-20 * speed, 20 * speed],
      }}
      viewport={{ once: false, margin: "-200px" }}
      transition={{
        duration: 0.8,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}
