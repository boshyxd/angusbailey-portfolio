"use client";

import React, { useState, useEffect } from "react";
import { Dock, DockIcon } from "./magicui/dock";
import { FaUser, FaBriefcase, FaCode, FaEnvelope, FaLaptopCode, FaSun, FaMoon } from 'react-icons/fa';
import { ModeToggle } from "./mode-toggle";
import { IconType } from 'react-icons';
import { useTheme } from "next-themes";

// Define a type for the nav items
type NavItem = {
  name: string;
  href: string;
  icon: IconType;
  onClick?: (e: React.MouseEvent) => void;
};

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme('dark'); // Set the initial theme to dark
  }, [setTheme]);

  const navItems: NavItem[] = [
    { name: "About", href: "#about", icon: FaUser },
    { name: "Work", href: "#work", icon: FaBriefcase },
    { name: "Projects", href: "#projects", icon: FaCode },
    { name: "Hackathons", href: "#hackathons", icon: FaLaptopCode },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  const modeToggle = ModeToggle();

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
      <Dock className="px-2 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 scale-[0.65] sm:scale-90">
        {navItems.map((item) => (
          <DockIcon
            key={item.name}
            icon={item.icon}
            label={item.name}
            href={item.href}
          />
        ))}
        {mounted && (
          <DockIcon
            key={modeToggle.name}
            icon={theme === "dark" ? FaSun : FaMoon}
            label={modeToggle.name}
            href={modeToggle.href}
            onClick={modeToggle.onClick}
          />
        )}
      </Dock>
    </div>
  );
};

export default NavBar;