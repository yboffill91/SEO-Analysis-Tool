import type React from "react";
import { forwardRef } from "react";
import { Input, Label } from "@/modules/ui/athoms";
import { cn } from "@/lib/utils";
import { LucideIcon, TriangleAlertIcon } from "lucide-react";

interface RootInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
  error?: string;
  icon?: LucideIcon;
}

const RootInput = forwardRef<HTMLInputElement, RootInputProps>(
  ({ label, htmlFor, error, className, icon: Icon, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col items-start justify-start gap-0.5">
        <Label
          htmlFor={htmlFor}
          className={cn("text-lg ml-2 ", error && "text-destructive")}
        >
          {label}
        </Label>
        <div
          className={cn(
            "bg-accent rounded-lg border border-primary/20  w-full focus:ring-1 focus:ring-accent flex items-center justify-start relative ",
            error && "border-destructive bg-destructive/20",
            className
          )}
        >
          {Icon && (
            <Icon
              className={cn(
                "size-9 rounded-s-lg p-2",
                error
                  ? "bg-destructive/10 text-destructive"
                  : "bg-primary/10 p-2 dark:text-primary text-primary-foreground"
              )}
            />
          )}
          <Input
            id={htmlFor}
            name={htmlFor}
            ref={ref}
            {...props}
            className="focus:ring-0 border-0  focus-visible:ring-0 shadow-none w-full rounded-s-none"
          />
        </div>
        {error && (
          <div className="text-destructive    flex items-start text-left text-xs gap-2 rounded w-full px-2">
            <TriangleAlertIcon className=" size-6 p-1 rounded bg-destructive/10 text-destructive" />
            Error: {error}
          </div>
        )}
      </div>
    );
  }
);
RootInput.displayName = "RootInput";

export { RootInput };
