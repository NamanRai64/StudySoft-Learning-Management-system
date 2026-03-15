"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export function AnalyticsHeatmap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Drop-off Analytics
        </CardTitle>
        <CardDescription>Where students are getting stuck</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Module 3 Quiz</span>
              <span className="text-destructive font-bold">45% fail rate</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-destructive hover:scale-y-150 transition-transform cursor-pointer h-2 rounded-full origin-left" style={{ width: "45%" }} title="45% fail rate" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Video: Setting up</span>
              <span className="text-orange-500 font-bold">30% drop-off</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-orange-500 hover:scale-y-150 transition-transform cursor-pointer h-2 rounded-full origin-left" style={{ width: "30%" }} title="30% drop-off" />
            </div>
          </div>

          <div className="pt-4 mt-4 border-t text-xs text-muted-foreground text-center">
            Heatmap data updates every hour.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
