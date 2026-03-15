import { Flame, Trophy, Star, Medal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HoverCard } from "@/components/ui/fade-in"

export function GamificationSidebar() {
  return (
    <Card className="flex flex-col h-full md:col-span-2 lg:col-span-1 lg:row-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Your Achievements
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-6">
        <HoverCard>
          <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="font-semibold text-sm">14 Day Streak</p>
                <p className="text-xs text-muted-foreground">Keep it up!</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400">🔥 +50 XP</Badge>
          </div>
        </HoverCard>

        <div className="space-y-3">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Recent Badges</h4>
          <div className="flex gap-2 flex-wrap">
            <HoverCard>
              <Badge variant="outline" className="px-3 py-1 gap-1 border-yellow-500/30 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
                <Star className="h-3 w-3" /> Quick Learner
              </Badge>
            </HoverCard>
            <HoverCard>
              <Badge variant="outline" className="px-3 py-1 gap-1 border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-400">
                <Medal className="h-3 w-3" /> React Master
              </Badge>
            </HoverCard>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Top Learners</h4>
          <div className="space-y-2">
            {[
              { name: "Alex P.", xp: 2450, isUser: false },
              { name: "You", xp: 2120, isUser: true },
              { name: "Samira K.", xp: 1980, isUser: false }
            ].map((user, i) => (
              <div key={user.name} className={`flex items-center justify-between p-2 rounded-md ${user.isUser ? 'bg-primary/10' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-muted-foreground w-4">{i + 1}.</span>
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <span className="text-xs font-semibold">{user.xp} XP</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
