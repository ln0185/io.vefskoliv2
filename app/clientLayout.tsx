"use client";

import { useState } from "react";
import { LayoutGrid, SidebarContainer, Main } from "./globalStyles/layout";
import Sidebar from "./components/sidebar/sidebar";
import { Header } from "components/header/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true); // Sidebar state

  return (
    <LayoutGrid layout animate={{ marginLeft: open ? 300 : 80 }} open={open}>
      <SidebarContainer layout>
        <Sidebar open={open} setOpen={setOpen} />
      </SidebarContainer>
      <Header />
      <Main layout animate={{ marginLeft: open ? 300 : 80 }} open={open}>
        {children}
      </Main>
    </LayoutGrid>
  );
}

//layout animate={{ marginLeft: open ? 300 : 80 }} open={open} for the header
