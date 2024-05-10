'use client'
import styled from 'styled-components';

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  grid-template-rows: 1fr 15fr;
  grid-template-areas: 
    "sidebar navbar" 
    "sidebar main";
  padding: 2rem;
  gap: 2rem;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  max-height: 100vh;
  grid-area: sidebar;
  border-radius:.8rem;
`
export const NavbarContainer = styled.div`
  max-width: 100%;
  border-radius: 0.8rem;
  grid-area: navbar;
`
export const Main = styled.div`
    max-width: 100%;
    display: flex;
    background-color: white;
    border: solid 1px #6563EB;
    flex-direction: column;
    border-radius: 0.8rem;
    transition: 1s ease-in-out;
    overflow-y: scroll;
    overflow-x: hidden;
    grid-area: main;
` 