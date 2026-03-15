import { FadeIn } from "@/components/ui/fade-in"
import { CourseBuilder } from "@/components/dashboard/CourseBuilder"
import { AnalyticsHeatmap } from "@/components/dashboard/AnalyticsHeatmap"
import { BulkActionToolbar } from "@/components/dashboard/BulkActionToolbar"
import { QuickResponsePanel } from "@/components/dashboard/QuickResponsePanel"

export const metadata = {
  title: "Instructor Control Tower",
  description: "Manage courses, view analytics, and respond to students.",
}

export default function InstructorDashboard() {
  return (
    <FadeIn className="flex flex-col gap-6 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Control Tower</h1>
        <p className="text-muted-foreground">
          Welcome back to the Instructor Dashboard. Manage courses and monitor student progress.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {/* Row 1: Course Builder & Analytics */}
        <CourseBuilder />
        <AnalyticsHeatmap />

        {/* Row 2: Bulk Actions & Q&A Inbox */}
        <BulkActionToolbar />
        <div className="md:col-span-1">
          <QuickResponsePanel />
        </div>
      </div>
    </FadeIn>
  );
}
