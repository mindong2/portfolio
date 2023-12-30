"use client";

import Link from "next/link";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8rem;
  padding: 3rem 0;
  background-color: #fff;
  border-bottom: 0.1rem solid #c8c8c8;
  font-size: 2rem;
  z-index: 999;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 144rem;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-weight: 600;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 3rem;
`;

const MenuList = styled.li`
  a {
    position: relative;
    transition: all 0.2s ease-in-out;
  }
  a::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: #ff5d6a;
    transform: scaleX(0);
    transform-origin: 0;
    transition: all 0.25s ease-in-out;
  }

  &:hover a {
    color: #ff5d6a;
  }
  &:hover a::after {
    transform: scaleX(1);
  }
`;
const Header = () => {
  return (
    <>
      <HeaderWrap>
        <Wrapper>
          <Logo>
            <Link href="#">KDM's Portfolio</Link>
          </Logo>
          <Menu>
            <MenuList>
              <a href="#profile">Profile</a>
            </MenuList>
            <MenuList>
              <a href="#skills">Skills</a>
            </MenuList>
            <MenuList>
              <a href="#project">Project</a>
            </MenuList>
            <MenuList>
              <a href="#contact">Contact</a>
            </MenuList>
          </Menu>
        </Wrapper>
      </HeaderWrap>
      <ProgressBar />
    </>
  );
};

export default Header;
