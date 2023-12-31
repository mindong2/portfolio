import React from "react";
import { ContentBox, ContentBoxWrap, SectionTitle, Skill, SkillDivide, SkillList, SkillListItem } from "@/styles/componentsStyle";

const Skills = () => {
  return (
    <ContentBox id="skills">
      <ContentBoxWrap>
        <Skill>
          <SectionTitle data-aos="fade">
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
