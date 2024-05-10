import { NavbarButton, Nav } from "./style";

type Props = {
 
}

export const Navbar = ({}: Props) => {
    return ( 
        <Nav>
            <NavbarButton href="/">HOME</NavbarButton>
            <NavbarButton href="/guides">GUIDES</NavbarButton>
            <NavbarButton href="/resources">RESOURCES</NavbarButton>
            <NavbarButton href="/halloffame">HALL OF FAME</NavbarButton>
            <NavbarButton href="/people">PEOPLE</NavbarButton>
            <NavbarButton href="/calendar">CALENDAR</NavbarButton>
        </Nav>
    );
}