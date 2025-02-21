"use client";

import styled from "styled-components";

const BREAKPOINT = "1200px";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  padding: 1.5rem 1.5rem;
`;

export const GuideDropdownContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  @media (min-width: ${BREAKPOINT}) {
    justify-content: flex-start;
  }
`;
