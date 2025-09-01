"use client";
import { GetPathName } from "@/modules/user/helpers/getPathName";
import { FileText } from "lucide-react";

export const LayoutTitle = () => {
  const pathName = GetPathName();
  return (
    <div className="flex items-center justify-start gap-2">
      <FileText />
      <h2>{pathName.path === "/free-report" ? "Free Report" : "Pro Report"}</h2>
    </div>
  );
};
