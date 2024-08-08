import ArrowRightIcon from "../icons/arrow-right-icon";
import { Button } from "@/app/_components/ui/button";

export const GeneratePasswordButton = ({
  handleClick,
}: {
  handleClick: () => void;
}) => {
  return (
    <Button onClick={handleClick}>
      <div className="flex items-center gap-6">
        <span>GENERATE</span>
        <ArrowRightIcon />
      </div>
    </Button>
  );
};
