import React from "react";
import { Checkbox } from "../_components/ui/checkbox";

const generateId = (label: string) => {
  return label.split(" ").join("-").toLowerCase();
};

export const ModificationCheckbox = ({ label }: { label: string }) => {
  const id = generateId(label);

  return (
    <div className="flex gap-6 align-baseline">
      <Checkbox id={id} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none text-fem-almost-white hover:cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};
