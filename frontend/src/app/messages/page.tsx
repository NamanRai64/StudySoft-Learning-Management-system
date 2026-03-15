import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Send, User, CheckCheck } from "lucide-react"

export const metadata = {
  title: "Messages | StudySoft",
  description: "Communicate with instructors and peers.",
}

const conversations = [
  { id: 1, name: "Sarah Drasner", role: "Instructor", lastMsg: "Great project submission! I left some comments...", time: "10m", unread: true },
  { id: 2, name: "Study Group Alpha", role: "Group", lastMsg: "Alex: I'll review the pull request tonight.", time: "1h", unread: false },
  { id: 3, name: "Gary Simon", role: "Instructor", lastMsg: "Don't forget the assignment due on Friday.", time: "1d", unread: false },
]

export default function MessagesPage() {
  return (
    <FadeIn className="flex flex-col gap-6 h-[calc(100vh-8rem)]">
      <div className="flex flex-col gap-2 shrink-0">
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">
          Drop a message to your instructors or study partners.
        </p>
      </div>

      <Card className="flex flex-1 overflow-hidden min-h-0">
        {/* Sidebar (Conversations List) */}
        <div className="w-full md:w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search messages..."
                className="pl-8 bg-muted border-none"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((chat) => (
              <div 
                key={chat.id} 
                className={`p-4 border-b last:border-0 cursor-pointer transition-colors hover:bg-muted/50 ${chat.unread ? 'bg-primary/5 dark:bg-primary/10' : ''}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium text-sm flex items-center gap-2">
                    {chat.name} 
                    {chat.unread && <span className="h-2 w-2 rounded-full bg-primary" />}
                  </div>
                  <span className="text-xs text-muted-foreground">{chat.time}</span>
                </div>
                <div className="text-xs text-muted-foreground mb-1">{chat.role}</div>
                <p className="text-sm text-foreground/80 line-clamp-1">{chat.lastMsg}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area (Desktop Only Placeholder) */}
        <div className="hidden md:flex flex-col flex-1 bg-muted/20">
          <CardHeader className="border-b bg-background px-6 py-4 flex-row items-center gap-4">
            <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              <User className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">Sarah Drasner</CardTitle>
              <CardDescription className="text-xs">Instructor - Advanced React Patterns</CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex flex-col gap-2 items-center">
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Today</span>
            </div>
            
            <div className="flex gap-4 max-w-[80%]">
              <div className="h-8 w-8 bg-primary/20 rounded-full shrink-0 flex items-center justify-center text-primary hidden sm:flex">
                <User className="h-4 w-4" />
              </div>
              <div className="bg-background border rounded-2xl rounded-tl-sm p-4 shadow-sm text-sm">
                Hey there! I just finished reviewing your final project submission for Module 12. Great work on the state management architecture!
                <div className="text-xs text-muted-foreground mt-2 flex justify-end">10:42 AM</div>
              </div>
            </div>

            <div className="flex gap-4 max-w-[80%] self-end ms-auto flex-row-reverse">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-4 shadow-sm text-sm">
                Thanks Sarah! I struggled a bit with the zustand setup but I think I got the hang of it. Do you recommend any specific patterns for persisting state across page reloads?
                <div className="text-xs text-primary-foreground/70 mt-2 flex items-center justify-end gap-1">
                  10:45 AM <CheckCheck className="h-3 w-3" />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 max-w-[80%]">
              <div className="h-8 w-8 bg-primary/20 rounded-full shrink-0 flex items-center justify-center text-primary hidden sm:flex">
                <User className="h-4 w-4" />
              </div>
              <div className="bg-background border rounded-2xl rounded-tl-sm p-4 shadow-sm text-sm">
                Great question! Yes, zustand actually has a built-in `persist` middleware. I left some comments in your code with an example implementation. Take a look and let me know if it helps!
                <div className="text-xs text-muted-foreground mt-2 flex justify-end">10:52 AM</div>
              </div>
            </div>
          </CardContent>

          <div className="p-4 bg-background border-t">
            <div className="relative flex items-center">
              <Input
                placeholder="Type your message..."
                className="pr-12 bg-muted/50 border-muted-foreground/20 rounded-full"
              />
              <Button size="icon" className="absolute right-1 h-8 w-8 rounded-full">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </FadeIn>
  )
}
