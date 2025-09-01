import { LucideIcon } from "lucide-react";

export interface SidevarNavItem extends SidebarNavSubItem {
  icon: LucideIcon;
  isActive?: boolean;
  items?: SidebarNavSubItem[];
}

interface SidebarNavSubItem {
  title: string;
  url: string;
}
