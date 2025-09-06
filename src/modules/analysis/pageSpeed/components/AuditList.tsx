import { useState } from "react";
import { Audit } from "../../models";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, X } from "lucide-react";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/modules/ui/athoms";
import Markdown from "react-markdown";
import AuditDetailsRenderer, { AuditDetails } from "./DetailsComponent";
import { IconScore } from "./IconScore";
import { motion } from "framer-motion";

interface Props {
  audit: Audit;
}

export const AuditsList = ({ audit }: Props) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "px-1 h-32 py-4 relative border-b transition-all duration-300 ease-in-out p-4 cursor-pointer bg-accent/5 rounded-lg",
        audit.scoreDisplayMode === "notApplicable" && "!text-foreground/30",
        showAll && "h-full"
      )}
      onClick={() => setShowAll(!showAll)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-2 px-2">
          <IconScore score={audit.score} />
          <h4 className="text-lg font-semibold">{audit.title}</h4>
        </div>
        <Tooltip>
          <TooltipTrigger>
            <Button
              onClick={() => setShowAll(!showAll)}
              size={"icon"}
              variant={"outline"}
            >
              <ChevronDown
                className={cn(
                  "rotate-0 transition-all duration-700 ease-in-out",
                  showAll && "rotate-180"
                )}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {showAll ? "Hide Details" : "Show Details"}
          </TooltipContent>
        </Tooltip>
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
        <motion.div
          className="bg-muted rounded-lg p-2 flex flex-col gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="text-sm text-foreground/80 italic">
            {" "}
            <Markdown>{audit.description}</Markdown>
          </div>
          {audit.details && (
            <AuditDetailsRenderer details={audit.details as AuditDetails} />
          )}
        </motion.div>
      )}
    </div>
  );
};
