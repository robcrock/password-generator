"use client";

import { useReducer } from "react";
import { GeneratePasswordButton } from "./components/buttons/generate-password-button";
import { CharacterLengthSlider } from "./components/character-length-slider";
import { CopyPassword } from "./components/copy-password";
import { ModificationCheckbox } from "./components/modification-checkbox";
import { StrengthIndicator } from "./components/strength-indicator";

type TState = {
  characterLength: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
  strength: number;
};
const defaultState = {
  characterLength: 10,
  upperCase: false,
  lowerCase: false,
  numbers: false,
  symbols: false,
  strength: 0,
};
type TAction = {
  type:
    | "toggle-uppercase"
    | "toggle-lowercase"
    | "toggle-numbers"
    | "toggle-symbols";
};

const reducer = (state: TState, action: TAction) => {
  const updateStrength = (state: TState, condition: boolean) => {
    const strength = condition ? state.strength + 1 : state.strength - 1;
    return strength;
  };
  switch (action.type) {
    case "toggle-uppercase":
      const upperCase = state.upperCase ? false : true;
      return {
        ...state,
        upperCase,
        strength: updateStrength(state, upperCase),
      };
    case "toggle-lowercase":
      const lowerCase = state.lowerCase ? false : true;
      return {
        ...state,
        lowerCase,
        strength: updateStrength(state, lowerCase),
      };
    case "toggle-numbers":
      const numbers = state.numbers ? false : true;
      return {
        ...state,
        numbers,
        strength: updateStrength(state, numbers),
      };
    case "toggle-symbols":
      const symbols = state.symbols ? false : true;
      return {
        ...state,
        symbols,
        strength: updateStrength(state, symbols),
      };
    default:
      throw new Error("Unhandled error");
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  console.log("state", state);
  // char len
  // 1 - 7 = 0
  // 8 - 12 = 0.5
  // 13 - 20 = 1

  // uppercase
  // t = 0.5

  // lowercase
  // t = 0.5

  // numbers
  // t = 1

  // symbols
  // t = 1
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
            <ModificationCheckbox
              label={"Include Uppercase Letter"}
              handleToggle={() => dispatch({ type: "toggle-uppercase" })}
            />
            <ModificationCheckbox
              label={"Include Lowercase Letters"}
              handleToggle={() => dispatch({ type: "toggle-lowercase" })}
            />
            <ModificationCheckbox
              label={"Include Numbers"}
              handleToggle={() => dispatch({ type: "toggle-numbers" })}
            />
            <ModificationCheckbox
              label={"Include Symbols"}
              handleToggle={() => dispatch({ type: "toggle-symbols" })}
            />
          </div>
          <StrengthIndicator strengthIndex={state.strength} />
          <GeneratePasswordButton />
        </div>
      </div>
    </main>
  );
}
