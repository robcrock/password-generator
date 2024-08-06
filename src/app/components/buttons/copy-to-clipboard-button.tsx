import { Button } from "@/app/_components/ui/button";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import CopyIcon from "../icons/copy-icon";

export const CopyToClipboardButton = ({
  textToCopy,
}: {
  textToCopy: string;
}) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopidedText = Boolean(copiedText);
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => copyToClipboard(textToCopy)}
    >
      <div className="flex items-center gap-4 font-bold text-fem-neon-green">
        {hasCopidedText && <span className="pt-1">COPIED</span>}
        <CopyIcon />
      </div>
    </Button>
  );
};
