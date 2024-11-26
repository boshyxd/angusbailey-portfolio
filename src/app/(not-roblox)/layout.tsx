import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import RootLayoutContent from "@/components/root-layout-content";

export default function NotRobloxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full py-12 px-4 sm:px-6">
      <ThemeProvider 
        attribute="class" 
        defaultTheme="system"
        enableSystem
        storageKey="theme"
        disableTransitionOnChange={false}
      >
        <TooltipProvider delayDuration={0}>
          <RootLayoutContent>
            {children}
          </RootLayoutContent>
        </TooltipProvider>
      </ThemeProvider>
    </div>
  );
} 