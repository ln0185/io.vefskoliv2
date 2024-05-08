'use client'
import styled from 'styled-components';

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  grid-template-rows: 1fr 15fr;
  grid-template-areas: 
    "sidebar navbar" 
    "sidebar main";
  gap: 5rem;
  padding: 5rem;
`;

export const Sidebar = styled.div`
  background: #aaffaa;
  max-height: 100vh;
  grid-area: sidebar;
`
export const Navbar = styled.div`
  background: #ffaaaa;
  max-width: 100%;
  grid-area: navbar;
`
export const Main = styled.div`
    max-width: 100%;
    height: 69dvh;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 7px 8px rgba(139, 139, 139, 0.25);
    gap: 5rem;
    border-radius: 4.2rem;
    padding: 5rem;
    transition: 1s ease-in-out;
    overflow-y: scroll;
    overflow-x: hidden;
    grid-area: main;
` 