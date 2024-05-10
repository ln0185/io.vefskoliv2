"use client";
import {
  ProfileImage,
  ProfileImageContainer,
  ProfileName,
  ProfileWrapper,
} from "./style";
import { useState } from "react";
import Modal from "../../modal/modal";

type Props = {};
export const Profile = ({}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ProfileWrapper>
        <ProfileImageContainer>
          <ProfileImage
            onClick={() => setIsModalOpen(!isModalOpen)}
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dummy student picture"
          />
        </ProfileImageContainer>
        <ProfileName>Dummy student name</ProfileName>
      </ProfileWrapper>
      {isModalOpen && (
        <Modal shouldShow={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
          <div>Hello</div>
        </Modal>
      )}
    </>
  );
};
