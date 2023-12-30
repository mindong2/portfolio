"use client";
import React, { useEffect } from "react";
import Profile from "./Profile";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
const Wrapper = styled.main``;

const MainPage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrapper>
      <Profile />
      <Skills />
      <Project />
      <Contact />
    </Wrapper>
  );
};

export default MainPage;
