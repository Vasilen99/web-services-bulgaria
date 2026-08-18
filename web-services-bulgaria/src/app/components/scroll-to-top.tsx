"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";
import { motion, AnimatePresence } from "motion/react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <LiquidButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-primary text-xs uppercase cursor-pointer transition-colors bg-primary-foreground shadow-lg"
          >
            <ArrowUp className="w-4 h-4" />
          </LiquidButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
