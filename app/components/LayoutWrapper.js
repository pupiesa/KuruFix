"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./app-sidebar";
import { Navmenu } from "./Navmenu";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  if (isLoginPage) {
    return <div>{children}</div>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-2 p-2 sticky top-0 z-30">
          <SidebarTrigger className="shrink-0" />
        </div>
        <main className="p-4 flex-1 min-w-0">{children}</main>
      </div>
    </SidebarProvider>
  );
}
