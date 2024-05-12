"use client"
import styled from "styled-components";
import nextImage from "next/image";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ProfileImageContainer = styled.div`
  width: 142px;
  height: 142px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #6563EB;
`;

export const ProfileImage = styled.img`
  width: 142px;
  height: auto;
`;


export const ProfileName = styled.h2`
  font-size: 24px;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 50%;
  margin: 0 auto;
  padding: 16px;
  border-radius: 8px;
  z-index: 11;
`;