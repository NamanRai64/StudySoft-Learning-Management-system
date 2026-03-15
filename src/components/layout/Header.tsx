"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Bell, Search } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <div className="md:hidden flex items-center gap-2 font-semibold">
        <span className="text-lg font-bold tracking-tight">StudySoft</span>
      </div>
      <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
        <Button variant="outline" className="hidden md:flex justify-start text-muted-foreground sm:max-w-xs md:w-64" onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}>
          <Search className="mr-2 h-4 w-4" />
          <span>Search courses...</span>
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <ThemeToggle />
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-destructive"></span>
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
    </header>
  )
}
