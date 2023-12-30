import React from "react";
import { ContentBox, ContentBoxWrap, SectionTitle } from "./Profile";
import styled from "styled-components";
import ProjectList from "./ProjectList";

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
