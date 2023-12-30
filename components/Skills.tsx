import React from "react";
import { ContentBox, ContentBoxWrap, SectionTitle } from "./Profile";
import styled from "styled-components";
import { motion } from "framer-motion";

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem 0;
`;

const SkillDivide = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

const SkillList = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
  padding: 3rem;
  border: 1px solid #c8c8c8;
  border-radius: 1rem;
  box-shadow: 0 0 4px 0px #c8c8c8;
  .title {
    position: absolute;
    top: -1.2rem;
    left: 2.4rem;
    padding: 0 1rem;
    font-size: 1.8rem;
    background-color: #fff;
  }
`;

const SkillListItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  font-size: 2.4rem;
  .icon {
    width: 4rem;
  }
`;

const Skills = () => {
  return (
    <ContentBox id="skills">
      <ContentBoxWrap>
        <Skill>
          <SectionTitle>
            <span>S</span>kills
          </SectionTitle>
          <SkillDivide>
            <SkillList className="language" data-aos="fade-right">
              <span className="title">Language</span>
              <SkillListItem>
                <img src="/image/skills/javascript.png" alt="" className="icon" />
                Javascript
              </SkillListItem>
              <SkillListItem>
                <img src="/image/skills/typescript.webp" alt="" className="icon" />
                Typescript
              </SkillListItem>
            </SkillList>

            <SkillList className="library" data-aos="fade-left">
              <span className="title">Library / Framework</span>
              <SkillListItem>
                <img src="/image/skills/react.png" alt="" className="icon" />
                React.js
              </SkillListItem>
              <SkillListItem>
                <img src="/image/skills/next.js.svg" alt="" className="icon" />
                Next.js
              </SkillListItem>
              <SkillListItem>
                <img src="/image/skills/recoil.png" alt="" className="icon" />
                Recoil
              </SkillListItem>
              <SkillListItem>
                <img src="/image/skills/redux.png" alt="" className="icon" />
                Redux-Toolkit
              </SkillListItem>
              <SkillListItem>
                <img src="/image/skills/react-query.svg" alt="" className="icon" />
                React-Query
              </SkillListItem>
              <SkillListItem>
                <img src="/image/skills/tailwind.webp" alt="" className="icon" />
                Tailwind
              </SkillListItem>
              <SkillListItem>
                <img src="/image/skills/styled-components.png" alt="" className="icon" />
                Styled-Components
              </SkillListItem>
            </SkillList>
          </SkillDivide>
          <SkillList className="ETC" data-aos="fade-up">
            <span className="title">ETC</span>
            <SkillListItem>
              <img src="/image/skills/git.png" alt="" className="icon" />
              Git
            </SkillListItem>
            <SkillListItem>
              <img src="/image/github-logo.svg" alt="" className="icon" />
              Github
            </SkillListItem>
            <SkillListItem>
              <img src="/image/skills/firebase.png" alt="" className="icon" />
              Firebase
            </SkillListItem>
            <SkillListItem>
              <img src="/image/skills/slack.jpg" alt="" className="icon" />
              Slack
            </SkillListItem>
          </SkillList>
        </Skill>
      </ContentBoxWrap>
    </ContentBox>
  );
};

export default Skills;
