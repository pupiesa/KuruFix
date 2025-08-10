"use client";

import * as React from "react";
import Link from "next/link";
import { CirclePlus } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navmenu({ className = "" }) {
  const pathname = usePathname().replace(/[^a-zA-Z]/g, "");
  return (
    <NavigationMenu
      viewport={false}
      className={
        "sticky top-0 z-30 flex w-full items-center justify-between border-b-1 border-[color:oklch(var(--sidebar-foreground))] px-6 py-2 backdrop-blur" +
        className
      }
    >
      <NavigationMenuList className="flex items-center gap-2">
        <NavigationMenuItem>
          <NavigationMenu>{pathname ? pathname : "home"}</NavigationMenu>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Button className="gap-2" size="sm">
        <CirclePlus className="size-4" />
        <span className="hidden sm:inline">แจ้งซ่อมใหม่</span>
      </Button>
    </NavigationMenu>
  );
}
