"use client"

import { Sidebar } from "@/components/layout/Sidebar"
import { MobileNav } from "@/components/layout/MobileNav"
import { Header } from "@/components/layout/Header"
import { CommandPalette } from "@/components/CommandPalette"
import { useSidebar } from "@/components/contexts/SidebarContext"
import { cn } from "@/lib/utils"

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Sidebar />
      <div className={cn(
        "flex flex-col flex-1 transition-all duration-300 ease-in-out",
        isCollapsed ? "md:pl-20" : "md:pl-64"
      )}>
        <Header />
        <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6">{children}</main>
      </div>
      <MobileNav />
      <CommandPalette />
    </div>
  )
}
