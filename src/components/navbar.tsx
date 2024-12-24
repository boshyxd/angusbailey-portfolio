"use client";

import React, { useState, useEffect } from "react";
import { Dock, DockIcon } from "./magicui/dock";
import { FaUser, FaBriefcase, FaCode, FaEnvelope, FaLaptopCode, FaSun, FaMoon } from 'react-icons/fa';
import { useModeToggle } from "./mode-toggle";
import { IconType } from 'react-icons';
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
  icon: IconType;
  onClick?: (e: React.MouseEvent) => void;
};

const NavBar = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const modeToggle = useModeToggle();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || pathname === '/roblox') {
    return null;
  }

  const navItems: NavItem[] = [
    { name: "About", href: "#about", icon: FaUser },
    { name: "Work", href: "#work", icon: FaBriefcase },
    { name: "Projects", href: "#projects", icon: FaCode },
    { name: "Hackathons", href: "#hackathons", icon: FaLaptopCode },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50" aria-label="Main navigation">
      <Dock className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 scale-75 sm:scale-100 flex items-center">
        {navItems.map((item) => (
          <DockIcon
            key={item.name}
            icon={item.icon}
            label={item.name}
            href={item.href}
            aria-label={`Navigate to ${item.name} section`}
            className="transition-all hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
          />
        ))}
        <DockIcon
          key={modeToggle.name}
          icon={theme === "dark" ? FaSun : FaMoon}
          label={modeToggle.name}
          href={modeToggle.href}
          onClick={modeToggle.onClick}
          aria-label={`Switch to ${modeToggle.name} mode`}
          className="transition-all hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
        />
      </Dock>
    </nav>
  );
};

export default NavBar;