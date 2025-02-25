"use client";

import { useState } from "react";
import {
  Container,
  GuideDropdownContainer,
  ModuleOptionContainer,
} from "./style";
import { ExtendedGuideInfo, Module } from "types/guideTypes";
import { useLocalState } from "react-session-hooks";
import { GuidesClient } from "components/guidesClient/GuidesClient";
<<<<<<< HEAD
import { FilterButton } from "components/ModuleMenu/filterButton";
import { Module as ModuleMenu } from "components/ModuleMenu/ModuleMenu";
=======
>>>>>>> 538927aaa15b28020ce0c9b214139feb116a620a

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
  }>({
    tagStatus: "",
    guideCategory: "",
  });

  if (!extendedGuides || !modules || loading) return null;

  const filteredGuides = filterGuides(selectedModule, extendedGuides, filter);
  const options = createOptions(modules, setSelectedModule);

  return (
    <Container>
<<<<<<< HEAD
      <ModuleMenu
        options={options}
        setFilter={setFilter}
        setModule={setSelectedModule}
        filter={filter}
      ></ModuleMenu>
=======
      <GuideDropdownContainer>
        {options.map((option) => (
          <ModuleOptionContainer
            key={option.optionName}
            onClick={option.onClick}
            isActive={
              selectedModule === Number(option.optionName.split(" ")[1])
            }
          >
            <p>{option.optionName}</p>
          </ModuleOptionContainer>
        ))}
      </GuideDropdownContainer>
>>>>>>> 538927aaa15b28020ce0c9b214139feb116a620a

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
  return extendedGuides.filter((guide) => {
<<<<<<< HEAD
    const isFilteringByCategory = filter.guideCategory !== "";

    if (typeof guide.category !== "string") {
      console.warn(
        `⚠️ Guide "${guide.title}" has an invalid category:`,
        guide.category
      );
      return false;
    }

    const guideCategoryLower = guide.category.trim().toLowerCase();
    const filterCategoryLower = filter.guideCategory.trim().toLowerCase();

    console.log(
      `🔍 Guide: ${guide.title}, Raw Category: "${guide.category}", Normalized: "${guideCategoryLower}"`
    );
    console.log("🔍 Extended Guides Data:", extendedGuides);
    console.log("🔍 Selected Module:", selectedModule);
    console.log("🔍 Current Filter:", filter);

    const isCodeRelated = [
      "html",
      "css",
      "javascript",
      "react",
      "typescript",
      "coding",
      "code",
    ].some((keyword) => guideCategoryLower.includes(keyword));

    const isDesignRelated = guideCategoryLower.includes("design");

    console.log(
      `✅ Guide: "${guide.title}", Category: "${guideCategoryLower}", isCodeRelated: ${isCodeRelated}, isDesignRelated: ${isDesignRelated}`
    );

    const matchesCategory =
      filterCategoryLower === "code"
        ? isCodeRelated
        : filterCategoryLower === "design"
        ? isDesignRelated
        : filterCategoryLower
        ? guideCategoryLower === filterCategoryLower
        : true;

    const matchesModule = isFilteringByCategory
      ? true
      : selectedModule !== null
      ? guide.module.title[0] === "" + selectedModule
      : true;

    return matchesModule && matchesCategory;
=======
    const matchesModule = guide.module.title[0] === "" + selectedModule;

    return matchesModule;
>>>>>>> 538927aaa15b28020ce0c9b214139feb116a620a
  });
};
