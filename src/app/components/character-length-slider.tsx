"use client";

import { useState } from "react";
import { Slider } from "../_components/ui/slider";

export const CharacterLengthSlider = () => {
  const [value, setValue] = useState(10);

  const handleValueChange = (value: number[]) => setValue(value[0]);
  return (
    <div className="flex h-[143px] w-[540px] flex-col gap-4 bg-fem-dark-grey px-8 py-6">
      <div className="flex items-center justify-between">
        <span className="text-fem-almost-white">Character Length</span>
        <span className="text-[32px] text-fem-neon-green">{value}</span>
      </div>
      <Slider
        defaultValue={[value]}
        max={100}
        min={1}
        step={1}
        onValueChange={handleValueChange}
      />
    </div>
  );
};
