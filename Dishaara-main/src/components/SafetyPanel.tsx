import { AlertTriangle, Phone, MapPin, Navigation, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SafetyPanelProps {
  onSOSActivate: () => void;
  onFindNearby: (type: 'hospital' | 'police') => void;
}

export function SafetyPanel({ onSOSActivate, onFindNearby }: SafetyPanelProps) {
  const emergencyContacts = [
    { name: "Police", number: "100", icon: Shield },
    { name: "Ambulance", number: "108", icon: Phone },
    { name: "Fire", number: "101", icon: AlertTriangle },
  ];

  return (
    <div className="space-y-6 p-4">
      {/* SOS Button */}
      <Card className="p-6 bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Emergency SOS</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Press to share your location with emergency contacts and authorities
          </p>
          <Button 
            onClick={onSOSActivate}
            variant="sos"
            size="xl"
            className="w-full"
          >
            <AlertTriangle className="w-6 h-6 mr-2" />
            ACTIVATE SOS
          </Button>
        </div>
      </Card>

      {/* Emergency Contacts */}
      <Card className="p-4 bg-gradient-card">
        <h4 className="font-semibold text-foreground mb-4 flex items-center">
          <Phone className="w-5 h-5 mr-2 text-primary" />
          Emergency Contacts
        </h4>
        <div className="grid grid-cols-3 gap-3">
          {emergencyContacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <button
                key={contact.number}
                className="flex flex-col items-center p-3 rounded-lg bg-background hover:bg-muted/50 transition-smooth border border-border"
                onClick={() => window.open(`tel:${contact.number}`)}
              >
                <Icon className="w-6 h-6 text-primary mb-2" />
                <span className="text-xs font-medium text-foreground">{contact.name}</span>
                <span className="text-xs text-muted-foreground">{contact.number}</span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Find Nearby */}
      <Card className="p-4 bg-gradient-card">
        <h4 className="font-semibold text-foreground mb-4 flex items-center">
          <Navigation className="w-5 h-5 mr-2 text-primary" />
          Find Nearby
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => onFindNearby('hospital')}
            variant="outline"
            className="flex-col h-auto py-4"
          >
            <MapPin className="w-6 h-6 mb-2 text-primary" />
            <span className="text-sm">Hospitals</span>
          </Button>
          <Button
            onClick={() => onFindNearby('police')}
            variant="outline"
            className="flex-col h-auto py-4"
          >
            <Shield className="w-6 h-6 mb-2 text-primary" />
            <span className="text-sm">Police Stations</span>
          </Button>
        </div>
      </Card>

      {/* Safety Tips */}
      <Card className="p-4 bg-gradient-card">
        <h4 className="font-semibold text-foreground mb-3">Safety Tips</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>• Always share your location with trusted contacts</p>
          <p>• Keep emergency numbers saved in your phone</p>
          <p>• Inform someone about your travel plans</p>
          <p>• Trust your instincts and stay alert</p>
        </div>
      </Card>
    </div>
  );
}