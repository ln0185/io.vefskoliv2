"use client";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IconType } from "react-icons";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import {
  HomeIcon,
  ResourcesIcon,
  HallOfFameIcon,
  PeopleIcon,
  CalendarIcon,
  LectureIcon,
  DarkModeIcon,
  LightModeIcon,
  SidebarIcon,
  VefskolinnLogo,
} from "assets/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "components/modeSwitch/ModeSwitch";

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
    <div className="relative h-screen flex items-start justify-start p-4">
      <motion.nav
        layout
        className="rounded-xl shadow-md border border-slate-300 bg-white flex flex-col justify-between px-2"
        style={{
          width: open ? "300px" : "fit-content",
          height: "calc(100vh - 30px)",
        }}
      >
        <div className="flex flex-col gap-8 items-center pt-4">
          <TitleSection open={open} setOpen={setOpen} />
          <LogoSection open={open} />

          <div
            className={`flex flex-col gap-3 ${open ? "w-[230px]" : "w-full"}`}
          >
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
          </div>
        </div>
        {open && (
          <div className="flex justify-end items-end p-6">
            <ThemeToggle />
          </div>
        )}
      </motion.nav>
    </div>
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
    <Link
      href={href}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected
          ? "bg-[#E8F3FF] text-[#007AFF]"
          : "text-[#8E92BC] hover:bg-[#FAFAFA]"
      }`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon
          stroke={
            selected ? "var(--primary-default)" : "var(--secondary-light-300)"
          }
        />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}
    </Link>
  );
};

const LogoSection = ({ open }: { open: boolean }) => {
  return (
    <div className="flex items-center justify-center">
      {open && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
        >
          <VefskolinnLogo width="100" height="100" />
        </motion.div>
      )}
      {!open && <div className="h-[100px]"></div>}
    </div>
  );
};

const TitleSection = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`flex item-center w-full ${
        open ? "justify-end pr-4" : "justify-center"
      }`}
    >
      <motion.button
        layout
        onClick={() => setOpen((pv) => !pv)}
        className="cursor-pointer"
      >
        <SidebarIcon />
      </motion.button>
    </div>
  );
};
