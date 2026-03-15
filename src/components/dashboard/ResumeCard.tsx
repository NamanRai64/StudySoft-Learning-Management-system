import { PlayCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { HoverCard } from "@/components/ui/fade-in"

export function ResumeCard() {
  return (
    <HoverCard className="md:col-span-2">
      <Card className="h-full overflow-hidden border-primary/20 bg-gradient-to-br from-background to-primary/5">
        <CardHeader className="pb-2">
          <CardDescription className="flex items-center gap-2 font-medium text-primary">
            <Clock className="h-4 w-4" />
            Pick up where you left off
          </CardDescription>
          <CardTitle className="text-2xl">Advanced React Patterns</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Module 3: Custom Hooks • 12:45 remaining</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span>Course Progress</span>
              <span>65%</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full gap-2 transition-transform hover:scale-[1.02]">
            <PlayCircle className="h-5 w-5" />
            Resume Lesson
          </Button>
        </CardFooter>
      </Card>
    </HoverCard>
  )
}
