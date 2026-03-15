"use client"

import * as React from "react"
import { Reorder } from "framer-motion"
import { GripVertical, Plus, FileVideo, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const initialModules = [
  { id: "1", title: "Introduction to the Course", type: "video" },
  { id: "2", title: "Course Syllabus & Requirements", type: "pdf" },
  { id: "3", title: "Setting up your environment", type: "video" },
  { id: "4", title: "Project Architecture", type: "video" },
]

export function CourseBuilder() {
  const [items, setItems] = React.useState(initialModules)

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Course Builder</CardTitle>
          <CardDescription>Drag and drop to reorder modules</CardDescription>
        </div>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" /> Add Module
        </Button>
      </CardHeader>
      <CardContent>
        <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-2">
          {items.map((item) => (
            <Reorder.Item 
              key={item.id} 
              value={item} 
              className="flex items-center gap-3 p-3 rounded-md border bg-card cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors shadow-sm"
            >
              <GripVertical className="h-5 w-5 text-muted-foreground" />
              {item.type === "video" ? (
                <FileVideo className="h-5 w-5 text-blue-500" />
              ) : (
                <FileText className="h-5 w-5 text-orange-500" />
              )}
              <span className="font-medium text-sm">{item.title}</span>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </CardContent>
    </Card>
  )
}
