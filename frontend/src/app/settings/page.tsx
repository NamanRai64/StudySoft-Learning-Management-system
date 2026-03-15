import { FadeIn } from "@/components/ui/fade-in"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { User, Lock, Bell, CreditCard, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Settings | StudySoft",
  description: "Manage your account settings and profile.",
}

export default function SettingsPage() {
  return (
    <FadeIn className="max-w-[1000px] mx-auto py-8 px-4">
      <div className="mb-16 text-left">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">Account Settings</h1>
        <p className="text-muted-foreground text-lg">Manage your public profile and private security settings.</p>
      </div>

      <Tabs defaultValue="profile" orientation="vertical" className="gap-8 lg:gap-16">
        <TabsList className="md:flex-col h-fit bg-transparent border-none p-0 gap-1 md:w-64 shrink-0 overflow-x-auto md:overflow-visible no-scrollbar rounded-lg">
          <TabsTrigger 
            value="profile" 
            className="w-full justify-start gap-3 px-4 py-3 rounded-md border-l-[3px] border-transparent data-active:border-primary data-active:bg-muted/50 data-active:text-primary font-bold text-sm transition-all"
          >
            <User className="h-4 w-4" /> Profile
          </TabsTrigger>
          <TabsTrigger 
            value="security" 
            className="w-full justify-start gap-3 px-4 py-3 rounded-md border-l-[3px] border-transparent data-active:border-primary data-active:bg-muted/50 data-active:text-primary font-bold text-sm transition-all"
          >
            <Lock className="h-4 w-4" /> Account Security
          </TabsTrigger>
          <TabsTrigger 
            value="notifications" 
            className="w-full justify-start gap-3 px-4 py-3 rounded-md border-l-[3px] border-transparent data-active:border-primary data-active:bg-muted/50 data-active:text-primary font-bold text-sm transition-all"
          >
            <Bell className="h-4 w-4" /> Notifications
          </TabsTrigger>
          <TabsTrigger 
            value="billing" 
            className="w-full justify-start gap-3 px-4 py-3 rounded-md border-l-[3px] border-transparent data-active:border-primary data-active:bg-muted/50 data-active:text-primary font-bold text-sm transition-all"
          >
            <CreditCard className="h-4 w-4" /> Billing & Payments
          </TabsTrigger>
          <TabsTrigger 
            value="privacy" 
            className="w-full justify-start gap-3 px-4 py-3 rounded-md border-l-[3px] border-transparent data-active:border-primary data-active:bg-muted/50 data-active:text-primary font-bold text-sm transition-all"
          >
            <ShieldCheck className="h-4 w-4" /> Privacy
          </TabsTrigger>
        </TabsList>

        <div className="flex-1">
          <TabsContent value="profile" className="m-0 space-y-8 animate-in fade-in duration-300">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold">Public Profile</h3>
                <p className="text-sm text-muted-foreground">This information will be displayed to other students.</p>
              </div>
              
              <div className="space-y-4 max-w-xl">
                <div className="grid gap-2 text-left">
                  <Label htmlFor="displayName" className="font-bold">Display Name</Label>
                  <Input id="displayName" defaultValue="John Doe" className="h-12" suppressHydrationWarning={true} />
                </div>
                
                <div className="grid gap-2 text-left">
                  <Label htmlFor="headline" className="font-bold">Headline</Label>
                  <Input id="headline" placeholder="e.g. Fullstack Developer & React Enthusiast" className="h-12" suppressHydrationWarning={true} />
                  <p className="text-[11px] text-muted-foreground">A catchy line about yourself.</p>
                </div>

                <div className="grid gap-2 text-left">
                  <Label htmlFor="bio" className="font-bold">Biography</Label>
                  <Textarea 
                    id="bio" 
                    className="min-h-[120px]"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
              
              <Button className="h-12 px-8">Save Changes</Button>
            </div>
          </TabsContent>

          <TabsContent value="security" className="m-0 space-y-8 animate-in fade-in duration-300">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold">Account Security</h3>
                <p className="text-sm text-muted-foreground">Keep your account safe by updating your password and email.</p>
              </div>

              <div className="space-y-4 max-w-xl">
                <div className="grid gap-2 text-left">
                  <Label htmlFor="email" className="font-bold">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" className="h-12" suppressHydrationWarning={true} />
                </div>

                <div className="pt-6 space-y-4 text-left">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Update Password</h4>
                  <div className="grid gap-2">
                    <Label htmlFor="currentPass" className="font-bold">Current Password</Label>
                    <Input id="currentPass" type="password" className="h-12" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="newPass" className="font-bold">New Password</Label>
                    <Input id="newPass" type="password" className="h-12" />
                  </div>
                </div>
              </div>

              <Button className="h-12 px-8">Update Password</Button>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="m-0 space-y-8 animate-in fade-in duration-300">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold">Manage Email Notifications</h3>
                <p className="text-sm text-muted-foreground">Choose what updates you want to receive in your inbox.</p>
              </div>

              <div className="space-y-8 max-w-xl">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 pr-4">
                    <Label className="text-sm font-bold leading-none">Course Updates</Label>
                    <p className="text-xs text-muted-foreground leading-relaxed">Announcements from instructors for courses you're enrolled in.</p>
                  </div>
                  <Switch defaultChecked className="mt-1" />
                </div>
                
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 pr-4">
                    <Label className="text-sm font-bold leading-none">Promotional Emails</Label>
                    <p className="text-xs text-muted-foreground leading-relaxed">Get notified about sales, new courses, and special offers.</p>
                  </div>
                  <Switch className="mt-1" />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 pr-4">
                    <Label className="text-sm font-bold leading-none">Direct Messages</Label>
                    <p className="text-xs text-muted-foreground leading-relaxed">Email notifications when you receive a message from an instructor.</p>
                  </div>
                  <Switch defaultChecked className="mt-1" />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="billing" className="m-0 space-y-8 animate-in fade-in duration-300">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold">Billing & Payments</h3>
                <p className="text-sm text-muted-foreground">Manage your payment methods and purchase history.</p>
              </div>

              <div className="p-12 border border-dashed border-muted-foreground/20 text-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted mx-auto">
                  <CreditCard className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-bold">No saved cards found</p>
                  <p className="text-sm text-muted-foreground">You haven't added any payment methods yet.</p>
                </div>
                <Button variant="outline" className="rounded-lg">Add Payment Method</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="m-0 space-y-8 animate-in fade-in duration-300">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold">Privacy Settings</h3>
                <p className="text-sm text-muted-foreground">Control who can see your profile and activity.</p>
              </div>

              <div className="space-y-8 max-w-xl">
                 <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 pr-4">
                    <Label className="text-sm font-bold leading-none">Show profile to logged-in users</Label>
                    <p className="text-xs text-muted-foreground leading-relaxed">Allow other students to see your bio and courses.</p>
                  </div>
                  <Switch defaultChecked className="mt-1" />
                </div>
                
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 pr-4">
                    <Label className="text-sm font-bold leading-none">Show courses you're taking on your profile</Label>
                    <p className="text-xs text-muted-foreground leading-relaxed">Allow others to see your active learning list.</p>
                  </div>
                  <Switch defaultChecked className="mt-1" />
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </FadeIn>
  )
}
