import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "globalStyles/globals.css";
import StyledComponentsRegistry from "utils/registry";
import { LayoutGrid, SidebarContainer, Main } from "./globalStyles/layout";
import Sidebar from "./components/sidebar/sidebar";
import { auth } from "../auth";
import LoginPage from "pages/login/page";
// import { Header } from "components/header/Header";
import motion from "framer-motion";
import { useState } from "react";
import { Header } from "components/header/Header";

const plusJarkaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600"],
  style: "normal",
  subsets: ["latin"],
});

// trigger rebuild
export const metadata: Metadata = {
  title: "Vefskólinn LMS",
  description:
    "This is a page for students of Vefskólinn to learn web development.",
};
// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const session = await auth();
//   const [open, setOpen] = useState(true); // Sidebar state

//   return (
//     <html lang="en">
//       <body className={plusJarkaSans.className}>
//         <StyledComponentsRegistry>
//           {session?.user ? (
//             <LayoutGrid
//               layout
//               animate={{ marginLeft: open ? 300 : 80 }}
//               open={open}
//             >
//               <SidebarContainer layout>
//                 <Sidebar open={open} setOpen={setOpen} /> {/* Pass state */}
//               </SidebarContainer>
//               <Header
//                 layout
//                 animate={{ marginLeft: open ? 300 : 80 }}
//                 open={open}
//               />
//               <Main
//                 layout
//                 animate={{ marginLeft: open ? 300 : 80 }}
//                 open={open}
//               >
//                 {children}
//               </Main>
//             </LayoutGrid>
//           ) : (
//             <LoginPage />
//           )}
//         </StyledComponentsRegistry>
//       </body>
//     </html>
//   );
// }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={plusJarkaSans.className}>
        <StyledComponentsRegistry>
          {session?.user ? (
            <LayoutGrid layout animate={{ opacity: 1, y: 0 }}>
              <SidebarContainer layout animate={{ opacity: 1, y: 0 }}>
                <Sidebar />
              </SidebarContainer>
              <Header></Header>
              <Main layout animate={{ opacity: 1, y: 0 }}>
                {children}
              </Main>
            </LayoutGrid>
          ) : (
            <LoginPage />
          )}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
