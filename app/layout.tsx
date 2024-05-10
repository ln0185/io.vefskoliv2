import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globalStyles/globals.css";
import StyledComponentsRegistry from "./utils/registry";
import AnimatedBackground from "./globalStyles/animatedBackground";
import {LayoutGrid, SidebarContainer, NavbarContainer, Main} from "./globalStyles/layout";
import { Navbar } from "./components/navbar/navbar";
import { Sidebar } from "./components/sidebar/sidebar";

const poppins = Poppins({weight: "400", style: "normal", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Vefskólinn LMS",
  description: "This is a page for students of Vefskólinn to learn web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <AnimatedBackground />
          <LayoutGrid>
            <SidebarContainer>
              <Sidebar/>
            </SidebarContainer>
            <NavbarContainer>
              <Navbar/>
            </NavbarContainer>
            <Main>
              {children}
            </Main>
          </LayoutGrid>
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
