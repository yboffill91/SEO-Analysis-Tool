"use client";
import { cn } from "@/lib/utils";
import {
  Avatar,
  useSidebar,
  AvatarFallback,
  AvatarImage,
} from "@/modules/ui/athoms";
import { Zap } from "lucide-react";

export const DashboardFooterText = () => {
  const { state } = useSidebar();
  return (
    <div className="flex items-center justify-start gap-2 w-full">
      <Avatar>
        <AvatarImage>
          <Zap />
        </AvatarImage>
        <AvatarFallback>
          <Zap />
        </AvatarFallback>
      </Avatar>
      <p
        className={cn(
          "text-[0.7rem] ",
          state === "collapsed" ? "hidden" : "block"
        )}
      >
        Tamer Digital LLC {new Date().getFullYear()}
        <br /> SEO Audit Tool
      </p>
    </div>
  );
};
