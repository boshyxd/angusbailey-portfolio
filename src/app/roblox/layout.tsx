'use client';

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export default function RobloxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme="dark"
    >
      <div className="min-h-screen bg-background text-foreground">
        <div className="h-full w-full overflow-auto dark-scrollbar">
          <div className="mx-auto max-w-[640px] px-4 sm:px-6">
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
} 