"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled(motion.div)`
  width: 100%;
  height: 6.25rem;
  background-color: var(--primary-light-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 10px 15px;
    height: 4.5rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: var(--secondary-dark);
  }
  p {
    font-size: 16px;
    margin-top: 4px;
    color: var(--secondary-light-300);
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: var(--primary-light-grey);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInputContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 150px;
`;

export const NotificationDropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-size: 14px;
  z-index: 10;
`;
