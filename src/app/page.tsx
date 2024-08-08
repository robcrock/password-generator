"use client";

import { useReducer, useState } from "react";
import { GeneratePasswordButton } from "./components/buttons/generate-password-button";
import { CharacterLengthSlider } from "./components/character-length-slider";
import { CopyPassword } from "./components/copy-password";
import { ModificationCheckbox } from "./components/modification-checkbox";
import { StrengthIndicator } from "./components/strength-indicator";
import { PLACEHOLDER } from "./constants";

type TState = {
  characterLength: number;
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
  checkboxStrength: number;
  characterLengthStrength: number;
};

const defaultState: TState = {
  characterLength: 10,
  upperCase: false,
  lowerCase: false,
  numbers: false,
  symbols: false,
  checkboxStrength: 0,
  characterLengthStrength: 2,
};

type ToggleableOption = "upperCase" | "lowerCase" | "numbers" | "symbols";

type TAction =
  | { type: "update-character-length"; payload: number }
  | {
      type: "toggle-option";
      option: keyof Omit<
        TState,
        "characterLength" | "checkboxStrength" | "characterLengthStrength"
      >;
    };

const calculateCharacterLengthStrength = (length: number): number => {
  if (length < 5) return 0;
  if (length < 10) return 1;
  if (length < 15) return 2;
  if (length < 20) return 3;
  return 4;
};

const toggleOption = (state: TState, option: keyof TState): TState => {
  const updatedValue = !state[option];
  const checkboxStrengthChange = updatedValue ? 1 : -1;
  return {
    ...state,
    [option]: updatedValue,
    checkboxStrength: state.checkboxStrength + checkboxStrengthChange,
  };
};

// Mapping for option labels
const optionLabels: Record<ToggleableOption, string> = {
  upperCase: "Include Uppercase Letters",
  lowerCase: "Include Lowercase Letters",
  numbers: "Include Numbers",
  symbols: "Include Symbols",
};

const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case "update-character-length":
      return {
        ...state,
        characterLength: action.payload,
        characterLengthStrength: calculateCharacterLengthStrength(
          action.payload,
        ),
      };
    case "toggle-option":
      return toggleOption(state, action.option);
    default:
      throw new Error("Unhandled action type");
  }
};

// Function to generate password based on selected attributes
const generatePassword = (state: TState): string => {
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characterPool = "";

  if (state.upperCase) characterPool += upperCaseChars;
  if (state.lowerCase) characterPool += lowerCaseChars;
  if (state.numbers) characterPool += numberChars;
  if (state.symbols) characterPool += symbolChars;

  if (characterPool.length === 0) return ""; // No character types selected

  let password = "";
  for (let i = 0; i < state.characterLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [password, setPassword] = useState(PLACEHOLDER);
  const strength = Math.max(
    0,
    Math.min(
      4,
      state.characterLength < 6
        ? 1
        : state.checkboxStrength + state.characterLengthStrength,
    ),
  );

  const handleGeneratePassword = () => {
    const password =
      state.checkboxStrength === 0 ? PLACEHOLDER : generatePassword(state);
    setPassword(password);
  };

  return (
    <main className="flex min-h-screen place-content-center">
      <div className="flex w-[540px] flex-col items-center gap-6 px-8 py-6">
        <div className="text-lg font-bold text-fem-grey">
          Password Generator
        </div>
        <CopyPassword password={password} />
        <div className="flex w-full flex-col gap-8 bg-fem-dark-grey p-8">
          <CharacterLengthSlider
            characterLength={state.characterLength}
            handleCharacterChange={(value: number) =>
              dispatch({ type: "update-character-length", payload: value })
            }
          />
          <div className="flex flex-col gap-6">
            {(
              [
                "upperCase",
                "lowerCase",
                "numbers",
                "symbols",
              ] as ToggleableOption[]
            ).map((option) => (
              <ModificationCheckbox
                key={option}
                label={optionLabels[option]}
                handleToggle={() => dispatch({ type: "toggle-option", option })}
              />
            ))}
          </div>
          <StrengthIndicator strengthIndex={strength} />
          <GeneratePasswordButton handleClick={handleGeneratePassword} />
        </div>
      </div>
    </main>
  );
}
