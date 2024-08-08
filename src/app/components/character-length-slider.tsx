"use client";

import { Slider } from "../_components/ui/slider";

export const CharacterLengthSlider = ({
  characterLength,
  handleCharacterChange,
}: {
  characterLength: any;
  handleCharacterChange: any;
}) => {
  return (
    <div className="flex flex-col gap-4 bg-fem-dark-grey">
      <div className="flex items-center justify-between">
        <span className="text-fem-almost-white">Character Length</span>
        <span className="text-[32px] text-fem-neon-green">
          {characterLength}
        </span>
      </div>
      <Slider
        defaultValue={[characterLength]}
        max={20}
        min={0}
        step={1}
        onValueChange={handleCharacterChange}
      />
    </div>
  );
};
