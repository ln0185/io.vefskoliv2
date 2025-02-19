"use client";

import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
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
  SidebarIcon,
  VefskolinnLogo,
} from "assets/Icons";
import Link from "next/link";
import { div } from "framer-motion/client";
import { usePathname } from "next/navigation";

type Link = { page: string; title: string; icon: ReactNode };
export type NavBarProps = { links: Link[] };

const links: Link[] = [
  { page: "/dashboard", title: "Home", icon: <HomeIcon /> },
  { page: "/resources", title: "Resources", icon: <ResourcesIcon /> },
  { page: "/halloffame", title: "Hall of Fame", icon: <HallOfFameIcon /> },
  { page: "/people", title: "People", icon: <PeopleIcon /> },
  { page: "/calendar", title: "Calendar", icon: <CalendarIcon /> },
  { page: "/lecture", title: "Lecture", icon: <LectureIcon /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2 flex flex-col items-center"
      style={{
        width: open ? "330px" : "fit-content",
      }}
    >
      <TitleSection open={open} setOpen={setOpen} />
      <LogoSection open={open} />

      <div className={`space-y-1 ${open ? "w-[230px]" : "w-full"}`}>
        {links.map((link) => (
          <Option
            key={link.page}
            Icon={link.icon}
            title={link.title}
            selected={pathname.includes(link.page)}
            open={open}
            href={link.page}
          />
        ))}
      </div>
    </motion.nav>
  );
}

const Option = ({
  Icon,
  title,
  selected,
  open,
  href,
}: {
  Icon: ReactNode;
  title: string;
  selected: boolean;
  open: boolean;
  href: string;
}) => {
  return (
    <Link
      href={href}
      // layout
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected
          ? "bg-indigo-100 text-indigo-800"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        {Icon}
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
        open ? "justify-between" : "justify-center"
      }`}
    >
      {open && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
        >
          <button>
            <DarkModeIcon />
          </button>
        </motion.div>
      )}
      <motion.button layout onClick={() => setOpen((pv) => !pv)}>
        <SidebarIcon />
      </motion.button>
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
    </motion.div>
  );
};
