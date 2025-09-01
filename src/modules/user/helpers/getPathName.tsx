"use client";
import { usePathname } from "next/navigation";

export function GetPathName() {
  const path = usePathname();
  return {
    path,
  };
}
