import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { MessageSquareReply, CheckCircle2 } from "lucide-react"

export function QuickResponsePanel() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Q&A Inbox</CardTitle>
        <CardDescription>Pending questions from students</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="pending">Pending (1)</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending" className="space-y-4">
            <div className="rounded-xl border p-4 space-y-3 bg-card shadow-sm transition-all hover:shadow-md">
              <div className="space-y-1">
                <p className="font-semibold text-sm">React State Management</p>
                <p className="text-xs text-muted-foreground">Sarah K. • 2 hours ago</p>
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">
                Could you elaborate on the performance differences between Zustand and Context API?
              </p>
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="gap-2 flex-1">
                  <MessageSquareReply className="h-4 w-4" /> Reply
                </Button>
                <Button size="sm" variant="outline" className="px-3 text-muted-foreground hover:text-green-600 hover:border-green-600 hover:bg-green-50 dark:hover:bg-green-950" title="Mark as resolved">
                  <CheckCircle2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="resolved" className="text-sm text-muted-foreground text-center py-6">
            All caught up! Excellent work.
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
