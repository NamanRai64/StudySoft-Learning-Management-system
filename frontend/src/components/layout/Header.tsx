"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Bell, Search, CloudOff } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-[72px] w-full items-center justify-between border-b bg-white dark:bg-[#1c1d1f] px-8 shadow-sm">
      <div className="md:hidden flex items-center gap-2">
        <div className="h-8 w-8 bg-primary rounded-sm" />
        <span className="text-lg font-black tracking-tight uppercase">Study<span className="text-primary">Soft</span></span>
      </div>
      
      <div className="flex-1 max-w-[600px] hidden md:block">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-foreground transition-colors" />
          <input 
            type="text" 
            placeholder="Search for anything (React, UI/UX, Next.js...)" 
            suppressHydrationWarning={true}
            className="w-full h-12 bg-[#f7f9fa] dark:bg-[#2d2f31] border border-[#1c1d1f]/10 dark:border-white/10 rounded-full pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white dark:focus:bg-[#1c1d1f] transition-all"
            onKeyDown={(e) => {
              if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
              }
            }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 opacity-40 group-focus-within:opacity-0 transition-opacity">
            <kbd className="text-[10px] font-bold">⌘</kbd>
            <kbd className="text-[10px] font-bold">K</kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden xl:flex items-center gap-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 border border-emerald-100 dark:border-emerald-800">
          <CloudOff className="h-3.5 w-3.5" />
          <span className="uppercase tracking-wider">Cloud Sync Active</span>
        </div>
        <ThemeToggle />
        <Button variant="ghost" size="icon" suppressHydrationWarning={true} className="relative h-12 w-12 hover:bg-muted/50 rounded-none">
          <Bell className="h-5 w-5" />
          <span className="absolute right-3 top-3 flex h-2 w-2 rounded-full bg-primary border-2 border-white dark:border-[#1c1d1f]"></span>
        </Button>
        <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary ml-2 cursor-pointer hover:bg-primary/20 transition-colors">
          JD
        </div>
      </div>
    </header>
  )
}
