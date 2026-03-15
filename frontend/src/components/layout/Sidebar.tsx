"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Calendar, Home, MessageSquare, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r bg-white dark:bg-[#1c1d1f] md:flex shadow-sm">
      <div className="flex h-[72px] items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground transform rotate-12 group hover:rotate-0 transition-transform">
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
      </div>
      <nav className="flex-1 space-y-0.5 overflow-auto py-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-4 px-6 py-3.5 text-sm font-bold transition-all border-l-[3px]",
                isActive
                  ? "bg-muted/50 text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:bg-muted/30 hover:text-foreground"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 transition-colors",
                isActive ? "text-primary" : "group-hover:text-foreground"
              )} />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="p-6 border-t bg-muted/20">
        <div className="rounded-sm bg-primary/10 p-4 border border-primary/20">
          <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">Weekly Goal</p>
          <p className="text-xs font-medium text-foreground mb-3">4.5 / 10 hours completed</p>
          <Progress value={45} className="h-1 bg-primary/20 [&>div]:bg-primary" />
        </div>
      </div>
    </aside>
  )
}
