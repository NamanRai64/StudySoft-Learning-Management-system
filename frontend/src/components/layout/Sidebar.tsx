"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Calendar, Home, MessageSquare, Clock, ChevronLeft, ChevronRight, PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { useSidebar } from "@/components/contexts/SidebarContext"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Recents", href: "/recents", icon: Clock },
  { name: "Messages", href: "/messages", icon: MessageSquare },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isCollapsed, toggleSidebar } = useSidebar()

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-50 hidden flex-col border-r bg-white dark:bg-card md:flex shadow-sm transition-all duration-300 ease-in-out",
      isCollapsed ? "w-20" : "w-64"
    )}>
      <div className={cn(
        "flex h-[72px] items-center border-b transition-all duration-300",
        isCollapsed ? "justify-center px-0" : "px-6 justify-between"
      )}>
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transform rotate-12 group hover:rotate-0 transition-transform">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-xl font-black tracking-tighter text-[#1c1d1f] dark:text-white uppercase leading-none">
                Study<span className="text-primary">Soft</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                LMS Engine
              </span>
            </div>
          </Link>
        )}
        {isCollapsed && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="h-6 w-6" />
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <nav className="flex-1 space-y-0.5 overflow-auto py-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                title={isCollapsed ? item.name : ""}
                className={cn(
                  "group flex items-center transition-all border-l-[3px]",
                  isCollapsed ? "justify-center px-0 py-4" : "gap-4 px-6 py-3.5",
                  isActive
                    ? "bg-muted/50 text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:bg-muted/30 hover:text-foreground"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 transition-colors shrink-0",
                  isActive ? "text-primary" : "group-hover:text-foreground"
                )} />
                {!isCollapsed && <span className="font-bold text-sm whitespace-nowrap">{item.name}</span>}
              </Link>
            )
          })}
        </nav>

      </div>

      <Button
        variant="secondary"
        size="icon-xs"
        onClick={toggleSidebar}
        suppressHydrationWarning={true}
        className="absolute -right-3 top-20 z-50 rounded-full border shadow-md bg-white dark:bg-card hover:bg-primary hover:text-white transition-all duration-300"
      >
        {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </Button>

      {!isCollapsed && (
        <div className="p-6 border-t bg-muted/20 animate-in fade-in duration-300">
          <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
            <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">Weekly Goal</p>
            <p className="text-xs font-medium text-foreground mb-3">4.5 / 10 hours</p>
            <Progress value={45} className="h-1 bg-primary/20 [&>div]:bg-primary" />
          </div>
        </div>
      )}
    </aside>
  )
}
