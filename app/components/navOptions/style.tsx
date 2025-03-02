import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

interface OpenProps {
  $isOpen: boolean;
}

interface SelectedProps {
  $isSelected: boolean;
}

export const LinksContainer = styled.div<OpenProps>`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 0.75rem;
  width: ${(props) => (props.$isOpen ? "230px" : "100%")};
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const NavLink = styled(Link)<SelectedProps>`
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 100%;
  align-items: center;
  border-radius: 0.375rem;
  transition: color 0.15s ease, background-color 0.15s ease;
  background-color: ${(props) =>
    props.$isSelected ? "var(--primary-light-blue)" : "transparent"};
  color: ${(props) =>
    props.$isSelected
      ? "var(--primary-default)"
      : "var(--secondary-light-300)"};

  &:hover {
    background-color: var(--primary-light-blue);
    color: var(--primary-default);
  }
`;

// export const NavLink = styled(Link)<SelectedProps>`
//   position: relative;
//   display: flex;
//   height: 2.5rem;
//   width: 100%;
//   align-items: center;
//   border-radius: 0.375rem;
//   transition: color 0.2s, background-color 0.2s;
//   background-color: ${(props) =>
//     props.$isSelected ? "var(--primary-light-blue)" : "transparent"};
//   color: ${(props) =>
//     props.$isSelected
//       ? "var(--primary-default)"
//       : "var(--secondary-light-300)"};

//   &:hover {
//     background-color: ${(props) =>
//       props.$isSelected
//         ? "var(--primary-light-blue)"
//         : "var(--primary-light-blue)"};
//   }
// `;

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
    @media (max-width: 768px) {
   font-size: 1.5rem;
`;
