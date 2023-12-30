import React from "react";
import { ContentBox, ContentBoxWrap, SectionTitle } from "./Profile";
import styled from "styled-components";

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
          <SectionTitle>
            <span>P</span>rojects
          </SectionTitle>
        </Projects>
      </ContentBoxWrap>
    </ContentBox>
  );
};

export default Project;
