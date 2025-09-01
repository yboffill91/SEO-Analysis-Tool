import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/modules/ui/athoms/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { PropsWithChildren } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../athoms";
import { AppSidebar } from "@/modules/sidebar/components/Sidebar";
import { SiteBreadCrumb } from "../molecules/SiteBreadcrumb";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar variant="floating" />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />

            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <SiteBreadCrumb />
          </div>
        </header>
        <div className="ps-2 pe-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
