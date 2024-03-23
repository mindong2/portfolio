import React, { useState } from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";
import { ContentBox, ContentBoxWrap, SectionTitle } from "@/styles/componentsStyle";

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem 0;
`;

const ProjectTab = styled.div`
  display: flex;
  gap: 0 1rem;
  margin-bottom: 1rem;

  button {
    padding-bottom: .5rem;
    background: none;
    outline: none;
    border:none;
    border-bottom: 1px solid rgba(255, 93, 106, 0);
    cursor: pointer;
    font-size: 2.4rem;
    font-weight: bold;
    transition: all .2s ease-in-out;
    
    &:hover,
    &.on {
      color: #ff5d6a;
      border-bottom: 1px solid #ff5d6a;
    }
  }
`

const Project = () => {
  const [tabStatus, setTabStatus] = useState('company');
  return (
    <ContentBox id="project">
      <ContentBoxWrap>
        <Projects>
          <SectionTitle data-aos="fade">
            <span>P</span>rojects
          </SectionTitle>
          <ProjectTab>
            <button className={tabStatus === 'company' ? 'on' : ''} onClick={() => setTabStatus('company')}>Company</button>
            <button className={tabStatus === 'personal' ? 'on' : ''} onClick={() => setTabStatus('personal')}>Personal</button>
          </ProjectTab>
          <ProjectList status={tabStatus} />
        </Projects>
      </ContentBoxWrap>
    </ContentBox>
  );
};

export default Project;
