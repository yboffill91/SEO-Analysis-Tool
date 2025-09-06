import { useState } from "react";
import { Audit } from "../../models";
import { cn } from "@/lib/utils";
import { Check, Minus, Plus, X } from "lucide-react";
import { Button } from "@/modules/ui/athoms";
import Markdown from "react-markdown";
import AuditDetailsRenderer, { AuditDetails } from "./DetailsComponent";
import { IconScore } from "./IconScore";

interface Props {
  audit: Audit;
}

export const AuditsList = ({ audit }: Props) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "px-1 py-4 relative border-b transition-all",
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
      <div className="flex items-center justify-start gap-2 px-2 ">
        <Check
          className={cn(
            "hidden rounded-full bg-success/10 size-4 text-success",
            audit.scoreDisplayMode !== "numeric" &&
              audit.score === 1 &&
              "!block"
          )}
        />
        <X
          className={cn(
            "hidden rounded-full bg-destructive/10 size-4 text-destructive",
            audit.scoreDisplayMode !== "numeric" &&
              audit.scoreDisplayMode !== "notApplicable" &&
              audit.score !== 1 &&
              "!block"
          )}
        />
        <X
          className={cn(
            "hidden rounded-full bg-gray-300/10 size-4 text-gray-300",
            audit.scoreDisplayMode === "notApplicable" && "!block"
          )}
        />
        <p>
          {audit.scoreDisplayMode === "numeric"
            ? `Score: ${audit.score}`
            : audit.scoreDisplayMode === "notApplicable"
            ? "Not Applicable"
            : audit.scoreDisplayMode === "informative"
            ? "Informative"
            : `Audit: ${audit.score === 1 ? "Passed" : "Failed"}`}
        </p>
      </div>
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
        <div className="bg-muted rounded-lg p-2 flex flex-col gap-4 mt-6">
          <div className="text-sm text-foreground/80 italic">
            {" "}
            <Markdown>{audit.description}</Markdown>
          </div>
          {audit.details && (
            <AuditDetailsRenderer details={audit.details as AuditDetails} />
          )}
        </div>
      )}
    </div>
  );
};
