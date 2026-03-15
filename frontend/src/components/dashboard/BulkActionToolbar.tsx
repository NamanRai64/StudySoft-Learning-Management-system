"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, CalendarPlus } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const students = [
  { id: "1", name: "Alex Patel", progress: "0%", status: "Not Started", module: "Module 2" },
  { id: "2", name: "Sarah Kim", progress: "15%", status: "At Risk", module: "Module 2" },
  { id: "3", name: "David Chen", progress: "90%", status: "On Track", module: "Module 5" },
  { id: "4", name: "Emma Wright", progress: "0%", status: "Not Started", module: "Module 2" },
]

export function BulkActionToolbar() {
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set())

  const toggleAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(students.map(s => s.id)))
    } else {
      setSelectedIds(new Set())
    }
  }

  const toggleOne = (id: string, checked: boolean) => {
    const next = new Set(selectedIds)
    if (checked) next.add(id)
    else next.delete(id)
    setSelectedIds(next)
  }

  const hasSelection = selectedIds.size > 0

  return (
    <Card className="md:col-span-2">
      <CardHeader className="pb-3 border-b">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-lg">Student Management</CardTitle>
            <CardDescription>Select students to apply bulk actions</CardDescription>
          </div>
          <div className="flex gap-2 h-[36px]">
            {hasSelection && (
              <FadeIn className="flex gap-2">
                <Button size="sm" variant="outline" className="gap-2">
                  <Mail className="h-4 w-4" /> Message ({selectedIds.size})
                </Button>
                <Button size="sm" variant="outline" className="gap-2">
                  <CalendarPlus className="h-4 w-4" /> Extend Deadline
                </Button>
              </FadeIn>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4 p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 border-b">
              <tr>
                <th className="p-3 text-left w-12 text-muted-foreground font-medium">
                  <Checkbox 
                    checked={selectedIds.size === students.length && students.length > 0} 
                    onCheckedChange={toggleAll}
                    aria-label="Select all"
                  />
                </th>
                <th className="p-3 text-left font-medium text-muted-foreground">Student</th>
                <th className="p-3 text-left font-medium text-muted-foreground">Status</th>
                <th className="p-3 text-left font-medium text-muted-foreground">Progress</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="p-3">
                    <Checkbox 
                      checked={selectedIds.has(student.id)} 
                      onCheckedChange={(c) => toggleOne(student.id, c === true)}
                      aria-label={`Select ${student.name}`}
                    />
                  </td>
                  <td className="p-3 font-medium">{student.name}</td>
                  <td className="p-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                      student.status === 'Not Started' ? 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300' :
                      student.status === 'At Risk' ? 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300' :
                      'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-3 text-muted-foreground">{student.progress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
