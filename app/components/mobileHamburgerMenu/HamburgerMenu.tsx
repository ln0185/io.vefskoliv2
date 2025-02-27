"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HamburgerIcon } from "assets/Icons";
import NavOptions from "components/navOpitons/NavOptions";
import { useSession } from "next-auth/react";
import { RightSection } from "components/header/style";
import { RightSectionContent } from "components/header/Header";

// Styled components for the hamburger menu
const MenuContainer = styled.div`
  display: none; /* Hidden by default on desktop */

  /* Show only on mobile */
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

const MobileRightSection = styled(RightSection)`
  @media (max-width: 768px) {
    margin-right: auto; /* Push to the left side */
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

const FullScreenMenu = styled.div<{ isOpen: boolean }>`
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
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  overflow-y: auto; /* Allow scrolling within the menu if needed */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
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

const MobileHamburgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  // Handle body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling on the body
      document.body.style.overflow = "hidden";
      // Store the current scroll position
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Re-enable scrolling when menu is closed
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    // Cleanup function to ensure scrolling is re-enabled if component unmounts
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
        <MobileRightSection>
          <RightSectionContent />
        </MobileRightSection>
        <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
          <HamburgerIcon />
        </HamburgerButton>
      </MenuContainer>

      <FullScreenMenu isOpen={isMenuOpen}>
        <CloseButton onClick={toggleMenu} aria-label="Close menu">
          ✕
        </CloseButton>
        {/* Pass closeMenu function to NavOptions */}
        <NavOptions onNavItemClick={closeMenu} />
        <NavbarContainer>
          {/* Your navbar component goes here */}
        </NavbarContainer>
      </FullScreenMenu>
    </>
  );
};

export default MobileHamburgerMenu;