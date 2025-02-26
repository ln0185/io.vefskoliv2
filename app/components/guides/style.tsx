"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  padding: 5px;
  padding-left: 10px;
`;

export const ModuleContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const ModuleOptionContainer = styled.button<{ $isActive: boolean }>`
  padding: 10px 20px;
  color: var(--secondary-light-300);
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background: none;
  position: relative;

  &:hover {
    color: var(--primary-default);
  }

  &:focus {
    outline: none;
  }

  ${({ $isActive }) =>
    $isActive
      ? ` 
        color: var(--primary-default);
        font-weight: bold;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--primary-default);
        }
      `
      : ""}
`;

export const GradeAverageContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: end;
  padding-right: 30px;
`;

export const AverageRow = styled.div`
  margin-bottom: 10px;
  width: auto;
  margin-right: 13%;
  margin-bottom: 37px;
  height: auto;
  align-self: center;
  padding: 14px 27px;
  border: solid 1px;
  border-color: var(--secondary-light-300);
  border-radius: 36px;
`;

export const AverageLabel = styled.strong<{ color?: string }>`
  font-size: 16px;
  color: ${({ color }) => color || "var(--secondary-light-300)"};
  font-weight: 600;
`;

export const AverageValue = styled.span<{ $isPassed: boolean }>`
  color: ${({ $isPassed }) =>
    $isPassed ? "var(--pass-text)" : "var(--fail-text)"};
  font-weight: bold;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  width: 17.5rem;
  margin-bottom: 44px;
`;

export const ProgressText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-default);
`;
