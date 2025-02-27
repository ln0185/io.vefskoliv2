import {
  HomeIcon,
  ResourcesIcon,
  HallOfFameIcon,
  PeopleIcon,
  CalendarIcon,
  LectureIcon,
} from "assets/Icons";
import { LinksContainer, NavLink, IconWrapper, LinkText } from "./style";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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

export default function NavOptions({ open = true }: { open?: boolean }) {
  const pathname = usePathname();

  const isLinkSelected = (pathname: string, linkPath: string): boolean => {
    if (linkPath === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(linkPath);
  };
  return (
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
