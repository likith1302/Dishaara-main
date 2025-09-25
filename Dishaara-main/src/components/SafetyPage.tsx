import { SafetyPanel } from "@/components/SafetyPanel";
import { useToast } from "@/hooks/use-toast";

export function SafetyPage() {
  const { toast } = useToast();

  const handleSOSActivate = () => {
    toast({
      title: "SOS Activated!",
      description: "Your location has been shared with emergency contacts and authorities. Help is on the way.",
      variant: "destructive",
    });
  };

  const handleFindNearby = (type: 'hospital' | 'police') => {
    toast({
      title: `Finding Nearby ${type === 'hospital' ? 'Hospitals' : 'Police Stations'}`,
      description: `Searching for the nearest ${type === 'hospital' ? 'medical facilities' : 'police stations'} in your area...`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10 p-4">
        <h1 className="text-2xl font-bold text-foreground">Safety Center</h1>
        <p className="text-muted-foreground">Your security is our priority</p>
      </div>
      
      <SafetyPanel 
        onSOSActivate={handleSOSActivate}
        onFindNearby={handleFindNearby}
      />
    </div>
  );
}