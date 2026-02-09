"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-lg shadow-brand-purple/20 hover:brightness-110",
        accent:
          "bg-gradient-to-r from-brand-orange to-brand-coral text-white shadow-lg shadow-brand-orange/20 hover:brightness-110",
        secondary: "bg-brand-blue text-white hover:brightness-110",
        outline:
          "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
        ghost:
          "transparent hover:bg-accent hover:text-accent-foreground text-foreground",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      keyof HTMLMotionProps<"button">
    >,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & HTMLMotionProps<"button">
>(({ className, variant, size, children, ...props }, ref) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cn(buttonVariants({ variant, size, className }))}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      {...props}
    >
      {children}
    </motion.button>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
