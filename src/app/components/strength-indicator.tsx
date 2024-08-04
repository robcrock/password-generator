import { cn } from "../_components/utils";

const getStrengthIndicatorValues = (strengthIndex: number) => {
  switch (strengthIndex) {
    case 4:
      return {
        label: "STRONG",
        color: "bg-fem-neon-green",
      };
    case 3:
      return {
        label: "MEDIUM",
        color: "bg-fem-yellow",
      };
    case 2:
      return {
        label: "WEAK",
        color: "bg-fem-orange",
      };
    case 1:
      return {
        label: "TOO WEAK!",
        color: "bg-fem-red",
      };
    default:
      throw new Error("You passed in an unhandled strength index.");
  }
};

export const StrengthIndicator = ({
  strengthIndex,
}: {
  strengthIndex: number;
}) => {
  const { label, color } = getStrengthIndicatorValues(strengthIndex);
  const bars = Array.from({ length: 4 }, (_, i) =>
    i >= strengthIndex ? 0 : 1,
  );

  return (
    <div className="flex h-[72px] w-full items-center justify-between bg-fem-very-dark-grey px-8 py-6">
      <span className="font-bold text-fem-grey">STRENGTH</span>
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-fem-almost-white">{label}</span>
        <div className="flex gap-2">
          {bars.map((bar, id) => {
            return (
              <div
                key={id}
                className={cn(
                  "h-[28px] w-[10px]",
                  bar === 1
                    ? color
                    : "border-2 border-fem-almost-white bg-transparent",
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
