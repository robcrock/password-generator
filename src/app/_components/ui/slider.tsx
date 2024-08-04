"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/app/_components/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-8 w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-fem-very-dark-grey">
      <SliderPrimitive.Range className="absolute h-full bg-fem-neon-green" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-[28px] w-[28px] rounded-full bg-fem-almost-white transition-colors hover:bg-fem-very-dark-grey hover:ring-2 hover:ring-fem-neon-green focus:bg-fem-very-dark-grey focus:ring-2 focus:ring-fem-neon-green focus-visible:bg-fem-very-dark-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fem-neon-green active:bg-fem-dark-grey active:ring-2 active:ring-fem-neon-green disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
