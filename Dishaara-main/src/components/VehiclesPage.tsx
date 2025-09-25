import { useState } from "react";
import { Search, Plus, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VehiclePoolCard } from "@/components/VehiclePoolCard";
import { useToast } from "@/hooks/use-toast";

const mockPools = [
  {
    id: "1",
    driverName: "Amit Sharma",
    rating: 4.8,
    vehicleType: "car" as const,
    from: "Delhi Airport",
    to: "India Gate",
    departureTime: "2:30 PM",
    availableSeats: 2,
    totalSeats: 4,
    pricePerSeat: 150,
    isEcoFriendly: false,
    estimatedDuration: "45 mins",
  },
  {
    id: "2",
    driverName: "Priya Patel",
    rating: 4.9,
    vehicleType: "eco" as const,
    from: "Connaught Place",
    to: "Gurgaon Cyber City",
    departureTime: "6:00 PM",
    availableSeats: 1,
    totalSeats: 4,
    pricePerSeat: 200,
    isEcoFriendly: true,
    estimatedDuration: "1 hour",
  },
  {
    id: "3",
    driverName: "Raj Kumar",
    rating: 4.6,
    vehicleType: "bike" as const,
    from: "Red Fort",
    to: "Lotus Temple",
    departureTime: "4:15 PM",
    availableSeats: 1,
    totalSeats: 2,
    pricePerSeat: 80,
    isEcoFriendly: false,
    estimatedDuration: "25 mins",
  },
];

export function VehiclesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const { toast } = useToast();

  const handleJoinPool = (poolId: string) => {
    const pool = mockPools.find(p => p.id === poolId);
    toast({
      title: "Pool Request Sent",
      description: `Your request to join ${pool?.driverName}'s ride has been sent. You'll receive confirmation shortly!`,
    });
  };

  const handleOfferRide = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Ride offering will be available soon. Stay tuned!",
    });
  };

  const filters = [
    { id: "all", label: "All Rides" },
    { id: "car", label: "Cars" },
    { id: "bike", label: "Bikes" },
    { id: "eco", label: "Eco-Friendly" },
  ];

  const filteredPools = mockPools.filter(pool => {
    const matchesSearch = pool.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pool.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pool.driverName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = activeFilter === "all" || 
                         pool.vehicleType === activeFilter ||
                         (activeFilter === "eco" && pool.isEcoFriendly);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Vehicle Pooling</h1>
          <p className="text-muted-foreground">Share rides, save money, help environment</p>
        </div>
        <Button onClick={handleOfferRide} size="sm" variant="hero">
          <Plus className="w-4 h-4 mr-1" />
          Offer Ride
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search by location or driver..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            variant={activeFilter === filter.id ? "default" : "outline"}
            size="sm"
            className="whitespace-nowrap"
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Available Rides */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Available Rides</h2>
          <span className="text-sm text-muted-foreground">{filteredPools.length} rides</span>
        </div>

        {filteredPools.length > 0 ? (
          filteredPools.map((pool) => (
            <VehiclePoolCard
              key={pool.id}
              pool={pool}
              onJoin={handleJoinPool}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No Rides Found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or be the first to offer a ride!</p>
            <Button onClick={handleOfferRide} variant="hero">
              Offer Your Ride
            </Button>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="card" className="h-16 flex-col" onClick={handleOfferRide}>
          <span className="font-medium">Offer Ride</span>
          <span className="text-xs text-muted-foreground">Earn while traveling</span>
        </Button>
        <Button variant="card" className="h-16 flex-col">
          <span className="font-medium">Track Live</span>
          <span className="text-xs text-muted-foreground">Real-time location</span>
        </Button>
      </div>
    </div>
  );
}