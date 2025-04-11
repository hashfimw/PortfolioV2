"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

export default function Loading() {
  const barCount = 5;
  const primaryColor = "#B3B3B3";
  const barWidth = 4;
  const barGap = 3;
  const minHeight = 4;
  const maxHeight = 40;
  const duration = 1.4;

  const [isVisible, setIsVisible] = useState(true);

  const minimumLoadingTime = 4000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, minimumLoadingTime);

    return () => clearTimeout(timer);
  }, []);

  const bars = Array.from({ length: barCount }, (_, i) => i);

  const barVariants: Variants = {
    animate: (i) => ({
      height: [minHeight, maxHeight, minHeight],
      opacity: [0.7, 1, 0.7],
      transition: {
        height: {
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          duration: duration,
          delay: i * (duration / (barCount * 2)),
        },
        opacity: {
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          duration: duration,
          delay: i * (duration / (barCount * 2)),
        },
      },
    }),
  };

  const containerVariants: Variants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
          initial="visible"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
        >
          <div className=" p-6 rounded-lg shadow-lg flex justify-center items-center">
            <div className="flex items-end" style={{ gap: `${barGap}px` }}>
              {bars.map((bar) => (
                <motion.div
                  key={bar}
                  custom={bar}
                  variants={barVariants}
                  initial={{ height: minHeight, opacity: 0.7 }}
                  animate="animate"
                  style={{
                    width: `${barWidth}px`,
                    backgroundColor: primaryColor,
                    borderTopLeftRadius: "2px",
                    borderTopRightRadius: "2px",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
