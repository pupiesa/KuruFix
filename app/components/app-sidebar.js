"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { LogOut, Home, Wrench, BarChart3, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./ToggleThemes";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/repair", label: "แจ้งซ่อม", icon: Wrench },
  { href: "/status", label: "ติดตามสถานะ", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

function NavList() {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Kuru Fix</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={active} tooltip={item.label}>
                <Link href={item.href}>
                  <Icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function UserFooter() {
  const { data: session } = useSession();
  const { state } = useSidebar();
  if (!session?.user) return null;
  return (
    <SidebarFooter className="border-t pt-2">
      <div className="flex items-center gap-2 px-2 py-1.5">
        <Avatar className="h-8 w-8">
          <AvatarImage src={session.user.image ?? ""} />
          <AvatarFallback>{session.user.name?.charAt(0) ?? "U"}</AvatarFallback>
        </Avatar>
        {state !== "collapsed" && (
          <div className="min-w-0 text-xs leading-tight">
            <div className="truncate font-medium text-sm">
              {session.user.name}
            </div>
            <div className="truncate text-muted-foreground">
              {session.user.email}
            </div>
          </div>
        )}
        <ModeToggle />
      </div>
      <div className="px-2 pb-2">
        <Button
          variant="secondary"
          size="sm"
          className="w-full"
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 h-4 w-4" /> Sign out
        </Button>
      </div>
    </SidebarFooter>
  );
}

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="text-xs font-semibold tracking-wider" />
      <SidebarContent className="overflow-hidden">
        <NavList />
        <SidebarSeparator className="my-2" />
      </SidebarContent>
      <UserFooter />
    </Sidebar>
  );
}
