"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import {
  HomeIcon,
  ResourcesIcon,
  HallOfFameIcon,
  PeopleIcon,
  CalendarIcon,
  LectureIcon,
  SidebarIcon,
  VefskolinnLogo,
} from "assets/Icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DarkModeToggle } from "components/darkmode/darkmode";
import {
  Nav,
  ContentContainer,
  DarkModeContainer,
  LinksContainer,
  LogoContainer,
  LogoPlaceholder,
  LogoWrapper,
  SidebarButton,
  SidebarContainer,
  NavLink,
  LinkText,
  IconWrapper,
  TitleContainer,
  ToDoContainer,
  Title,
  ToDoButton,
  ModuleText,
  GuideText,
  MultiToDoContainer,
} from "./style";

type IconProps = {
  stroke?: string;
};

type Link = {
  page: string;
  title: string;
  icon: React.ComponentType<IconProps>;
};

export type NavBarProps = { links: Link[] };

const links: Link[] = [
  { page: "/", title: "Home", icon: HomeIcon },
  { page: "/resources", title: "Resources", icon: ResourcesIcon },
  { page: "/halloffame", title: "Hall of Fame", icon: HallOfFameIcon },
  { page: "/people", title: "People", icon: PeopleIcon },
  { page: "/calendar", title: "Calendar", icon: CalendarIcon },
  { page: "/lecture", title: "Lecture", icon: LectureIcon },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const isLinkSelected = (pathname: string, linkPath: string): boolean => {
    if (linkPath === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(linkPath);
  };

  return (
    <SidebarContainer>
      <Nav layout $isOpen={open}>
        <ContentContainer>
          <SidebarToggle open={open} setOpen={setOpen} />
          <LogoSection open={open} />

          <LinksContainer $isOpen={open}>
            {links.map((link) => (
              <Option
                key={link.page}
                Icon={link.icon}
                title={link.title}
                selected={isLinkSelected(pathname, link.page)}
                open={open}
                href={link.page}
              />
            ))}
          </LinksContainer>
          <MultiToDoContainer>
            <ToDo
              title={"Today"}
              moduleNumber={4}
              guideNumber={3}
              description={"React props"}
              open={open}
              href="/guides/653a11abf57a20f9a5d911e6"
            />
            <ToDo
              title={"Tomorrow"}
              moduleNumber={4}
              guideNumber={4}
              description={"React state"}
              open={open}
              href="/guides/653a73397a41e11fa6e5423f"
            />
          </MultiToDoContainer>
        </ContentContainer>

        {open && (
          <DarkModeContainer>
            <DarkModeToggle />
          </DarkModeContainer>
        )}
      </Nav>
    </SidebarContainer>
  );
}

const Option = ({
  Icon,
  title,
  selected,
  open,
  href,
}: {
  Icon: React.ComponentType<IconProps>;
  title: string;
  selected: boolean;
  open: boolean;
  href: string;
}) => {
  return (
    <NavLink href={href} $isSelected={selected}>
      <IconWrapper layout>
        <Icon
          stroke={
            selected ? "var(--primary-default)" : "var(--secondary-light-300)"
          }
        />
      </IconWrapper>
      {open && (
        <LinkText
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
        >
          {title}
        </LinkText>
      )}
    </NavLink>
  );
};

const LogoSection = ({ open }: { open: boolean }) => {
  return (
    <LogoContainer>
      {open ? (
        <LogoWrapper
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
        >
          <VefskolinnLogo
            width="100"
            height="100"
            color="var(--primary-default)"
          />
        </LogoWrapper>
      ) : (
        <LogoPlaceholder />
      )}
    </LogoContainer>
  );
};

const SidebarToggle = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <TitleContainer $isOpen={open}>
      <SidebarButton layout onClick={() => setOpen((pv) => !pv)}>
        <SidebarIcon />
      </SidebarButton>
    </TitleContainer>
  );
};

type ToDoProps = {
  title?: string;
  moduleNumber?: number;
  guideNumber?: number;
  description?: string;
  open: boolean;
  href: string;
};

const ToDo = ({
  title,
  moduleNumber,
  guideNumber,
  description,
  open,
  href,
}: ToDoProps) => {
  const router = useRouter();
  return (
    <>
      {open && (
        <ToDoContainer>
          <Title>{title}</Title>
          <ToDoButton onClick={() => router.push(href)}>
            <ModuleText>Module {moduleNumber}</ModuleText>
            <GuideText>
              Guide {guideNumber} - {description}
            </GuideText>
          </ToDoButton>
        </ToDoContainer>
      )}
    </>
  );
};
