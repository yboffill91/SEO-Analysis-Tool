import { BarChart2, BookOpen, Bot, Calendar, ScanSearch } from "lucide-react";
import { SidevarNavItem } from "../models/sidebar-nav-types";

export const navMain: SidevarNavItem[] = [
  {
    title: "SEO Analysis",
    url: "/",
    icon: BarChart2,
    isActive: true,
    items: [
      {
        title: "Report",
        url: "/",
      },
    ],
  },

  // {
  //   title: "AI Content Generator",
  //   url: "/audience",
  //   icon: Bot,
  // },
  // {
  //   title: "Monthly Report",
  //   url: "/monthly-report",
  //   icon: Calendar,
  // },
  // {
  //   title: "SEO Guide",
  //   url: "/guide",
  //   icon: BookOpen,
  // },
];
