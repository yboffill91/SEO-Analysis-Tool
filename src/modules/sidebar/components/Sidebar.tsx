import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/modules/ui/athoms/sidebar";
import { navMain } from "./sidebar-nav";
import { NavMain } from "./nav-main";
import { DashboardHeadMenu } from "./DashboardHeadMenu";
import { DashboardFooterText } from "./DashboardFooterText";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <DashboardHeadMenu />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-accent text-accent-foreground rounded-b-lg">
        <DashboardFooterText />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
