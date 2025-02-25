"use client";

import { useState } from "react";
import { Container, ModuleContainer, ModuleOptionContainer } from "./style";
import { ExtendedGuideInfo, Module } from "types/guideTypes";
import { useLocalState } from "react-session-hooks";
import { GuidesClient } from "components/guidesClient/GuidesClient";
import ProgressBar from "../progressBar/progressBar";
import {
  GradeAverageContainer,
  AverageRow,
  AverageLabel,
  AverageValue,
  ProgressBarWrapper,
  ProgressText,
} from "./style";

const LOCAL_STORAGE_KEY = "selectedModule";

export const Guides = ({
  extendedGuides,
  modules,
}: {
  extendedGuides: ExtendedGuideInfo[];
  modules: Module[];
}) => {
  const [selectedModule, setSelectedModule, loading] =
    useLocalState<number>(LOCAL_STORAGE_KEY);
  const [filter, setFilter] = useState<{
    tagStatus: string;
    guideCategory: string;
  }>({ tagStatus: "", guideCategory: "" });

  if (!extendedGuides || !modules || loading) return null;

  const filteredGuides = filterGuides(selectedModule, extendedGuides, filter);
  const options = createOptions(modules, setSelectedModule);

  const { guidesPassedCount, totalGuidesCount } =
    getPassedGuidesCount(filteredGuides);
  const progress = totalGuidesCount
    ? (guidesPassedCount / totalGuidesCount) * 100
    : 0;

  const { codeAverage, designAverage } =
    calculateCategoryAverages(filteredGuides);

  return (
    <Container>
      <ModuleContainer>
        {options.map((option) => (
          <ModuleOptionContainer
            key={option.optionName}
            onClick={option.onClick}
            $isActive={
              selectedModule === Number(option.optionName.split(" ")[1])
            }
          >
            <p>{option.optionName}</p>
          </ModuleOptionContainer>
        ))}
      </ModuleContainer>

      <GradeAverageContainer>
        <AverageRow>
          <AverageLabel>Coding </AverageLabel>
          <AverageValue isGreen={codeAverage >= 5}>
            {codeAverage >= 0 ? codeAverage.toFixed(2) : "No Grades"}
          </AverageValue>
          |<AverageLabel>Design </AverageLabel>
          <AverageValue isGreen={designAverage >= 5}>
            {designAverage >= 0 ? designAverage.toFixed(2) : "No Grades"}
          </AverageValue>
        </AverageRow>
        <ProgressBarWrapper>
          <ProgressText>
            {guidesPassedCount}/{totalGuidesCount} Complete
          </ProgressText>
          <ProgressBar progress={progress} />
        </ProgressBarWrapper>
      </GradeAverageContainer>

      <GuidesClient guides={filteredGuides} useGuideOrder={!!selectedModule} />
    </Container>
  );
};

const createOptions = (
  modules: Module[],
  setSelectedModule: React.Dispatch<number | null>
) => {
  return modules
    .filter((module) => module.number !== 0)
    .map((module) => ({
      optionName: "Module " + module.number,
      onClick: () => setSelectedModule(module.number),
    }));
};

const filterGuides = (
  selectedModule: number | null,
  extendedGuides: ExtendedGuideInfo[],
  filter: { tagStatus: string; guideCategory: string }
) => {
  if (selectedModule === null) return extendedGuides;
  return extendedGuides.filter(
    (guide) => guide.module.title[0] === "" + selectedModule
  );
};

const getPassedGuidesCount = (guides: ExtendedGuideInfo[]) => {
  let guidesPassedCount = 0;
  let totalGuidesCount = guides.length;
  guides.forEach((guide) => {
    if (guide.returnStatus === "PASSED") {
      guidesPassedCount++;
    }
  });

  return { guidesPassedCount, totalGuidesCount };
};

const calculateCategoryAverages = (guides: ExtendedGuideInfo[]) => {
  let codeTotal = 0;
  let designTotal = 0;
  let codeCount = 0;
  let designCount = 0;

  guides.forEach((guide) => {
    if (guide.grade !== undefined && guide.grade !== null) {
      if (guide.category === "code") {
        codeTotal += guide.grade;
        codeCount++;
      } else if (guide.category === "design") {
        designTotal += guide.grade;
        designCount++;
      }
    }
  });

  const codeAverage = codeCount > 0 ? codeTotal / codeCount : 0;
  const designAverage = designCount > 0 ? designTotal / designCount : 0;

  return { codeAverage, designAverage };
};
