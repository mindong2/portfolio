import { motion } from "framer-motion";
import styled from "styled-components";

// Profile
export const ContentBox = styled.section`
  margin: 0 auto;
  padding: 8rem 3rem;
  border-top: 0.3rem dashed #c8c8c8;
  overflow: hidden;
  &#profile {
    padding-top: 24rem;
    @media screen and (max-width: 768px) {
      padding-top: 16rem;
    }
  }
`;

export const ContentBoxWrap = styled.section`
  max-width: 98rem;
  margin: 0 auto;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 5rem;

  @media screen and (max-width: 578px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    img {
      margin-bottom: 5rem;
    }

    br {
      display: none;
    }
  }
`;

export const ProfileImg = styled(motion.div)`
  cursor: pointer;
  img {
    width: 20rem;
    border: 0.1rem solid #c8c8c8;
    border-radius: 0.6rem;
  }
`;

export const Description = styled.div`
  font-family: "Jalnan2";
  font-size: 3.2rem;
  line-height: 1.5;
  word-break: keep-all;
  span {
    padding: 0.5rem;
    padding-bottom: 0;
    background-color: #ff5d6a;
    color: #fff;
    border-radius: 0.4rem;
  }

  @media screen and (max-width: 578px) {
    font-size: 2.8rem;
  }
`;

export const About = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem 0;
  margin: 0 auto;
  margin-top: 10rem;
`;

export const SectionTitle = styled.div`
  font-size: 3.6rem;
  span {
    font-size: 4rem;
    color: #ff5d6a;
  }
`;

export const AboutWrap = styled.div`
  width: 100%;
  text-align: center;
`;

export const AboutList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  @media screen and (max-width: 578px) {
    gap: 3rem;
  }
`;

export const AboutListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  width: 30%;
  font-size: 1.8rem;
  @media screen and (max-width: 578px) {
    width: auto;
  }
  .icon {
    width: 4rem;
  }
`;

// Skills

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem 0;
`;

export const SkillDivide = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const SkillList = styled(motion.div)`
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

export const SkillListItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  font-size: 2.4rem;
  .icon {
    width: 4rem;
  }
`;

// Project

export const List = styled.ul`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  width: 100%;
`;
export const ListItem = styled(motion.li)`
  width: 48%;
  padding: 1rem;
  border: 1px solid #c8c8c8;
  border-radius: 1rem;
  box-shadow: 0 0 0.6rem 0 #c8c8c8;
  background-color: #fff;
  cursor: pointer;

  img {
    width: 100%;
    max-height: 20.8rem;
    object-fit: cover;
  }

  h3 {
    margin-top: 1.6rem;
    text-align: center;
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    width: 47%;
    height: auto;
    img {
      height: auto;
    }
  }
  @media screen and (max-width: 578px) {
    width: 100%;
  }
`;

// Contact

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem 0;
`;

export const Cont = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  height: 35.6rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const ContactImg = styled.img`
  width: 48.5%;
  height: 35.6rem;
  border-radius: 0.4rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem 0;
  width: 48.5%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  input,
  textarea {
    padding: 1rem;
    border: 0.1rem solid #c8c8c8;
    border-radius: 0.4rem;
    outline: none;
    transition: all 0.2s ease-in-out;
    font-size: 1.6rem;
    resize: none;

    &:focus {
      border: 0.1rem solid #ff5d6a;
      box-shadow: 0 0 0 1px #ff5d6a inset;
    }
  }

  button {
    padding: 1rem;
    font-size: 1.8rem;
    background-color: #ff5d6a;
    color: #fff;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #ff2637;
    }
  }
`;
