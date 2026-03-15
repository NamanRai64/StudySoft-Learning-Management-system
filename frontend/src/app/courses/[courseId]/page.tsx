"use client"

import { useState } from "react"
import { FadeIn, HoverCard } from "@/components/ui/fade-in"
import { VideoPlayer } from "@/components/courses/VideoPlayer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlayCircle, CheckCircle, FileText, ChevronLeft, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Mock course data
const courseData = {
  title: "Advanced React Patterns",
  instructor: "Sarah Drasner",
  sections: [
    {
      id: "s1",
      title: "Section 1: Introduction to Patterns",
      lessons: [
        { id: 1, title: "Welcome to the Course", duration: "2:45", url: "https://www.youtube.com/watch?v=R_QpE391J-U", completed: true, type: 'video' },
        { id: 2, title: "What are Design Patterns?", duration: "5:20", url: "https://www.youtube.com/watch?v=B6aNv8nkUSw", completed: true, type: 'video' },
      ]
    },
    {
      id: "s2",
      title: "Section 2: Component Patterns",
      lessons: [
        { id: 3, title: "Higher Order Components (HOCs)", duration: "18:42", url: "https://www.youtube.com/watch?v=hG7v7qaQksU", completed: false, type: 'video' },
        { id: 4, title: "Render Props vs Hooks", duration: "12:15", url: "https://www.youtube.com/watch?v=hEGg-3pIEno", completed: false, type: 'video' },
        { id: 5, title: "Compound Components Deep Dive", duration: "24:10", url: "https://www.youtube.com/watch?v=35lXWvCuM8o", completed: false, type: 'video' },
        { id: 6, title: "Section Quiz", duration: "5 questions", url: "", completed: false, type: 'quiz' },
      ]
    }
  ]
}

export default function CourseDetailPage() {
  const allLessons = courseData.sections.flatMap(s => s.lessons)
  const [activeModule, setActiveModule] = useState(allLessons[2])

  const handleLessonComplete = () => {
    const currentIndex = allLessons.findIndex(m => m.id === activeModule.id)
    if (currentIndex < allLessons.length - 1) {
      setActiveModule(allLessons[currentIndex + 1])
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] -m-6 overflow-hidden bg-white dark:bg-[#1c1d1f]">
      {/* Learning Header */}
      <header className="h-[56px] bg-[#2d2f31] text-white flex items-center justify-between px-4 shrink-0 border-b border-white/10 z-10">
        <div className="flex items-center gap-4">
          <Link href="/courses">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-none h-[56px] w-[56px] border-r border-white/10">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />
          <h1 className="text-sm font-bold tracking-tight line-clamp-1 hidden md:block">
            {courseData.title}
          </h1>
        </div>
        
        <div className="flex items-center gap-6 pr-2">
          <div className="hidden lg:flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border-2 border-primary/40 flex items-center justify-center text-[10px] font-bold">
              40%
            </div>
            <span className="text-xs font-bold text-white/80">Your progress</span>
          </div>
          <Button variant="outline" size="sm" className="hidden sm:flex border-white/20 text-white hover:bg-white/10 rounded-none h-9">
            <Award className="h-4 w-4 mr-2" /> Share
          </Button>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Video Player Container */}
          <div className="bg-black aspect-video w-full max-h-[70vh] flex items-center justify-center relative group">
            <VideoPlayer 
              url={activeModule.url} 
              onEnded={handleLessonComplete} 
            />
          </div>

          {/* Lesson Content Tabs */}
          <div className="max-w-[1000px] w-full mx-auto p-8">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
               <div>
                  <h2 className="text-2xl font-bold text-[#1c1d1f] dark:text-white mb-1">{activeModule.title}</h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    {activeModule.type === 'video' ? <PlayCircle className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                    Lesson {activeModule.id} • {activeModule.duration}
                  </p>
               </div>
               <Button onClick={handleLessonComplete} className="rounded-none px-6 font-bold h-12">
                 Mark as Completed
               </Button>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 gap-8">
                <TabsTrigger value="search" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1c1d1f] data-[state=active]:bg-transparent px-0 pb-3 font-bold text-[#2d2f31] dark:text-white dark:data-[state=active]:border-white">
                  Search
                </TabsTrigger>
                <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1c1d1f] data-[state=active]:bg-transparent px-0 pb-3 font-bold text-[#2d2f31] dark:text-white dark:data-[state=active]:border-white">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="notes" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1c1d1f] data-[state=active]:bg-transparent px-0 pb-3 font-bold text-[#2d2f31] dark:text-white dark:data-[state=active]:border-white">
                  Notes
                </TabsTrigger>
                <TabsTrigger value="announcements" className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#1c1d1f] data-[state=active]:bg-transparent px-0 pb-3 font-bold text-[#2d2f31] dark:text-white dark:data-[state=active]:border-white">
                  Announcements
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="py-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-[#1c1d1f] dark:text-white">About this course</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Improve your React skills by mastering advanced design patterns like Higher Order Components, 
                    Render Props, Compound Components, and custom Hooks. This course is designed for professional developers 
                    looking to build scalable and maintainable UI libraries.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-8 py-4 border-y">
                   <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase text-muted-foreground/80">Skill Level</span>
                      <span className="font-medium">Advanced Level</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase text-muted-foreground/80">Students</span>
                      <span className="font-medium">12,450 enrolled</span>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase text-muted-foreground/80">Language</span>
                      <span className="font-medium">English (US)</span>
                   </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Udemy Style Sidebar */}
        <div className="hidden lg:flex w-[350px] flex-col border-l shrink-0 bg-[#f7f9fa] dark:bg-[#1c1d1f]">
          <div className="h-[56px] border-b flex items-center px-4 shrink-0 bg-white dark:bg-[#1c1d1f]">
            <h3 className="font-bold text-sm">Course Content</h3>
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col">
              {courseData.sections.map((section) => (
                <div key={section.id} className="flex flex-col">
                  <div className="bg-white dark:bg-[#2d2f31]/50 p-4 border-b flex flex-col gap-1">
                    <span className="text-sm font-bold">{section.title}</span>
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      {section.lessons.filter(l => l.completed).length} / {section.lessons.length} • {section.lessons.reduce((acc, curr) => acc + (parseInt(curr.duration) || 0), 0)} min
                    </span>
                  </div>
                  <div className="flex flex-col">
                    {section.lessons.map((lesson) => {
                      const isActive = lesson.id === activeModule.id
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => lesson.url && setActiveModule(lesson)}
                          className={cn(
                            "group flex items-start gap-3 p-4 text-left border-b transition-colors",
                            isActive ? "bg-[#d1d7dc] dark:bg-[#3e4143]" : "hover:bg-muted/50"
                          )}
                        >
                          <div className="mt-1 shrink-0">
                            {lesson.completed ? (
                              <CheckCircle className="h-4 w-4 text-[#1e6055] fill-[#1e6055]/10" />
                            ) : (
                              <div className="h-4 w-4 border-2 rounded-none border-muted-foreground/40 group-hover:border-[#1c1d1f] transition-colors" />
                            )}
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className={cn(
                              "text-sm font-medium leading-tight",
                              isActive ? "text-primary dark:text-white" : ""
                            )}>
                              {lesson.title}
                            </span>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              {lesson.type === 'video' ? <PlayCircle className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
                              {lesson.duration}
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
