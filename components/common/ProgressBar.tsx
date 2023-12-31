"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import styled from "styled-components";

const Progress = styled(motion.div)`
  position: fixed;
  top: 8rem;
  left: 0;
  right: 0;
  height: 0.2rem;
  background: #ff5d6a;
  transform-origin: 0%;
  z-index: 9;
`;

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <Progress style={{ scaleX }} />;
};

export default ProgressBar;
