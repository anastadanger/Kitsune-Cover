"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "volt" | "hot" | "cyber";
  rotate?: number;
  className?: string;
};

export function Sticker({
  children,
  tone = "volt",
  rotate = 10,
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const bg =
    tone === "hot" ? "bg-hot" : tone === "cyber" ? "bg-cyber" : "bg-volt";

  return (
    <motion.span
      initial={reduce ? false : { rotate: 0, scale: 0.8, opacity: 0.9 }}
      whileInView={
        reduce
          ? undefined
          : { rotate, scale: 1, opacity: 1, transition: { duration: 0.5 } }
      }
      viewport={{ once: true, amount: 0.6 }}
      className={`pill inline-flex items-center justify-center border-2 border-ink px-3 py-1 font-display text-[9px] font-black uppercase tracking-[0.15em] text-ink ${bg} ${className}`}
    >
      {children}
    </motion.span>
  );
}
