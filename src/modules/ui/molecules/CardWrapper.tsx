import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/modules/ui/athoms";
import { PropsWithChildren, ReactNode } from "react";
interface CardWrapperProps extends PropsWithChildren {
  title?: ReactNode;
  description?: string;
  actions?: ReactNode;
  footer?: ReactNode;
  className?: string;
  markableContent?: boolean;
  mainWrapper?: boolean;
  cols?: "2" | "3" | "4" | "6";
}

export function CardWrapper({
  title,
  description,
  actions,
  footer,
  children,
  className,
  markableContent = false,
  mainWrapper = false,
  cols = "3",
}: CardWrapperProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl shadow-md m-0.5 f-full justify-between",
        mainWrapper && "w-full",
        `xl:col-span-${cols} lg:col-span-4 md:col-span-6 col-span-12`,
        className
      )}
    >
      {(title || description) && (
        <CardHeader>
          {title && (
            <CardTitle className="flex items-center gap-2 text-lg">
              {title}
            </CardTitle>
          )}
          {description && (
            <CardDescription className="w-full text-left text-sm font-light -mt-2">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      )}

      <CardContent
        className={cn(
          "m-1",
          markableContent &&
            "bg-background rounded-lg  border  min-h-40 flex-center"
        )}
      >
        {children}
      </CardContent>

      {(actions || footer) && (
        <CardFooter className="flex flex-col gap-2  sm:items-center sm:justify-between">
          {actions && (
            <div className="flex gap-2 items-center w-full">{actions}</div>
          )}
          {footer && (
            <div className="w-full text-right text-xs font-light text-foreground/80">
              {footer}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
