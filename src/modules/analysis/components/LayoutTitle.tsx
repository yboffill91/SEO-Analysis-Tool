"use client";
import { GetPathName } from "@/modules/user/helpers/getPathName";
import { useURLStore } from "@/store/urlStore";
import { FileText } from "lucide-react";

export const LayoutTitle = () => {
  const pathName = GetPathName();
  const url = useURLStore((state) => state.url);
  return (
    <div className="flex flex-col items-center justify-start gap-1">
      <div className="flex items-center justify-start gap-2">
        <FileText />
        <h2>
          {pathName.path === "/free-report" ? "Free Report" : "Pro Report"}
        </h2>
      </div>
      <p className="text-sm bg-accent px-2 rounded-lg text-accent-foreground ">
        {url}
      </p>
    </div>
  );
};
