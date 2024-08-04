"use client";

import { CharacterLengthSlider } from "./components/character-length-slider";
import { ModificationCheckbox } from "./components/modification-checkbox";
import { StrengthIndicator } from "./components/strength-indicator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8 p-24">
      <div className="flex w-[540px] flex-col gap-6 bg-fem-dark-grey px-8 py-6">
        <StrengthIndicator strengthIndex={1} />
        <StrengthIndicator strengthIndex={2} />
        <StrengthIndicator strengthIndex={3} />
        <StrengthIndicator strengthIndex={4} />
      </div>
      <CharacterLengthSlider />
      <div className="flex w-[540px] flex-col gap-6 bg-fem-dark-grey px-8 py-6">
        <ModificationCheckbox label={"Include Uppercase Letter"} />
        <ModificationCheckbox label={"Include Lowercase Letters"} />
        <ModificationCheckbox label={"Include Numbers"} />
        <ModificationCheckbox label={"Include Symbols"} />
      </div>
      Password Generator P4$5W0rD! Character Length Include Uppercase Letters
      Include Lowercase Letters Include Numbers Include Symbols Strength
      Generate
    </main>
  );
}
