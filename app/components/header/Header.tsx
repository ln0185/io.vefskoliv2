"use client";

import { useState, useRef, useEffect } from "react";
import { SearchIcon, Bell } from "assets/Icons";
import {
  HeaderContainer,
  LeftSection,
  RightSection,
  IconButton,
  SearchInputContainer,
  SearchInput,
  NotificationDropdown,
} from "./style";

import { Profile } from "components/profile/profile";
import { Session } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
type Props = {
  session: Session;
};
export const Header = ({ session }: Props) => {
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
  const user = session?.user as AdapterUser;
  return (
    <HeaderContainer>
      <LeftSection>
        <h1>Hi, {user.name}</h1>
        <p>Let’s finish your task today!</p>
      </LeftSection>

      <RightSection>
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
              <SearchIcon />
            </IconButton>
          )}
        </SearchInputContainer>

        <div ref={notificationRef}>
          <IconButton onClick={() => setShowNotifications((prev) => !prev)}>
            <Bell color="#8E92BC" />
          </IconButton>
          {showNotifications && (
            <NotificationDropdown>
              <p>No new notifications</p>
            </NotificationDropdown>
          )}
        </div>

        <IconButton as="div">
          <Profile session={session} />
        </IconButton>
      </RightSection>
    </HeaderContainer>
  );
};
