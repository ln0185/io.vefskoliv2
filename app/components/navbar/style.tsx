"use client"
import styled from 'styled-components'

export const NavbarButton = styled.a`
    background-color: var(--primary-white);
    border: solid 1px var(--theme-module3-100);
    width: 128px;
    color: var(--theme-module3-100);
    text-align: center;
    font-size: 15px;
    padding: 10px;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
        background-color: var(--primary-black-10);
    }
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
`

