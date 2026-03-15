import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Play, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const recentActivities = [
  { id: 1, title: "Custom Hooks & Logic Reuse", course: "Advanced React Patterns", timestamp: "2 hours ago", progress: 85, type: "Lesson" },
  { id: 2, title: "Navigation & Routing", course: "Full-Stack Next.js 15", timestamp: "Yesterday", progress: 40, type: "Video" },
  { id: 3, title: "Color Theory & Palette Design", course: "UI/UX Design Principles", timestamp: "2 days ago", progress: 10, type: "Resource" },
]

export const metadata = {
  title: "Recents | StudySoft",
  description: "Continue where you left off.",
}

export default function RecentsPage() {
  return (
    <FadeIn className="max-w-[1000px] mx-auto py-8 px-4">
      <div className="mb-10 text-left">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Recently Accessed</h1>
        <p className="text-muted-foreground">Continue where you left off with your most recent learning activities.</p>
      </div>

      <div className="grid gap-6">
        {recentActivities.map((activity) => (
          <Card key={activity.id} className="group hover:border-primary transition-all overflow-hidden rounded-lg">
            <div className="flex flex-col md:flex-row items-center p-0">
              <div className="w-full md:w-48 h-32 bg-muted flex items-center justify-center relative overflow-hidden shrink-0">
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="text-white h-10 w-10 fill-current" />
                 </div>
                 <Clock className="h-10 w-10 text-muted-foreground/30" />
              </div>
              <CardContent className="flex-1 p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">{activity.type}</p>
                    <h3 className="text-lg font-bold line-clamp-1">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.course}</p>
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded">
                    {activity.timestamp}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${activity.progress}%` }} />
                  </div>
                  <span className="text-xs font-bold whitespace-nowrap">{activity.progress}% Complete</span>
                  <Link href={`/courses/${activity.id}`}>
                    <Button size="sm" className="h-9 px-4 rounded-lg">Resume</Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </FadeIn>
  )
}
