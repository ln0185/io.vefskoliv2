"use client";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
`;

export const ModuleContainer = styled.div<{
  $zIndex?: number;
}>`
  display: flex;
  gap: 10px;
  width: 100%;
  z-index: ${(props) => props.$zIndex ?? 2};
`;

export const ModuleOptionContainer = styled.button`
  padding: 10px 20px;
  color: #8e92bc;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--primary-default);
  }

  &:focus {
    outline: none;
  }

  &.active {
    background-color: #f0f0f0;
  }
`;
export const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #0056b3;
  }
`;
export const FilterContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const FilterDropdown = styled.div`
  position: absolute;
  right: 0;
  margin-top: 8px;
  width: 150px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;

  z-index: 50;
`;

export const FilterItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #f5f5f5;
  }
`;

export const FilterButtonStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  color: #8e92bc;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #f5f5f5;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
