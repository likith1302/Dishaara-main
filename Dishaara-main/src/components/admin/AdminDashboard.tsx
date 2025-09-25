import { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminOverview } from "./AdminOverview";
import { AdminUsers } from "./AdminUsers";
import { AdminGuides } from "./AdminGuides";
import { AdminVehicles } from "./AdminVehicles";
import { AdminOffers } from "./AdminOffers";
import { AdminRewards } from "./AdminRewards";
import { AdminEvents } from "./AdminEvents";
import { AdminReviews } from "./AdminReviews";
import { AdminSafety } from "./AdminSafety";
import { AdminReports } from "./AdminReports";
import { AdminNotifications } from "./AdminNotifications";
import { AdminAudit } from "./AdminAudit";
import { AdminSettings } from "./AdminSettings";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface AdminDashboardProps {
  onBack: () => void;
}

export function AdminDashboard({ onBack }: AdminDashboardProps) {
  const [activeModule, setActiveModule] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeModule) {
      case "overview":
        return <AdminOverview />;
      case "users":
        return <AdminUsers />;
      case "guides":
        return <AdminGuides />;
      case "vehicles":
        return <AdminVehicles />;
      case "offers":
        return <AdminOffers />;
      case "rewards":
        return <AdminRewards />;
      case "events":
        return <AdminEvents />;
      case "reviews":
        return <AdminReviews />;
      case "safety":
        return <AdminSafety />;
      case "reports":
        return <AdminReports />;
      case "notifications":
        return <AdminNotifications />;
      case "audit":
        return <AdminAudit />;
      case "settings":
        return <AdminSettings />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10">
      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar
          activeModule={activeModule}
          onModuleChange={setActiveModule}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          {/* Header */}
          <header className="bg-card border-b shadow-sm px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onBack}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to App
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-primary">India Tourism Admin</h1>
                  <p className="text-sm text-muted-foreground">Manage your tourism ecosystem</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <p className="text-sm font-medium">SuperAdmin</p>
                  <p className="text-xs text-muted-foreground">admin@indiatour.com</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  SA
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}