"use client";
import React from "react";
import Profile from "./Profile";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";
import styled from "styled-components";

const Wrapper = styled.main``;

const MainPage = () => {
  return (
    <Wrapper>
      <Profile />
      <Skill />
      <Project />
      <Contact />
    </Wrapper>
  );
};

export default MainPage;
