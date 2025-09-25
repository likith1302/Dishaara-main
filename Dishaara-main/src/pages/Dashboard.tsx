import { useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { HomePage } from "@/components/HomePage";
import { GuidesPage } from "@/components/GuidesPage";
import { EventsPage } from "@/components/EventsPage";
import { SafetyPage } from "@/components/SafetyPage";
import { ProfilePage } from "@/components/ProfilePage";
import { VehiclesPage } from "@/components/VehiclesPage";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return <AdminDashboard onBack={() => setShowAdmin(false)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage onNavigate={setActiveTab} onAdminAccess={() => setShowAdmin(true)} />;
      case "guides":
        return <GuidesPage />;
      case "events":
        return <EventsPage />;
      case "safety":
        return <SafetyPage />;
      case "profile":
        return <ProfilePage />;
      case "vehicles":
        return <VehiclesPage />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <main className="max-w-md mx-auto">
        {renderContent()}
      </main>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}