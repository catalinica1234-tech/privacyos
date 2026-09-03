"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  initialX?: number;
  hero?: boolean;
};

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  initialX = 0,
  hero = false,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: hero ? initialX : 0,
        y: hero ? 0 : 20,
      }}
      animate={hero ? { opacity: 1, x: 0 } : undefined}
      whileInView={!hero ? { opacity: 1, y: 0 } : undefined}
      viewport={!hero ? { once: true, amount: 0.2 } : undefined}
      transition={{
        duration: hero ? 0.7 : 0.5,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
