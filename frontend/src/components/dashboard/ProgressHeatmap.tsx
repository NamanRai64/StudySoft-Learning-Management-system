import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function getHeatmapColor(value: number) {
  if (value === 0) return "bg-muted"
  if (value < 2) return "bg-primary/30"
  if (value < 4) return "bg-primary/60"
  return "bg-primary"
}

export function ProgressHeatmap() {
  // Generate 60 days of mock data
  const data = Array.from({ length: 60 }, () => Math.floor(Math.random() * 5))
  
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg">Activity Pulse</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1.5 overflow-x-auto pb-2">
            {/* Split data into columns of 7 for weeks */}
            {Array.from({ length: Math.ceil(data.length / 7) }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1.5">
                {data.slice(weekIndex * 7, weekIndex * 7 + 7).map((value, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-sm ${getHeatmapColor(value)} transition-colors hover:ring-2 ring-primary/50`}
                    title={`${value} hours learned`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center text-xs text-muted-foreground gap-2 mt-2">
            <span>Less</span>
            <div className="w-3 h-3 rounded-sm bg-muted" />
            <div className="w-3 h-3 rounded-sm bg-primary/30" />
            <div className="w-3 h-3 rounded-sm bg-primary/60" />
            <div className="w-3 h-3 rounded-sm bg-primary" />
            <span>More</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
