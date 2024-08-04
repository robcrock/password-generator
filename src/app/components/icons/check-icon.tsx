import { cn } from "@/app/_components/utils";
import React from "react";

function CheckIcon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center",
        className,
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12">
        <path
          fill="none"
          stroke="#18171F"
          strokeWidth="3"
          d="M1 5.607L4.393 9l8-8"
        ></path>
      </svg>
    </div>
  );
}

export default CheckIcon;
