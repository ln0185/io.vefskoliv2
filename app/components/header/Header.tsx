"use client";

import { useState, useRef, useEffect } from "react";
import { NotificationIconContainer } from "UIcomponents/toggle/style";
import { SearchIcon, NotificationIcon } from "assets/Icons";
import {
  LeftSection,
  RightSection,
  IconButton,
  SearchInputContainer,
  SearchInput,
  NotificationDropdown,
} from "./style";

import { Profile } from "components/profile/profile";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { AdapterUser } from "next-auth/adapters";

type Props = {
  session?: Session;
};

export const RightSectionContent = () => {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
    setShowSearch(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!session) return null;

  return (
    <>
      <SearchInputContainer ref={searchRef}>
        {showSearch ? (
          <form onSubmit={handleSearch}>
            <SearchInput
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              autoFocus
            />
          </form>
        ) : (
          <IconButton onClick={() => setShowSearch(true)}>
            <SearchIcon size="20" />
          </IconButton>
        )}
      </SearchInputContainer>
      <NotificationDropdown>
        <NotificationIcon size="20" />
      </NotificationDropdown>
      <Profile session={session} />
    </>
  );
};

export const Header = ({ session }: Props) => {
  const user = session?.user as AdapterUser;

  return (
    <>
      <LeftSection>
        <h1>Hi, {user?.name}</h1>
        <p>Let's finish your task today!</p>
      </LeftSection>

      <RightSection>
        <RightSectionContent />
      </RightSection>
    </>
  );
};
