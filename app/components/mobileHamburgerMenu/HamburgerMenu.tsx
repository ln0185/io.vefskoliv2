"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HamburgerIcon } from "assets/Icons";
import NavOptions from "components/navOptions/NavOptions";
import { useSession } from "next-auth/react";
import { LeftSection } from "components/header/style";
import { RightSectionContent } from "components/header/Header";

const MenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    width: 100%;
    height: fit-content;
    background-color: var(--primary-light-grey);
    padding: 10px 16px;
  }
`;

const MobileLeftSection = styled(LeftSection)`
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  height: fit-content;
  outline: none;
`;

const FullScreenMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-white);
  opacity: 1;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  border: none;
  color: var(--primary-default);
  font-size: 24px;
  cursor: pointer;
`;

const NavbarContainer = styled.div`
  width: 80%;
  max-width: 400px;
`;

const MobileRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const MobileHamburgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <MenuContainer>
        <MobileLeftSection></MobileLeftSection>
        <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
          <HamburgerIcon />
        </HamburgerButton>
      </MenuContainer>

      <FullScreenMenu $isOpen={isMenuOpen}>
        <CloseButton onClick={toggleMenu} aria-label="Close menu">
          ✕
        </CloseButton>

        <MobileRightSection>
          <RightSectionContent />
        </MobileRightSection>

        <NavOptions onNavItemClick={closeMenu} />
        <NavbarContainer></NavbarContainer>
      </FullScreenMenu>
    </>
  );
};

export default MobileHamburgerMenu;
