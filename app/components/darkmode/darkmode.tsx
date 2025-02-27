"use client";
import { DarkModeIcon, LightModeIcon } from "assets/Icons";
import { useState, useEffect } from "react";
import { ToggleContainer, Background, IconWrapper } from "./style";

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const savedMode = localStorage.getItem("darkMode");

    const isDark = savedMode !== null ? savedMode === "true" : prefersDark;
    setIsDarkMode(isDark);
    document.body.classList.toggle("dark-mode", isDark);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      document.body.classList.toggle("dark-mode", e.matches);
      localStorage.setItem("darkMode", e.matches.toString());
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode.toString());
      document.body.classList.toggle("dark-mode", newMode);
      return newMode;
    });
  };

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prev) => !prev);
  // };

  // useEffect(() => {
  //   document.body.classList.toggle("dark-mode", isDarkMode);
  // }, [isDarkMode]);

  return (
    <ToggleContainer onClick={toggleDarkMode}>
      <Background
        initial={{ x: isDarkMode === true ? 0 : 36 }}
        animate={{ x: isDarkMode === true ? 0 : 36 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <IconWrapper>
        <DarkModeIcon
          size="20"
          color={
            isDarkMode === true
              ? "var(--primary-white)"
              : "var(--secondary-light-300"
          }
        />
      </IconWrapper>
      <IconWrapper>
        <LightModeIcon
          size="20"
          color={
            isDarkMode === false
              ? "var(--primary-white)"
              : "var(--secondary-light-300"
          }
        />
      </IconWrapper>
    </ToggleContainer>
  );
};
