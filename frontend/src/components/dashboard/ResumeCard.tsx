import { PlayCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { HoverCard } from "@/components/ui/fade-in"

export function ResumeCard() {
  const course = {
    title: "Advanced React Patterns",
    lesson: "Higher Order Components (HOCs)",
    progress: 65,
    thumbnail: "/images/course_react_patterns_1773562802192.png",
    remaining: "18:42"
  }

  return (
    <Card className="overflow-hidden border group cursor-pointer hover:shadow-lg transition-all rounded-none">
      <div className="flex flex-col sm:flex-row h-full">
        <div className="relative w-full sm:w-1/3 aspect-video shrink-0 bg-muted overflow-hidden">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-xl">
              <PlayCircle className="h-6 w-6 text-black fill-black" />
            </div>
          </div>
        </div>
        
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex-1">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#a435f0] mb-2">Resume Learning</p>
            <h3 className="text-xl font-bold text-[#1c1d1f] dark:text-white mb-1 line-clamp-1">{course.title}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
              <span className="font-bold text-[#1c1d1f] dark:text-white line-clamp-1">{course.lesson}</span> 
              • {course.remaining} left
            </p>
          </div>
          
          <div className="mt-auto space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-muted-foreground uppercase tracking-wider">
               <span>{course.progress}% Complete</span>
               <span className="text-primary italic">Keep going!</span>
            </div>
            <Progress value={course.progress} className="h-2 rounded-none bg-muted [&>div]:bg-primary" />
          </div>
        </div>
      </div>
    </Card>
  )
}
