import { Sidebar } from "@/components/layout/Sidebar"
import { MobileNav } from "@/components/layout/MobileNav"
import { Header } from "@/components/layout/Header"
import { CommandPalette } from "@/components/CommandPalette"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ResizablePanelGroup direction="horizontal" className="flex-1 items-stretch">
        <ResizablePanel
          defaultSize={20}
          minSize={15}
          maxSize={30}
          className="hidden md:flex flex-col"
        >
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle className="hidden md:flex" />
        <ResizablePanel defaultSize={80} className="flex flex-col">
          <Header />
          <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6 overflow-auto">
            {children}
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
      <MobileNav />
      <CommandPalette />
    </div>
  )
}
