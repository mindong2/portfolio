import React from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";
import { ContentBox, ContentBoxWrap, SectionTitle } from "@/styles/componentsStyle";

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem 0;
`;

const Project = () => {
  return (
    <ContentBox id="project">
      <ContentBoxWrap>
        <Projects>
          <SectionTitle data-aos="fade">
            <span>P</span>rojects
          </SectionTitle>
          <ProjectList />
        </Projects>
      </ContentBoxWrap>
    </ContentBox>
  );
};

export default Project;
