import { Wrapper } from "globalStyles/globalStyles";
import Link from "next/link";
import { DesignIcon as Icon } from "assets/Icons";
import styled from "styled-components";

export const GuideCardContainer = styled.div`
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #dddeeb;
    border-radius: 20px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  width: 100%;
  height: 100%;

  // background for guide cards//
  &:hover {
    background-color: #dddeeb;
    border-radius: 20px;
  }
`;

export const Info = styled(Wrapper)`
position:relative
  justify-content: space-between;
  height: 100%;
  align-items: start;
  padding: 1.625rem 1.875rem;
`;

export const GuideNr = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  align-self: start;
  padding-top: 1rem;
  color: #141522;
`;

export const Name = styled.p`
  font-size: 0.875rem;
  width: 100%;
  font-weight: 400;
  text-align: start;
  color: #8e92bc;
`;

export const GuideDescription = styled(Wrapper)`
  flex: 1;
  justify-content: center;
  text-align: center;
  align-items: start;
`;

export const DesignIcon = styled(Icon)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 30px;
  height: 28px;
`;
export const Tag = styled.div<{ status: string }>`
  position: absolute;
  right: 1.875rem;
  top: 1.625rem;
  width: 5.625rem;
  height: 1.875rem;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${(props) =>
      props.status === "Due"
        ? "var(--primary-default)"
        : props.status === "Waiting"
        ? "var(--waiting-text)"
        : props.status === "Fail"
        ? "var(--fail-text)"
        : props.status === "Pass ✔"
        ? "var(--pass-text)"
        : "var(--primary-default)"};
  }
  background-color: ${(props) =>
    props.status === "Due"
      ? " var(--primary-light-100)"
      : props.status === "Waiting"
      ? "var(--waiting-bg)"
      : props.status === "Fail"
      ? "var(--fail-bg)"
      : props.status === "Pass ✔"
      ? "var(--pass-bg)"
      : "var(--default-color)"};
`;
