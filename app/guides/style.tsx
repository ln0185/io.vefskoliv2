"use client"

import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    gap: 48px; /* Adjust the gap between grid items as needed */
    grid-template-columns: repeat(4, 1fr);
    padding: 32px;
`;
