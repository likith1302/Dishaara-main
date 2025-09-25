import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Send, Users, MessageSquare } from "lucide-react";

export function AdminNotifications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Notifications</h1>
          <p className="text-muted-foreground">Create and manage push notifications</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Send className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Sent Today</p><p className="text-2xl font-bold">2,341</p></div><Send className="w-8 h-8 text-blue-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Open Rate</p><p className="text-2xl font-bold">68%</p></div><Bell className="w-8 h-8 text-green-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Active Users</p><p className="text-2xl font-bold">12,847</p></div><Users className="w-8 h-8 text-purple-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Templates</p><p className="text-2xl font-bold">15</p></div><MessageSquare className="w-8 h-8 text-orange-500" /></div></CardContent></Card>
      </div>
    </div>
  );
}