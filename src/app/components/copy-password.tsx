import { cn } from "../_components/utils";
import { PLACEHOLDER } from "../constants";
import { CopyToClipboardButton } from "./buttons/copy-to-clipboard-button";

export const CopyPassword = ({ password }: { password: string }) => {
  const hasBeenGenerated = password !== PLACEHOLDER;
  return (
    <div className="flex w-full items-center justify-between bg-fem-dark-grey px-8 py-4">
      <span
        className={cn(
          "text-xl font-bold",
          hasBeenGenerated
            ? "text-fem-almost-white"
            : "text-fem-almost-white/25",
        )}
      >
        {password}
      </span>
      <CopyToClipboardButton textToCopy={password} />
    </div>
  );
};
