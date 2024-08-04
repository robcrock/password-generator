"use client";

import { useState } from "react";
import { Slider } from "./_components/ui/slider";

export default function Home() {
  const [value, setValue] = useState(10);

  const handleValueChange = (value: number[]) => setValue(value[0]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-fem-dark-grey flex h-[143px] w-[540px] flex-col gap-4 px-8 py-6">
        <div className="flex items-center justify-between">
          <span className="text-fem-almost-white">Character Length</span>
          <span className="text-fem-neon-green text-[32px]">{value}</span>
        </div>
        <Slider
          defaultValue={[value]}
          max={100}
          min={1}
          step={1}
          onValueChange={handleValueChange}
        />
      </div>
      Password Generator P4$5W0rD! Character Length Include Uppercase Letters
      Include Lowercase Letters Include Numbers Include Symbols Strength
      Generate
    </main>
  );
}
