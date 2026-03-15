import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar as CalendarIcon, Clock, Video } from "lucide-react"

export const metadata = {
  title: "Calendar | StudySoft",
  description: "View upcoming classes and assignment deadlines.",
}

const upcomingEvents = [
  {
    id: 1,
    title: "Live Q&A: React Server Components",
    date: "Today",
    time: "2:00 PM - 3:30 PM",
    type: "Live Session",
    course: "Advanced React Patterns",
    icon: Video,
    color: "text-blue-500 bg-blue-500/10"
  },
  {
    id: 2,
    title: "Module 3 Assignment Due",
    date: "Tomorrow",
    time: "11:59 PM",
    type: "Deadline",
    course: "UI/UX Design Principles",
    icon: Clock,
    color: "text-red-500 bg-red-500/10"
  },
  {
    id: 3,
    title: "Midterm Project Submission",
    date: "Friday, Mar 20",
    time: "11:59 PM",
    type: "Deadline",
    course: "Full-Stack Next.js 15",
    icon: Clock,
    color: "text-red-500 bg-red-500/10"
  }
]

export default function CalendarPage() {
  return (
    <FadeIn className="flex flex-col gap-6 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">
          Stay on top of upcoming live sessions and assignment deadlines.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-12 lg:min-h-[600px]">
        {/* Placeholder for an actual Calendar component */}
        <Card className="md:col-span-8 flex flex-col items-center justify-center p-12 text-center border-dashed">
          <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <CalendarIcon className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Interactive Calendar View</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              A full month grid view would be implemented here using a library like react-day-picker or fullcalendar.
            </p>
          </div>
        </Card>

        {/* Upcoming Events sidebar */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            Upcoming
          </h3>
          
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden border-l-4" style={{ borderLeftColor: event.type === 'Deadline' ? 'var(--destructive)' : 'var(--primary)' }}>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <div className={`p-2 rounded-md ${event.color}`}>
                      <event.icon className="h-4 w-4" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{event.date}</p>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <CardTitle className="text-base mt-2">{event.title}</CardTitle>
                  <CardDescription className="text-xs">{event.course}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
