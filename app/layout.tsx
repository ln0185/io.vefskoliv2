import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globalStyles/globals.css";
import StyledComponentsRegistry from "./utils/registry";
import AnimatedBackground from "./globalStyles/animatedBackground";
import {LayoutGrid, SidebarContainer, NavbarContainer, Main} from "./globalStyles/layout";
import { Navbar } from "./components/navbar/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { SessionProvider } from "next-auth/react"


const poppins = Poppins({weight: "400", style: "normal", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Vefskólinn LMS",
  description: "This is a page for students of Vefskólinn to learn web development.",
};

export default function RootLayout({
  session,
  children,
}: Readonly<{
  session: any;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <AnimatedBackground />
          <SessionProvider session={session}>
          <LayoutGrid>
              {session?.data && <>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <NavbarContainer>
                  <Navbar />
                </NavbarContainer>
              </>}
            <Main>
              {children}
            </Main>
          </LayoutGrid>
          </SessionProvider>
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
