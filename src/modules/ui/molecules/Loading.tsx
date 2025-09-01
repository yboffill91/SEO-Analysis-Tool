import { Loader2 } from "lucide-react";
import React from "react";

export const Loading = () => {
  return (
    <div className="w-full min-h-24 flex-center relative bg-muted rounded-lg border p-4 animate-pulse">
      <Loader2 className="animate-spin absolute top-0 left-0 size-8 text-primary" />
      <p className="animate-pulse text-lg text-muted-foreground">Loading...</p>
    </div>
  );
};
