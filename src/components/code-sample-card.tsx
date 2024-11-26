"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Maximize2, Minimize2, X } from "lucide-react";
import { motion } from "framer-motion";
import Prism from 'prismjs';
import 'prismjs/components/prism-lua';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeSampleCardProps {
  title: string;
  description: string;
  code: string;
  className?: string;
}

export function CodeSampleCard({
  title,
  description,
  code,
  className,
}: CodeSampleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, isExpanded]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsExpanded(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <motion.div
      layout
      className={cn(
        "w-full transition-all duration-300",
        isExpanded ? "sm:col-span-2" : "col-span-1"
      )}
    >
      <Card className={cn("p-4", className)}>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2"
            >
              {isExpanded ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
          </div>

          <motion.div
            layout
            className="bg-muted rounded-lg overflow-hidden"
            animate={{
              height: isExpanded ? "500px" : "100px",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <div className="relative h-full">
              {isExpanded && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                  className="absolute right-4 top-4 hover:bg-background/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              <div className="px-6 py-4 h-full overflow-auto">
                <pre className="!bg-transparent">
                  <code className="language-lua text-sm leading-relaxed">
                    {code}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
} 