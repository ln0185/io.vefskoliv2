"use client"
import styled from 'styled-components'

export const NavbarButton = styled.a`
    background-color: white;
    border: solid 1px #6563EB;
    width: 128px;
    color: #6563EB;
    text-align: center;
    font-size: 15px;
    padding: 10px;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
        background-color: #cfcfcf;
    }
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
`

