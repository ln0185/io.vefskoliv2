"use client";

import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
`;

export const ModulesList = styled.div`
  display: flex;
  gap: 20px;
`;

export const ModuleItem = styled.div<{ active: boolean }>`
  font-size: 14px;
  color: ${({ active }) => (active ? "#0066ff" : "#808080")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  border-bottom: ${({ active }) => (active ? "2px solid #0066ff" : "none")};
  cursor: pointer;
  padding-bottom: 5px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #004bcc;
  }
`;

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: #fafafa;
  border: 1px solid #ddd;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #808080;
  font-size: 14px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #fafafa;
  }
`;

export const SortDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 120px;
  padding: 5px 0;

  div {
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    color: #808080;
    transition: background 0.2s;

    &:hover {
      background: #fafafa;
    }
  }
`;
