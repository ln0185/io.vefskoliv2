import styled from "styled-components";
import { Button } from "./buttons/default/style";
import { BREAKPOINT_DESKTOP } from "./globalConstants";
import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--secondary-dark);
`;

export const FullScreenWrapper = styled(Wrapper)`
  align-items: center;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
`;

export const Border = styled(Wrapper)`
  border: 1px solid var(--secondary-dark);
  border-radius: 1.3rem;
`;

export const MaterialButton = styled(Button)`
  text-align: left;
  padding: 0.5rem 0.75rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
`;

export const FlexibleWrapper = styled(Wrapper)`
  @media (min-width: ${BREAKPOINT_DESKTOP}) {
    flex-direction: row;
    color: var(--secondary-dark);
  }
`;

const Toast = styled.div`
  padding: 16px;
  top: 100px;
  position: absolute;
  color: var(--secondary-dark);
  border-radius: 20px;
  z-index: 1000;
`;

export const ErrorToast = styled(Toast)`
  background-color: var(--secondary-dark);
  border: 1px solid var(--secondary-dark);
  color: var(--secondary-dark);
`;

export const SuccessToast = styled(Toast)`
  background-color: var(--secondary-dark);
  border: 1px solid var(--secondary-dark);
  color: var(--secondary-dark);
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
`;

export const UnstyledLinkNoWrap = styled(UnstyledLink)`
  white-space: nowrap;
  color: var(--secondary-dark);
`;
