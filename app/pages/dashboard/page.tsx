"use client";
import { use, useState } from "react";
import styled from "styled-components";
import { FilterSection } from "components/filterSection/FilterSection";
import { CardIcon, ListIcon } from "assets/Icons";

const ViewSwitcher = styled.div`
  display: flex;
  gap: 10px;
`;

const IconButton = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "#e0e0e0" : "transparent")};
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => (props.active ? "#e0e0e0" : "#f0f0f0")};
  }
`;

type ViewType = "list" | "card";

export default function DashboardPage() {
  const [currentView, setCurrentView] = useState<ViewType>("list");
  return (
    <div>
      <FilterSection />
      <ViewSwitcher>
        <IconButton
          active={currentView === "list"}
          onClick={() => setCurrentView("list")}
          aria-label="Show as list"
        >
          <ListIcon />
        </IconButton>
        <IconButton
          active={currentView === "card"}
          onClick={() => setCurrentView("card")}
          aria-label="Show as cards"
        >
          <CardIcon />
        </IconButton>
      </ViewSwitcher>
      {currentView === "list" ? (
        <h1>ListViewComponent</h1>
      ) : (
        <h1>CardViewComponent</h1>
      )}
    </div>
  );
}

export default Dashboard;
