import { FadeIn } from "@/components/ui/fade-in"
import { ResumeCard } from "@/components/dashboard/ResumeCard"
import { ProgressHeatmap } from "@/components/dashboard/ProgressHeatmap"
import { GamificationSidebar } from "@/components/dashboard/GamificationSidebar"
import { MiniVideoPlayer } from "@/components/dashboard/MiniVideoPlayer"

export default function Home() {
  return (
    <FadeIn className="flex flex-col gap-6 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your learning progress.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <ResumeCard />
          <ProgressHeatmap />
        </div>
        <GamificationSidebar />
      </div>

      <MiniVideoPlayer />
    </FadeIn>
  );
}
