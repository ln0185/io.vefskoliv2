"use client";

import { useState } from "react";
import {
  Container,
  ModuleContainer,
  ModuleOptionContainer,
  Bar,
} from "./style";
import { FilterButton } from "./filterButton";

export type ModuleOption = {
  optionName: string;
  onClick: () => void;
};

interface ModuleProps {
  options: ModuleOption[];
  currentOption?: ModuleOption;
  filter: {
    tagStatus: string;
    guideCategory: string;
  };
  style?: React.CSSProperties;
  zIndex?: number;
  setFilter: React.Dispatch<
    React.SetStateAction<{ tagStatus: string; guideCategory: string }>
  >;
  setModule: (
    value: number | ((prev: number | null) => number | null) | null
  ) => void;
}

export const Module = ({
  options,
  style,
  currentOption,
  zIndex,
  setFilter,
  setModule,
  filter,
}: ModuleProps) => {
  const [shownOption, setShownOption] = useState(
    currentOption?.optionName ?? options[0]?.optionName
  );

  const handleOnClick = (optionName: string, onClick: () => void) => {
    setShownOption(optionName);
    onClick();
  };

  return (
    <Container style={style}>
      <ModuleContainer $zIndex={zIndex}>
        {options.map((option, index) => {
          const { optionName, onClick } = option;
          const isActive = optionName === shownOption;

          return (
            <ModuleOptionContainer
              key={index}
              onClick={() => handleOnClick(optionName, onClick)}
              $isActive={isActive}
            >
              <p>{optionName}</p>
            </ModuleOptionContainer>
          );
        })}

        <FilterButton
          setFilter={setFilter}
          setModule={setModule}
          filter={filter}
        />

        <Bar />
      </ModuleContainer>
    </Container>
  );
};
