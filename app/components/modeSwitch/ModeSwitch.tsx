import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color, motion } from "framer-motion";
import { DarkModeIcon, LightModeIcon } from "assets/Icons";

interface ThemeToggleProps {
  initialTheme?: "light" | "dark";
  onToggle?: (theme: "light" | "dark") => void;
}

const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  background-color: var(--primary-light-blue);
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
  width: 80px;
  height: 40px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  z-index: 1;
`;

const Background = styled(motion.div)`
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #3b82f6;
  top: 3px;
  z-index: 0;
`;

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  // Track the current theme
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);

      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (darkMode) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <ToggleContainer onClick={toggleTheme}>
      <Background
        initial={{ x: darkMode === true ? 0 : 36 }}
        animate={{ x: darkMode === true ? 0 : 36 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      <IconWrapper>
        <DarkModeIcon
          size="20"
          color={darkMode === true ? "white" : "#94a3b8"}
        />
      </IconWrapper>
      <IconWrapper>
        <LightModeIcon
          size="20"
          color={darkMode === false ? "white" : "#94a3b8"}
        />
      </IconWrapper>
    </ToggleContainer>
  );
};

export default ThemeToggle;
