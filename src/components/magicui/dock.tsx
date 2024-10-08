"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { PropsWithChildren, useRef } from "react";
import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa'; // Import all icons from react-icons/fa

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 1.3;
const DEFAULT_DISTANCE = 45; // Increased from 40

const dockVariants = cva(
  "fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-between shadow-lg h-16" // Increased height to h-16
);

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref
  ) => {
    const mousex = useMotionValue(Infinity);

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mousex.set(e.pageX)}
        onMouseLeave={() => mousex.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }))}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                mousex,
                magnification,
                distance,
              } as DockIconProps)
            : child
        )}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

export interface DockIconProps {
  icon: IconType;
  label: string;
  href: string;
  magnification?: number;
  distance?: number;
  mousex?: any;
  className?: string;
  onClick?: (e: React.MouseEvent) => void; // Make onClick optional
}

const DockIcon = ({
  icon: Icon,
  label,
  href,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mousex,
  className,
  onClick,
}: DockIconProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const distanceCalc = useTransform(mousex, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [1, magnification, 1]
  );

  let scale = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick} // This is now safe, as onClick is optional
      style={{ scale }}
      className={cn(
        "flex flex-col items-center justify-center transition-colors hover:text-blue-500 px-3 sm:px-4 relative", // Increased horizontal padding
        className
      )}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center justify-center h-10">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>
      <motion.span
        className="text-[10px] sm:text-xs text-black dark:text-white/90 absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
        style={{ opacity: useTransform(scale, [1, 1.3], [0, 1]) }}
      >
        {label}
      </motion.span>
    </motion.a>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };