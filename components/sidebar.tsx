"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarNav } from "@/components/sidebar-nav";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const sidebarNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
];

export function Sidebar() {
  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[280px]">
          <div className="flex flex-col h-full">
            <div className="px-1 py-6">
              <h2 className="mb-6 px-4 text-lg font-medium">Navigation</h2>
              <SidebarNav items={sidebarNavItems} />
            </div>
            <div className="mt-auto px-5 py-4 border-t">
              <ThemeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-screen">
        <div className="flex flex-col h-full">
          <div className="flex-1 space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-medium">Navigation</h2>
              <SidebarNav items={sidebarNavItems} />
            </div>
          </div>
          <div className="px-7 py-4 border-t">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
