import { Home, Users, Calendar, Shield, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "guides", label: "Guides", icon: Users },
  { id: "events", label: "Events", icon: Calendar },
  { id: "safety", label: "Safety", icon: Shield },
  { id: "profile", label: "Profile", icon: User },
];

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-warm z-50">
      <div className="flex justify-around items-center py-2 max-w-md mx-auto">
        {navigationItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-4 rounded-lg transition-smooth min-w-[60px]",
                isActive 
                  ? "text-primary bg-primary/10 shadow-card" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Icon className={cn("h-5 w-5 mb-1", isActive && "drop-shadow-sm")} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}