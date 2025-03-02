import { useState, useMemo, useCallback } from "react";
import {
  OptionValue,
  Container,
  SliderHelpLink,
  SliderHelpLinkText,
  SliderTrack,
  ValueContainer,
  SliderContainer,
} from "./style";

interface SliderProps<T> {
  id: string;
  options: T[];
  titles?: string[];
  value?: T | null;
  selectable: boolean;
  helpLink: string;
  handleOnChange?: (newValue: T) => void;
}

export const Slider = <T extends string | number>({
  options,
  value,
  handleOnChange,
  titles,
  selectable,
  helpLink,
  id,
}: SliderProps<T>) => {
  if (titles && titles.length !== options.length)
    throw new Error("Titles must be the same length as options");

  const [tempValue, setTempValue] = useState<T | null | undefined>(value);

  const handleSliderChange = useCallback(
    (newValue: T) => {
      if (!handleOnChange || !selectable) return;
      setTempValue(newValue);
      handleOnChange(newValue);
    },
    [handleOnChange, selectable]
  );

  const optionsList = useMemo(
    () =>
      options.map((option, index) => {
        return (
          <OptionValue
            $selected={option === tempValue}
            key={index}
            // htmlFor={`${id}-option-${option}`}
            onClick={() => handleSliderChange(option)}
            title={titles && titles[index]}
          >
            {option}
          </OptionValue>
        );
      }),
    [options, tempValue, handleSliderChange, titles]
  );

  const calculateSliderPercentage = () => {
    if (!tempValue) return 0;
    return (options.indexOf(tempValue) / (options.length - 1)) * 100;
  };

  return (
    <Container>
      <SliderContainer>
        <SliderTrack
          type="range"
          max={options.length - 1}
          value={tempValue ? options.indexOf(tempValue) : 0}
          $selectable={selectable}
          disabled={!selectable}
          $sliderPercentage={calculateSliderPercentage()}
          onChange={(event) => {
            const newValue = options[parseInt(event.target.value)];
            handleSliderChange(newValue);
          }}
          aria-valuetext={
            titles && value ? titles[options.indexOf(value as T)] : undefined
          }
          aria-valuenow={
            !titles && typeof value === "number" ? value : undefined
          }
          aria-valuemin={!titles ? 0 : undefined}
          aria-valuemax={!titles ? options.length - 1 : undefined}
          id={id}
          aria-describedby={`${id}-descriptions`}
        />
      </SliderContainer>
      <ValueContainer id={`${id}-descriptions`}>{optionsList}</ValueContainer>
      <SliderHelpLink href={helpLink} target="_blank" rel="noopener noreferrer">
        <SliderHelpLinkText>What do these values mean?</SliderHelpLinkText>
      </SliderHelpLink>
    </Container>
  );
};
