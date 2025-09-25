import { Car, Users, MapPin, Clock, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VehiclePoolCardProps {
  pool: {
    id: string;
    driverName: string;
    rating: number;
    vehicleType: "car" | "bike" | "eco";
    from: string;
    to: string;
    departureTime: string;
    availableSeats: number;
    totalSeats: number;
    pricePerSeat: number;
    isEcoFriendly: boolean;
    estimatedDuration: string;
  };
  onJoin: (poolId: string) => void;
}

export function VehiclePoolCard({ pool, onJoin }: VehiclePoolCardProps) {
  const getVehicleIcon = () => {
    switch (pool.vehicleType) {
      case "bike":
        return "🏍️";
      case "eco":
        return "🚗";
      default:
        return "🚕";
    }
  };

  const getVehicleColor = () => {
    switch (pool.vehicleType) {
      case "eco":
        return "bg-accent";
      case "bike":
        return "bg-secondary";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className="bg-gradient-card rounded-xl shadow-card border border-border p-4 transition-smooth hover:shadow-warm">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 ${getVehicleColor()} rounded-full flex items-center justify-center text-white text-xl`}>
            {getVehicleIcon()}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{pool.driverName}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-primary fill-current" />
              <span className="ml-1 text-sm font-medium">{pool.rating}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-primary">₹{pool.pricePerSeat}</div>
          <div className="text-xs text-muted-foreground">per seat</div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2 text-primary" />
          <span className="truncate">{pool.from} → {pool.to}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span>{pool.departureTime}</span>
          </div>
          <span>{pool.estimatedDuration}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2 text-primary" />
            <span>{pool.availableSeats}/{pool.totalSeats} seats available</span>
          </div>
          {pool.isEcoFriendly && (
            <Badge variant="secondary" className="bg-accent/10 text-accent">
              <Leaf className="w-3 h-3 mr-1" />
              Eco-Friendly
            </Badge>
          )}
        </div>
      </div>

      <Button 
        onClick={() => onJoin(pool.id)}
        className="w-full"
        variant="hero"
        disabled={pool.availableSeats === 0}
      >
        {pool.availableSeats === 0 ? "Fully Booked" : "Join Pool"}
      </Button>
    </div>
  );
}