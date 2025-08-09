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
      <SidebarTrigger />
      <div className="flex flex-col flex-1 h-10 w-screen">
        <Navmenu className="w-full" />
        <main className="p-4 flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}
