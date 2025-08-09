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

// Clean nav bar with right-aligned action button
export function Navmenu({ className = "" }) {
  return (
    <NavigationMenu
      viewport={false}
      className={
        "sticky top-0 z-30 flex w-full items-center justify-between border-b bg-background/80 px-4 py-1 backdrop-blur supports-[backdrop-filter]:bg-background/60 " +
        className
      }
    >
      <NavigationMenuList className="flex items-center gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Button className="gap-2" size="sm">
        <CirclePlus className="size-4" />
        <span className="hidden sm:inline">แจ้งซ่อมใหม่</span>
      </Button>
    </NavigationMenu>
  );
}

// Placeholder export removed corrupted ListItem; restore only if needed later.
