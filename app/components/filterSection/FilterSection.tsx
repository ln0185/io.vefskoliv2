"use client";

import { useState } from "react";
import {
  NavContainer,
  ModulesList,
  ModuleItem,
  SortButton,
  SortDropdown,
} from "./style";
import { FaFilter } from "react-icons/fa";

const modules: string[] = [
  "Module 1",
  "Module 2",
  "Module 3",
  "Module 4",
  "Module 5",
  "Module 6",
  "Module 7",
];

const sortOptions: string[] = ["Deadline", "Groups", "Design"];

export const FilterSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string>("Module 1");
  const [sortBy, setSortBy] = useState<string>("Sort By");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <NavContainer>
      <ModulesList>
        {modules.map((module) => (
          <ModuleItem
            key={module}
            active={activeModule === module}
            onClick={() => setActiveModule(module)}
          >
            {module}
          </ModuleItem>
        ))}
      </ModulesList>
      <div style={{ position: "relative" }}>
        <SortButton onClick={() => setShowDropdown(!showDropdown)}>
          <FaFilter size={14} />
          <span>{sortBy}</span>
        </SortButton>
        {showDropdown && (
          <SortDropdown>
            {sortOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSortBy(option);
                  setShowDropdown(false);
                }}
              >
                {option}
              </div>
            ))}
          </SortDropdown>
        )}
      </div>
    </NavContainer>
  );
};
