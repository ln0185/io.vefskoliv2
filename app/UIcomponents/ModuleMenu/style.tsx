"use client";
import styled, { keyframes } from "styled-components";

const radius = "8px";
const minHeightSmall = "42px";
const minHeightLarge = "54px";
const maxHeight = "500px";
export const animationDuration = 0.2;
const breakPoint = "768px";

const fadeInSmall = keyframes`
  0% {
    max-height: ${minHeightSmall};
  }
  100% {
    max-height: ${maxHeight}; 
  }
`;

const fadeInLarge = keyframes`
  0% {
    max-height: ${minHeightLarge};
  }
  100% {
    max-height: ${maxHeight}; 
  }
`;

const fadeOutSmall = keyframes`
  0% {
    max-height: ${maxHeight};
  }
  100% {
    max-height: ${minHeightSmall};
  }
`;

const fadeOutLarge = keyframes`
  0% {
    max-height: ${maxHeight};
  }
  100% {
    max-height: ${minHeightLarge};
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 5px;
`;

export const DropDownContainer = styled.div<{
  $isOpen: boolean;
  $zIndex?: number;
}>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  z-index: ${(props) => props.$zIndex ?? 2};
  top: 0;
  overflow: hidden;
  max-height: ${(props) => (props.$isOpen ? maxHeight : minHeightSmall)};
  animation: ${(props) => (props.$isOpen ? fadeInSmall : fadeOutSmall)}
    ${animationDuration}s ease-in-out;

  @media (min-width: ${breakPoint}) {
    max-height: ${(props) => (props.$isOpen ? maxHeight : minHeightLarge)};
    animation: ${(props) => (props.$isOpen ? fadeInLarge : fadeOutLarge)}
      ${animationDuration}s ease-in-out;
  }
`;

export const AccordianOptionContainer = styled.button`
  padding: 10px 20px;
  color: #8e92bc;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--primary-default);
  }

  &:focus {
    outline: none;
  }
`;
