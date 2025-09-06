import { Triangle, Square, Circle } from "lucide-react";
import React from "react";

export const IconScore = ({ score }: { score: number | null }) => {
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
