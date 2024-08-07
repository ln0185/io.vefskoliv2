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

type Props = {};
export const Profile = ({}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const session = useSession();
  console.log("session", session);
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
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dummy student picture"
              />
              </ProfileImageContainer>
              <ProfileName style={{fontSize:"16px"}}>Hulda Ragnarsdóttir</ProfileName>
              <AdditionalInfo>STUDENT</AdditionalInfo>
              <AdditionalInfo style={{color:"var(--primary-black-100)"}}>hulda.ragnars@gmail.com</AdditionalInfo>
            </ProfileDetails>
            <Form>
              <Input type="text" placeholder="I'm am a lawyer" label="BACKGROUND"/>
              <Input type="text" placeholder="I want to be good designer and coder" label="NEAR FUTURE CAREER GOALS"/>
              <Input type="text" placeholder="Playing video games" label="MAIN INTERESTS"/>
              <Input type="text" placeholder="KISS" label="FAVORITE BAND/ARTIST"/>
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
