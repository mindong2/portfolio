// Header

import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8rem;
  padding: 3rem 3rem;
  background-color: #fff;
  border-bottom: 0.1rem solid #c8c8c8;
  font-size: 2rem;
  z-index: 999;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 144rem;
  margin: 0 auto;
  @media screen and (max-width: 578px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.h1`
  font-weight: 600;
`;
export const Hamburger = styled.div`
  position: relative;
  display: none;
  cursor: pointer;
  svg {
    width: 4rem;
  }
  @media screen and (max-width: 578px) {
    display: block;
    top: -1rem;
  }
`;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 3rem;
  .close {
    display: none;
  }
  @media screen and (max-width: 578px) {
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    font-size: 3.6rem;
    transform: translateX(100%);
    transition: transform 0.2s ease-in-out;
    z-index: 1888;

    &.on {
      transform: translateX(0);
    }
    .close {
      position: absolute;
      top: 3rem;
      right: 3rem;
      display: block;
      svg {
        width: 4rem;
        cursor: pointer;
      }
    }
  }
`;

export const MenuList = styled.li`
  a {
    position: relative;
    transition: all 0.2s ease-in-out;
  }
  a::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: #ff5d6a;
    transform: scaleX(0);
    transform-origin: 0;
    transition: all 0.25s ease-in-out;
  }

  &:hover a {
    color: #ff5d6a;
  }
  &:hover a::after {
    transform: scaleX(1);
  }
`;

// Modal

export const ModalBox = styled(motion.div)`
  max-height: 80vh;
  overflow-y: auto;
  @media screen and (max-width: 578px) {
    max-height: 60vh;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    width: 100%;
  }
`;

export const ModalContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  margin-top: 4rem;
  h2 {
    margin-bottom: 2rem;
    padding: 1rem;
    padding-bottom: 0.4rem;
    background-color: #ff5d6a;
    color: #fff;
    border-radius: 0.4rem;
    font-size: 2.8rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
    .github {
      width: 2rem;
    }
    p {
      margin-top: 1rem;
      font-size: 1.6rem;
      line-height: 1.87;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;
