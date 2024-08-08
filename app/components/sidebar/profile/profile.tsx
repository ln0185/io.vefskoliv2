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
import Defaultuser from "../../../../public/defaultuser.svg";


export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const session = useSession();
  console.log("session", session);

  //creating a placeholder image if avatarUrl is empty
  if (session?.data?.user?.avatarUrl === "") {
    session.data.user.avatarUrl = "https://raw.githubusercontent.com/ellertsmari/io.vefskoliv2/84c5d37f267d240f7c3172c28474e350b30e97f1/public/Defaultuser.svg";
  }
  return (
    <>
      <ProfileWrapper>
        <ProfileImageContainer>
          <ProfileImage
            onClick={() => setIsModalOpen(!isModalOpen)}
            src={session?.data?.user?.avatarUrl}
            alt="student picture"
          />
        </ProfileImageContainer>
        <ProfileName>{session?.data?.user?.name}</ProfileName>
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
                src={session?.data?.user?.avatarUrl}
                alt="student picture"
              />
              </ProfileImageContainer>
              <ProfileName style={{fontSize:"16px"}}>{session?.data?.user?.name}</ProfileName>
              <AdditionalInfo>{session.data?.user?.role}</AdditionalInfo>
              <AdditionalInfo style={{color:"var(--primary-black-100)"}}>{session.data?.user?.email}</AdditionalInfo>
            </ProfileDetails>
            <Form>
              <Input type="text" placeholder={session.data?.user?.background} label="BACKGROUND"/>
              <Input type="text" placeholder={session.data?.user?.careerGoals} label="NEAR FUTURE CAREER GOALS"/>
              <Input type="text" placeholder={session.data?.user?.interests} label="MAIN INTERESTS"/>
              <Input type="text" placeholder={session.data?.user?.favoriteArtists} label="FAVORITE BAND/ARTIST"/>
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
