"use client";

import * as React from "react";
import { ChevronRight, Settings, SunMoon, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/modules/ui/athoms/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/modules/ui/athoms/sidebar";
import { Button } from "@/modules/ui/athoms";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { UserAvatar } from "@/modules/user/components/userAvatar";
import { useUserStore } from "@/store/userStore";
import { useHasFullAccess } from "@/modules/user/helpers/hasAccess";

export function DashboardHeadMenu() {
  const { isMobile } = useSidebar();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const userName = useUserStore((state) => state.name);
  const userOcupation = useUserStore((state) => state.ocupation);
  const fullAccessGranted = useHasFullAccess();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <UserAvatar />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium capitalize">
                  {userName}
                </span>
                <span className="truncate text-xs">{userOcupation}</span>
              </div>
              <ChevronRight className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs flex items-center gap-2">
              <Settings className="size-4" /> Settings
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-2 p-2">
              <DropdownMenu>
                <Button
                  variant={"sidebarButton"}
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <SunMoon /> Change Theme
                </Button>
              </DropdownMenu>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                variant={"sidebarButton"}
                onClick={() => alert("Change Plan Logics")}
              >
                <User /> {fullAccessGranted ? "Pro User" : "Get Full Access"}
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
