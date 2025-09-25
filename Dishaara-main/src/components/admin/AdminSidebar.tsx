import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  Users, 
  Map, 
  Car, 
  Tag, 
  Calendar, 
  Gift, 
  Star, 
  UserCheck, 
  CreditCard, 
  Shield, 
  Bell, 
  FileText, 
  Settings, 
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard, badge: null },
  { id: "users", label: "Users", icon: UserCheck, badge: "89" },
  { id: "guides", label: "Guides", icon: Users, badge: "12" },
  { id: "vehicles", label: "Vehicles", icon: Car, badge: "23" },
  { id: "offers", label: "Offers", icon: Tag, badge: null },
  { id: "rewards", label: "Rewards", icon: Gift, badge: null },
  { id: "events", label: "Events", icon: Calendar, badge: "3" },
  { id: "reviews", label: "Feedback", icon: Star, badge: "8" },
  { id: "safety", label: "Safety", icon: Shield, badge: "2" },
  { id: "reports", label: "Reports", icon: FileText, badge: null },
  { id: "notifications", label: "Notifications", icon: Bell, badge: null },
  { id: "audit", label: "Audit Logs", icon: FileText, badge: null },
  { id: "settings", label: "Settings", icon: Settings, badge: null },
];

interface AdminSidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function AdminSidebar({ activeModule, onModuleChange, isOpen, onToggle }: AdminSidebarProps) {
  return (
    <aside className={cn(
      "fixed left-0 top-0 h-screen bg-card border-r shadow-lg transition-all duration-300 z-40",
      isOpen ? "w-64" : "w-16"
    )}>
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        {isOpen && (
          <div>
            <h2 className="text-lg font-bold text-primary">Admin Panel</h2>
            <p className="text-xs text-muted-foreground">India Tourism</p>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="p-1 h-8 w-8"
        >
          {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </Button>
      </div>

      {/* Menu Items */}
      <nav className="p-2 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start h-10",
                isActive && "bg-primary/10 text-primary border-primary/20",
                !isOpen && "px-2 justify-center"
              )}
              onClick={() => onModuleChange(item.id)}
            >
              <Icon className={cn("w-4 h-4", isOpen && "mr-3")} />
              {isOpen && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </>
              )}
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      {isOpen && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-primary/5 rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground">Version 2.1.0</p>
            <p className="text-xs text-primary font-medium">India Tourism Admin</p>
          </div>
        </div>
      )}
    </aside>
  );
}