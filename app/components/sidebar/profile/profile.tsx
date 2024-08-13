"use client";
import {
  ProfileImage,
  ProfileImageContainer,
  ProfileName,
  ProfileWrapper,
  ModalContent,
  ExitAndLogoutWrapper,
  LogoutButton,
  LogoutIcon,
  Form,
  ProfileDetails,
  AdditionalInfo,
  ButtonWrapper,
} from "./style";
import { useState } from "react";
import Modal from "../../modal/modal";
import Input from "../../../globalStyles/input";
import ExitButton from "../../../globalStyles/buttons/exit";
import logouticon from "../../../assets/logout.svg";
import DefaultButton from "../../../globalStyles/buttons/default";
import { signOut } from "../../../utils/actions";
import { useSession } from "next-auth/react";
import DefaultUserPic from "../../../../public/defaultuser.svg";
import { UserWithIdType } from "../../../models/user";


export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  //getting the user from session
  const { data: session } = useSession();
  const user = session?.user as UserWithIdType;
  console.log("session", session);

  const DefaultUserPic = "/defaultuser.svg";
  return (
    <>
      <ProfileWrapper>
        <ProfileImageContainer>
          <ProfileImage
            onClick={() => setIsModalOpen(!isModalOpen)}
            src={user.avatarUrl ? user.avatarUrl : DefaultUserPic}
            alt="student picture"
          />
        </ProfileImageContainer>
        <ProfileName>{user.name}</ProfileName>
      </ProfileWrapper>

      {isModalOpen && (
        <Modal onClick={() => setIsModalOpen(!isModalOpen)} shouldShow={isModalOpen}>
          <ModalContent>
            <ExitAndLogoutWrapper>
              <ExitButton onClick={()=> setIsModalOpen(!isModalOpen)} />
              <LogoutButton onClick={async ()=> await signOut()}><LogoutIcon alt="hello" src={logouticon}/></LogoutButton>
            </ExitAndLogoutWrapper>
            <ProfileDetails>
              <ProfileImageContainer>
              <ProfileImage
                src={user.avatarUrl ? user.avatarUrl : DefaultUserPic}
                alt="student picture"
              />
              </ProfileImageContainer>
              <ProfileName style={{fontSize:"16px"}}>{user.name}</ProfileName>
              <AdditionalInfo>{user.role}</AdditionalInfo>
              <AdditionalInfo style={{color:"var(--primary-black-100)"}}>{user.email}</AdditionalInfo>
            </ProfileDetails>
            <Form>
              <Input type="text" placeholder={user.background} label="BACKGROUND"/>
              <Input type="text" placeholder={user.careerGoals} label="NEAR FUTURE CAREER GOALS"/>
              <Input type="text" placeholder={user.interests} label="MAIN INTERESTS"/>
              <Input type="text" placeholder={user.favoriteArtists} label="FAVORITE BAND/ARTIST"/>
            </Form>
            <ButtonWrapper>
              <DefaultButton style="default">SAVE</DefaultButton>
              <DefaultButton style="outlined">CHANGE PASSWORD</DefaultButton>
            </ButtonWrapper>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
