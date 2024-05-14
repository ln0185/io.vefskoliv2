import styled from "styled-components";

type ButtonProps = {
    styleType: "default" | "outlined";
    }

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.styleType === "default" ? "var(--theme-module3-100)" : "transparent"};
  border: ${props => props.styleType === "default" ? "none" : "1px solid var(--theme-module3-100)"};
  color: ${props => props.styleType === "default" ? "var(--primary-white)" : "var(--theme-module3-100)"};
  border-radius: 8px;
  font-size: 12px;
  padding: ${props => props.styleType === "default" ? "8px 24px" : "8px 48px"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${props => props.styleType === "default" ? "var(--theme-module3-hover)" : "var(--primary-black-10)"};
  }
`;