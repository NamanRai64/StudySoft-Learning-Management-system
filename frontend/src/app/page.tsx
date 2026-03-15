import { FadeIn } from "@/components/ui/fade-in"
import { ResumeCard } from "@/components/dashboard/ResumeCard"
import { ProgressHeatmap } from "@/components/dashboard/ProgressHeatmap"
import { GamificationSidebar } from "@/components/dashboard/GamificationSidebar"
import { MiniVideoPlayer } from "@/components/dashboard/MiniVideoPlayer"
import Link from "next/link"

export default function Home() {
  return (
    <FadeIn className="flex flex-col gap-10 h-full max-w-[1200px] mx-auto py-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-[#1c1d1f] dark:text-white">Welcome back, John</h1>
        <p className="text-muted-foreground text-sm">
          You've completed 4 lessons this week. Keep up the great momentum!
        </p>
      </div>
      
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1c1d1f] dark:text-white flex items-center justify-between">
              Continue Learning
              <Link href="/courses" className="text-sm text-primary font-bold hover:underline">View all</Link>
            </h2>
            <ResumeCard />
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1c1d1f] dark:text-white">Your Learning Activity</h2>
            <ProgressHeatmap />
          </section>
        </div>
        
        <aside className="space-y-10">
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#1c1d1f] dark:text-white">Leaderboard</h2>
            <GamificationSidebar />
          </section>
        </aside>
      </div>

      <MiniVideoPlayer />
    </FadeIn>
  );
}
