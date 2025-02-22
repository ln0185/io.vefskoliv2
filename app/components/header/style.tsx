"use client";

import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    color: #808080;
    margin-top: 4px;
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
    background: #fafafa;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
