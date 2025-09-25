import { useState } from "react";
import { Search, Filter, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TourGuideCard } from "@/components/TourGuideCard";
import { useToast } from "@/hooks/use-toast";

const mockGuides = [
  {
    id: "1",
    name: "Rajesh Kumar",
    rating: 4.8,
    reviews: 127,
    languages: ["Hindi", "English", "Tamil"],
    specialties: ["Historical Sites", "Local Culture"],
    pricePerHour: 500,
    location: "Delhi, India",
    availableIn: "15 mins",
    verified: true,
    image: "/images/guid1.png"
  },
  {
    id: "2", 
    name: "Priya Sharma",
    rating: 4.9,
    reviews: 89,
    languages: ["English", "Punjabi", "French"],
    specialties: ["Adventure Tours", "Photography"],
    pricePerHour: 750,
    location: "Goa, India", 
    availableIn: "12 mins",
    verified: true,
    image: "/images/guid2.png"
  },
  {
    id: "3",
    name: "Mohammed Ali",
    rating: 4.6,
    reviews: 156,
    languages: ["Arabic", "Hindi", "English"],
    specialties: ["Heritage Tours", "Architecture"],
    pricePerHour: 600,
    location: "Agra, India",
    availableIn: "8 mins", 
    verified: true,
    image: "/images/guid3.jpg"
  },
];

export function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("current");
  const { toast } = useToast();

  const handleBookGuide = (guideId: string) => {
    const guide = mockGuides.find(g => g.id === guideId);
    toast({
      title: "Booking Request Sent",
      description: `Your request to book ${guide?.name} has been sent. You'll be connected shortly!`,
    });
  };

  const filteredGuides = mockGuides.filter(guide =>
    guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Find Your Guide</h1>
          <p className="text-muted-foreground">Verified local guides available within 15 minutes</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search by name, location, or specialty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filter Bar */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Near Me
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Top Rated
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <Filter className="w-4 h-4 mr-1" />
            Filters
          </Button>
        </div>
      </div>

      {/* Available Now Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Available Now</h2>
          <span className="text-sm text-muted-foreground">{filteredGuides.length} guides</span>
        </div>

        <div className="space-y-4">
          {filteredGuides.map((guide) => (
            <TourGuideCard
              key={guide.id}
              guide={guide}
              onBook={handleBookGuide}
            />
          ))}
        </div>
      </div>

      {/* Quick Tour Options */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Quick Tour Options</h2>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="card" className="h-20 flex-col">
            <span className="font-medium">1-2 Hours</span>
            <span className="text-xs text-muted-foreground">Quick City Tour</span>
          </Button>
          <Button variant="card" className="h-20 flex-col">
            <span className="font-medium">Half Day</span>
            <span className="text-xs text-muted-foreground">4-6 Hours</span>
          </Button>
          <Button variant="card" className="h-20 flex-col">
            <span className="font-medium">Full Day</span>
            <span className="text-xs text-muted-foreground">8+ Hours</span>
          </Button>
          <Button variant="card" className="h-20 flex-col">
            <span className="font-medium">Multi-Day</span>
            <span className="text-xs text-muted-foreground">Custom Package</span>
          </Button>
        </div>
      </div>
    </div>
  );
}