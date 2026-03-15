import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, Award, BookOpen, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export const metadata = {
  title: "My Courses | StudySoft",
  description: "Browse and manage your enrolled courses.",
}

const enrolledCourses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    instructor: "Sarah Drasner",
    progress: 65,
    totalModules: 12,
    completedModules: 8,
    lastAccessed: "2 hours ago",
    thumbnail: "/images/course_react_patterns_1773562802192.png"
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    instructor: "Gary Simon",
    progress: 15,
    totalModules: 10,
    completedModules: 1,
    lastAccessed: "3 days ago",
    thumbnail: "/images/course_uiux_design_1773562818588.png"
  },
  {
    id: 3,
    title: "Full-Stack Next.js 15",
    instructor: "Lee Robinson",
    progress: 100,
    totalModules: 15,
    completedModules: 15,
    lastAccessed: "1 week ago",
    thumbnail: "/images/course_nextjs_fullstack_1773562837738.png"
  }
]

export default function CoursesPage() {
  return (
    <FadeIn className="flex flex-col gap-8 h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight text-[#1c1d1f] dark:text-white">My Learning</h1>
          <p className="text-muted-foreground text-sm">
            Everything you need to grow your skills.
          </p>
        </div>
      </div>

      <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {enrolledCourses.map((course) => (
          <Link 
            key={course.id} 
            href={`/courses/${course.id}`}
            className="group flex flex-col gap-2 transition-transform hover:scale-[1.01]"
          >
            <div className="relative aspect-video overflow-hidden border bg-muted">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              {course.progress === 100 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5" /> Completed
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-1 pr-2">
              <h3 className="font-bold text-[15px] leading-tight text-[#1c1d1f] dark:text-white line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-1">{course.instructor}</p>
              
              <div className="mt-2 space-y-1">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80">
                  <span>{course.progress}% Complete</span>
                  <span>{course.completedModules}/{course.totalModules} Lessons</span>
                </div>
                <Progress 
                  value={course.progress} 
                  className="h-1 rounded-none bg-muted [&>div]:bg-primary transition-all" 
                />
              </div>

              {course.progress < 100 && (
                <div className="mt-auto pt-2">
                  <Button 
                    variant="link" 
                    suppressHydrationWarning={true}
                    className="p-0 h-auto text-primary font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    Resume <PlayCircle className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </FadeIn>
  )
}
