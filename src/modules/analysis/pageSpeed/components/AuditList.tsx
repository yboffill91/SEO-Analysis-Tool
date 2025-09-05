import { useState } from "react";
import { Audit } from "../../models";
import { cn } from "@/lib/utils";
import { Circle, Minus, Plus, Square, Triangle } from "lucide-react";
import { Button, Separator } from "@/modules/ui/athoms";
import Markdown from "react-markdown";

interface Props {
  audit: Audit;
}

export const AuditsList = ({ audit }: Props) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "px-1 py-4 relative border-b ",
        audit.scoreDisplayMode === "notApplicable" && "!text-foreground/30"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-2 px-2">
          <IconScore score={audit.score} />
          <h4 className="text-lg font-semibold">{audit.title}</h4>
        </div>
        <Button
          onClick={() => setShowAll(!showAll)}
          size={"icon"}
          variant={"outline"}
        >
          {showAll ? <Minus /> : <Plus />}
        </Button>
      </div>
      <p>
        {audit.scoreDisplayMode === "numeric"
          ? `Score: ${audit.score}`
          : audit.scoreDisplayMode === "notApplicable"
          ? "Not Applicable"
          : audit.scoreDisplayMode === "informative"
          ? "Informative"
          : `Audit: ${audit.score === 1 ? "Passed" : "Failed"}`}
      </p>
      <span
        className={cn(
          " px-2  rounded-lg hidden max-w-18",
          audit.scoreDisplayMode === "numeric" && "flex flex-center",
          audit.score !== null &&
            audit.score < 0.5 &&
            "text-destructive bg-destructive/10",
          audit.score !== null &&
            audit.score >= 0.5 &&
            "text-warning bg-warning/10",
          audit.score !== null &&
            audit.score >= 0.9 &&
            "text-success bg-success/10"
        )}
      >
        {audit.displayValue}
      </span>

      {showAll && (
        <div className="text-sm text-foreground/80 italic bg-accent p-2 rounded-lg m-4">
          {" "}
          <Markdown>{audit.description}</Markdown>
        </div>
      )}
    </div>
  );
};

const IconScore = ({ score }: { score: number | null }) => {
  if (score !== null && score <= 0.49) {
    return (
      <Triangle className="text-destructive fill-destructive size-3 rotate-180" />
    );
  } else if (score !== null && score > 0.49 && score <= 0.89) {
    return <Square className="text-warning fill-warning size-3" />;
  } else if (score === null) {
    return <Square className="text-gray-400 fill-gray-400 size-3" />;
  } else {
    return <Circle className="text-success fill-success size-3" />;
  }
};
