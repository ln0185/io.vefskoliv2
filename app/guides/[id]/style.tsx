"use client"
import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    padding: 32px;
    gap: 32px;
`

export const Content = styled.div`
    display:grid;
    grid-template-columns: 8fr 3fr;
    grid-template-areas: "main side";
    gap: 42px;
`

export const Main = styled.div`
    grid-area: main;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const Side = styled.div`
    grid-area: side;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const Wrapper = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    `;

export const Border = styled(Wrapper)`
    border: 1px solid var(--theme-module3-100);
    padding: 16px;
    border-radius: 8px;
`;

export const SubTitle = styled.h2`
    font-size: 16px;
    color: var(--theme-module3-100);
    `;

export const BlackSubTitle = styled(SubTitle)`
    font-size: 16px;
    color: var(--primary-black-100);
    `;

export const Title = styled.h1`
    font-size: 24px;
    grid-area: main;
`;

export const styledLink = styled(Link)`
    text-align: left;
`