import { Checkbox } from "../_components/ui/checkbox";

const generateId = (label: string) => {
  return label.split(" ").join("-").toLowerCase();
};

export const ModificationCheckbox = ({
  label,
  handleToggle,
}: {
  label: string;
  handleToggle: any;
}) => {
  const id = generateId(label);

  return (
    <div className="flex gap-6 align-baseline">
      <Checkbox id={id} onClick={handleToggle} />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none text-fem-almost-white hover:cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};
