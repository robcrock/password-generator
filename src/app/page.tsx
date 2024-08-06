"use client";

import { GeneratePasswordButton } from "./components/buttons/generate-password-button";
import { CharacterLengthSlider } from "./components/character-length-slider";
import { CopyPassword } from "./components/copy-password";
import { ModificationCheckbox } from "./components/modification-checkbox";
import { StrengthIndicator } from "./components/strength-indicator";
export default function Home() {
  return (
    <main className="flex min-h-screen place-content-center">
      <div className="flex w-[540px] flex-col items-center gap-6 px-8 py-6">
        <div className="text-lg font-bold text-fem-grey">
          Password Generator
        </div>
        <CopyPassword />
        <div className="flex w-full flex-col gap-8 bg-fem-dark-grey p-8">
          <CharacterLengthSlider />
          <div className="flex flex-col gap-6">
            <ModificationCheckbox label={"Include Uppercase Letter"} />
            <ModificationCheckbox label={"Include Lowercase Letters"} />
            <ModificationCheckbox label={"Include Numbers"} />
            <ModificationCheckbox label={"Include Symbols"} />
          </div>
          <StrengthIndicator strengthIndex={1} />
          <GeneratePasswordButton />
        </div>
      </div>
    </main>
  );
}
