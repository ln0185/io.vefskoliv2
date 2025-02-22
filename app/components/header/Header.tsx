"use client";

import Image from "next/image";
import {
  HeaderContainer,
  LeftSection,
  RightSection,
  UserInfo,
  IconButton,
} from "./style";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      {/* Left Section */}
      <LeftSection>
        <h1>Hi, Hulda</h1>
        <p>Let’s finish your task today!</p>
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        <IconButton>
          <Image
            src="/search-icon.png" // our search icon
            alt="Search"
            width={20}
            height={20}
          />
        </IconButton>
        <IconButton>
          <Image
            src="/notification-icon.png" // our notification icon
            alt="Notifications"
            width={20}
            height={20}
          />
        </IconButton>
        <UserInfo>
          <Image
            src="/profile.jpg" // our prifle pictue from figma here
            alt="User Profile"
            width={36}
            height={36}
            style={{ borderRadius: "50%" }}
          />
        </UserInfo>
      </RightSection>
    </HeaderContainer>
  );
};
