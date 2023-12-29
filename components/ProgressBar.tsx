"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div
        style={{
          position: "fixed",
          top: "8rem",
          left: "0",
          right: "0",
          height: "0.2rem",
          background: "#ff5d6a",
          transformOrigin: "0%",
          scaleX,
        }}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
