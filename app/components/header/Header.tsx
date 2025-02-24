"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Bell } from "assets/Icons";
import {
  HeaderContainer,
  LeftSection,
  RightSection,
  IconButton,
  NotificationDropdown,
} from "./style";
import { Profile } from "components/profile/profile";

export const Header: React.FC = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name || "User";

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsNotificationsOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      {}
      <LeftSection>
        <h1>Hi, {userName}</h1>
        <p>Let’s finish your task today!</p>
      </LeftSection>

      {}
      <RightSection>
        {}
        <div style={{ position: "relative" }}>
          <IconButton
            onClick={handleNotificationClick}
            aria-label="Notifications"
          >
            <Bell />
          </IconButton>
          {isNotificationsOpen && (
            <NotificationDropdown>
              <p>No new notifications</p>
            </NotificationDropdown>
          )}
        </div>

        {}
        <Profile session={session} />
      </RightSection>
    </HeaderContainer>
  );
};
