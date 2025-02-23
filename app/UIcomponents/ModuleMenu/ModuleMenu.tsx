"use client";
import { useCallback, useMemo, useState } from "react";
import {
  Container,
  DropDownContainer,
  AccordianOptionContainer,
} from "./style";

export type DropdownOption = {
  optionName: string;
  onClick: () => void;
};

interface DropdownProps {
  options: DropdownOption[];
  currentOption?: DropdownOption;
  titleOption: DropdownOption;
  style?: React.CSSProperties;
  zIndex?: number;
}

export const Dropdown = ({
  options,
  titleOption,
  style,
  currentOption,
  zIndex,
}: DropdownProps) => {
  const [shownOption, setShownOption] = useState(
    currentOption?.optionName ?? options[1]?.optionName
  );
  const [isOpen, setIsOpen] = useState(false);

  // Handle option selection
  const handleOnClick = useCallback((optionName: string) => {
    setIsOpen(false);
    setShownOption(optionName);
  }, []);

  const Options = useMemo(() => {
    return options.slice(1).map((option, index) => {
      const { optionName, onClick } = option;

      return (
        <AccordianOptionContainer
          key={index}
          onClick={() => {
            handleOnClick(optionName);
            onClick();
          }}
        >
          <p>{optionName}</p>
        </AccordianOptionContainer>
      );
    });
  }, [options, handleOnClick]);

  return (
    <Container style={style}>
      <DropDownContainer $isOpen={isOpen} $zIndex={zIndex}>
        {Options}
      </DropDownContainer>
    </Container>
  );
};
