"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

const Counter = ({ counter, suffix }: { counter: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      animate(count, counter, {
        duration: 1.5,
        ease: "easeOut",
      });
    }
  }, [isInView, counter]);

  return (
    <div>
      <motion.span ref={ref}>{rounded}</motion.span>
      <span>{suffix}</span>
    </div>
  );
};

export default Counter;
