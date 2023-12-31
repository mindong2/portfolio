"use client";

import Link from "next/link";
import ProgressBar from "./ProgressBar";
import { Hamburger, HeaderWrap, Logo, Menu, MenuList, Wrapper } from "@/styles/common";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const menuClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "visible";
  };
  return (
    <>
      <HeaderWrap>
        <Wrapper>
          <Logo>
            <Link href="#">KDM's Portfolio</Link>
          </Logo>
          <Hamburger onClick={menuOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Hamburger>
          <Menu className={isOpen ? "on" : ""}>
            <MenuList onClick={menuClose}>
              <a href="#profile">Profile</a>
            </MenuList>
            <MenuList onClick={menuClose}>
              <a href="#skills">Skills</a>
            </MenuList>
            <MenuList onClick={menuClose}>
              <a href="#project">Project</a>
            </MenuList>
            <MenuList onClick={menuClose}>
              <a href="#contact">Contact</a>
            </MenuList>
            <MenuList className="close">
              <svg
                onClick={menuClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </MenuList>
          </Menu>
        </Wrapper>
      </HeaderWrap>
      <ProgressBar />
    </>
  );
};

export default Header;
