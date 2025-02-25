import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

// Styled Components
export const SidebarContainer = styled(motion.div)`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
`;

interface OpenProps {
  $isOpen: boolean;
}

export const Nav = styled(motion.nav)<OpenProps>`
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: var(--primary-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem;
  width: ${(props) => (props.$isOpen ? "300px" : "fit-content")};
  height: calc(100vh - 30px);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding-top: 1rem;
`;

export const LinksContainer = styled.div<OpenProps>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: ${(props) => (props.$isOpen ? "230px" : "100%")};
`;

export const TitleContainer = styled.div<OpenProps>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${(props) => (props.$isOpen ? "flex-end" : "center")};
  padding-right: ${(props) => (props.$isOpen ? "1rem" : 0)};
`;

export const SidebarButton = styled(motion.button)`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:hover svg path {
    stroke: var(--primary-default);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled(motion.div)``;

export const LogoPlaceholder = styled.div`
  height: 100px;
`;

interface SelectedProps {
  $isSelected: boolean;
}

export const NavLink = styled(Link)<SelectedProps>`
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 100%;
  align-items: center;
  border-radius: 0.375rem;
  transition: color 0.2s, background-color 0.2s;
  background-color: ${(props) =>
    props.$isSelected ? "var(--primary-light-blue)" : "transparent"};
  color: ${(props) =>
    props.$isSelected
      ? "var(--primary-default)"
      : "var(--secondary-light-300)"};

  &:hover {
    background-color: ${(props) =>
      props.$isSelected
        ? "var(--primary-light-blue)"
        : "var(--primary-light-blue)"};
  }
`;

export const IconWrapper = styled(motion.div)`
  display: grid;
  height: 100%;
  width: 2.5rem;
  place-content: center;
  font-size: 1.125rem;
`;

export const LinkText = styled(motion.span)`
  font-size: 1rem;
  font-weight: 500;
`;

export const DarkModeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1.5rem;
`;
