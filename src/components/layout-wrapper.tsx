'use client';

import { usePathname } from 'next/navigation';
import RootLayoutContent from './root-layout-content';

export default function LayoutWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRobloxPage = pathname === '/roblox';

  // Return children directly for Roblox page
  if (isRobloxPage) {
    return <>{children}</>;
  }

  // Use RootLayoutContent for all other pages
  return <RootLayoutContent>{children}</RootLayoutContent>;
} 