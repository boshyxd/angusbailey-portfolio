'use client';

import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayoutContent({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  if (pathname === '/roblox') {
    return children;
  }

  return (
    <>
      {children}
      <Navbar />
    </>
  );
} 