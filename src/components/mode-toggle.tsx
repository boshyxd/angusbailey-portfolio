"use client";

import { useTheme } from "next-themes";
import React from "react";

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();
  
  return {
    name: theme === "dark" ? "Light" : "Dark",
    href: "#",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };
};