"use client";

import { useTheme } from "next-themes";
import React from "react";
import { usePathname } from "next/navigation";

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();
  
  return {
    name: theme === "dark" ? "Light" : "Dark",
    href: "#",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      // Don't allow theme toggle on Roblox page
      if (pathname !== '/roblox') {
        setTheme(theme === "dark" ? "light" : "dark");
      }
    }
  };
};