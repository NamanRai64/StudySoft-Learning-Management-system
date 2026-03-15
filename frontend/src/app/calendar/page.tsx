import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Target, 
  ClipboardList, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight,
  Video,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Learning Schedule | StudySoft",
  description: "Track your learning goals, assignments, and progress.",
}

const goals = [
  { id: 1, title: "Daily Study Goal", current: 90, total: 120, unit: "min", progress: 75 },
  { id: 2, title: "Weekly Resource Completion", current: 4, total: 10, unit: "lessons", progress: 40 },
  { id: 3, title: "Monthly Mock Tests", current: 2, total: 5, unit: "tests", progress: 40 }
]

const assignments = [
  { id: 1, title: "Module 3: Custom Hooks Project", due: "Mar 18", course: "Advanced React Patterns", priority: "High" },
  { id: 2, title: "UI/UX Case Study Draft", due: "Mar 20", course: "UI/UX Design Principles", priority: "Medium" },
  { id: 3, title: "Next.js 15 API Routes", due: "Mar 22", course: "Full-Stack Next.js 15", priority: "Low" }
]

const courseProgress = [
  { title: "Advanced React Patterns", progress: 68 },
  { title: "UI/UX Design Principles", progress: 45 },
  { title: "Full-Stack Next.js 15", progress: 22 }
]

export default function CalendarPage() {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1)
  const currentDay = 15

  return (
    <FadeIn className="flex flex-col gap-8 h-full max-w-[1400px] mx-auto py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight text-[#1c1d1f] dark:text-white">Learning Schedule</h1>
          <p className="text-muted-foreground text-sm">
            Everything you need to stay on track this month.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 px-4">Today</Button>
          <div className="flex items-center gap-1 border rounded-md p-1 bg-muted/20">
            <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronLeft className="h-4 w-4" /></Button>
            <span className="text-xs font-bold px-2">March 2026</span>
            <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Calendar Grid Section */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="rounded-lg border-none shadow-sm overflow-hidden bg-white dark:bg-card">
            <div className="grid grid-cols-7 border-b">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-4 text-center text-xs font-bold text-muted-foreground uppercase tracking-wider bg-muted/30">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {daysInMonth.map((day) => {
                const hasSession = day === 15 || day === 22
                const hasDeadline = day === 18 || day === 20 || day === 25
                const isCurrent = day === currentDay

                return (
                  <div 
                    key={day} 
                    className={`min-h-[100px] p-2 border-r border-b relative group hover:bg-muted/10 transition-colors ${isCurrent ? 'bg-primary/5' : ''}`}
                  >
                    <span className={`text-xs font-bold ${isCurrent ? 'h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center -mt-1 -ml-1' : 'text-muted-foreground'}`}>
                      {day}
                    </span>
                    
                    <div className="mt-2 space-y-1">
                      {hasSession && (
                        <div className="text-[10px] font-bold p-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-l-2 border-blue-500 rounded-r-md line-clamp-1">
                          Live Session
                        </div>
                      )}
                      {hasDeadline && (
                        <div className="text-[10px] font-bold p-1 bg-red-500/10 text-red-600 dark:text-red-400 border-l-2 border-red-500 rounded-r-md line-clamp-1">
                          Assignment
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>

          {/* Progress Section */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Course Progress
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {courseProgress.map((course) => (
                <div key={course.title} className="p-4 rounded-lg border group hover:border-primary transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-xs font-bold text-muted-foreground line-clamp-1">{course.title}</p>
                    <span className="text-[10px] font-black text-[#a435f0]">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-1.5" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Sections */}
        <div className="lg:col-span-4 space-y-10">
          {/* Goals Section */}
          <section>
            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              <Target className="h-5 w-5 text-[#a435f0]" />
              Learning Goals
            </h2>
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal.id} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-[#1c1d1f] dark:text-white">{goal.title}</span>
                    <span className="text-xs font-bold text-muted-foreground">{goal.current}/{goal.total} {goal.unit}</span>
                  </div>
                  <Progress value={goal.progress} className="h-2 rounded-full bg-muted [&>div]:bg-[#a435f0]" />
                </div>
              ))}
            </div>
          </section>

          {/* Assignments Section */}
          <section>
            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-emerald-500" />
              Upcoming Assignments
            </h2>
            <div className="space-y-4">
              {assignments.map((assignment) => (
                <Card key={assignment.id} className="p-4 rounded-lg border border-l-4 border-l-emerald-500 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded">
                      Due {assignment.due}
                    </span>
                    <Badge variant={assignment.priority === 'High' ? 'destructive' : 'secondary'} className="text-[10px] uppercase font-bold">
                      {assignment.priority}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-sm mb-1 leading-tight">{assignment.title}</h4>
                  <p className="text-xs text-muted-foreground">{assignment.course}</p>
                </Card>
              ))}
              <Button variant="outline" className="w-full h-11 font-bold text-xs uppercase tracking-widest rounded-lg">
                View All Assignments
              </Button>
            </div>
          </section>

          {/* Quick Stats Section */}
          <Card className="p-6 bg-blue-600 dark:bg-blue-900/40 text-white rounded-lg border-none">
            <h3 className="text-sm font-black uppercase tracking-widest text-blue-100 mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-2xl font-black">12.5h</p>
                <p className="text-[10px] uppercase font-bold text-blue-100/70">This Week</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black">84%</p>
                <p className="text-[10px] uppercase font-bold text-blue-100/70">Test Avg</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </FadeIn>
  )
}

