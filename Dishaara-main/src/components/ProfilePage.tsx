import { User, Star, Gift, MapPin, Calendar, Camera, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export function ProfilePage() {
  const { toast } = useToast();

  const userStats = [
    { label: "Tours Completed", value: 12, icon: MapPin },
    { label: "Events Attended", value: 8, icon: Calendar },
    { label: "Reviews Given", value: 15, icon: Star },
    { label: "Photos Shared", value: 47, icon: Camera },
  ];

  const recentActivities = [
    {
      type: "tour",
      title: "Historical Delhi Tour with Rajesh",
      date: "2 days ago",
      rating: 5,
    },
    {
      type: "event",
      title: "Joined Diwali Festival Celebration",
      date: "1 week ago",
      rating: null,
    },
    {
      type: "review",
      title: "Reviewed Kerala Backwater Cruise",
      date: "2 weeks ago", 
      rating: 4,
    },
  ];

  const handleAuth = () => {
    toast({
      title: "Authentication Required",
      description: "Please connect to Supabase for authentication features.",
    });
  };

  return (
    <div className="space-y-6 p-4">
      {/* Profile Header */}
      <Card className="p-6 bg-gradient-card">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">Tourist Explorer</h2>
            <p className="text-muted-foreground">Adventure seeker from Mumbai</p>
            <div className="flex items-center mt-2">
              <Star className="w-4 h-4 text-primary fill-current" />
              <span className="ml-1 font-medium">4.8</span>
              <span className="ml-1 text-sm text-muted-foreground">(24 reviews)</span>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* Rewards Section */}
      <Card className="p-4 bg-gradient-primary text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Gift className="w-6 h-6 mr-2" />
            <h3 className="text-lg font-semibold">Rewards Points</h3>
          </div>
          <Badge variant="secondary" className="text-primary">
            Gold Member
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl font-bold">2,450</p>
            <p className="text-sm opacity-90">Available Points</p>
          </div>
          <div>
            <p className="text-2xl font-bold">₹245</p>
            <p className="text-sm opacity-90">Cash Value</p>
          </div>
        </div>
        <Button variant="secondary" className="w-full mt-4" size="sm">
          Redeem Points
        </Button>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {userStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-4 text-center bg-gradient-card">
              <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <Card key={index} className="p-4 bg-gradient-card">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.date}</p>
                </div>
                {activity.rating && (
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-primary fill-current" />
                    <span className="ml-1 font-medium">{activity.rating}</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Account Actions */}
      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={handleAuth}
        >
          <User className="w-4 h-4 mr-2" />
          Account Settings
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={handleAuth}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>

      {/* Auth Notice */}
      <Card className="p-4 bg-muted/50 border-primary/20">
        <p className="text-sm text-muted-foreground text-center">
          Connect to Supabase for full authentication features including secure login, profile management, and data sync.
        </p>
      </Card>
    </div>
  );
}