import React from "react";
import { ContentBox, ContentBoxWrap, SectionTitle } from "./Profile";
import styled from "styled-components";

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem 0;
`;

const Contact = () => {
  return (
    <ContentBox id="skills">
      <ContentBoxWrap>
        <ContactBox>
          <SectionTitle data-aos="fade">
            <span>C</span>ontact
          </SectionTitle>
        </ContactBox>
      </ContentBoxWrap>
    </ContentBox>
  );
};

export default Contact;
