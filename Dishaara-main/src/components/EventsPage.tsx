import { useState } from "react";
import { Plus, Search, Calendar, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EventCard } from "@/components/EventCard";
import { useToast } from "@/hooks/use-toast";

const mockEvents = [
  {
    id: "1",
    title: "Diwali Festival Celebration",
    date: "Nov 12, 2024",
    time: "6:00 PM - 11:00 PM",
    location: "India Gate, New Delhi",
    entryFee: 0,
    category: "Festival",
    attendees: 145,
    maxAttendees: 200,
    description: "Join us for a spectacular Diwali celebration with lights, music, dance, and traditional Indian cuisine.",
    image: "/images/event1.png"
  },
  {
    id: "2",
    title: "Himalayan Trek Expedition", 
    date: "Dec 15, 2024",
    time: "5:00 AM - 6:00 PM",
    location: "Manali, Himachal Pradesh",
    entryFee: 2500,
    category: "Adventure",
    attendees: 12,
    maxAttendees: 15,
    description: "Experience the breathtaking beauty of the Himalayas with experienced guides and fellow adventurers.",
    image: "/images/event2.png"
  },
  {
    id: "3",
    title: "Kerala Houseboat Party",
    date: "Dec 20, 2024", 
    time: "12:00 PM - 10:00 PM",
    location: "Alleppey Backwaters, Kerala",
    entryFee: 1800,
    category: "Party",
    attendees: 28,
    maxAttendees: 40,
    description: "Cruise through serene backwaters while enjoying music, food, and great company on traditional Kerala houseboats.",
    image: "/images/event3.png"
  },
  {
    id: "4",
    title: "Rajasthani Cultural Night",
    date: "Nov 25, 2024",
    time: "7:00 PM - 12:00 AM", 
    location: "Jaipur, Rajasthan",
    entryFee: 1200,
    category: "Cultural",
    attendees: 67,
    maxAttendees: 100,
    description: "Immerse yourself in authentic Rajasthani culture with folk dances, traditional music, and royal cuisine.",
    image: "/images/event4.png"
  },
];

export function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const { toast } = useToast();

  const handleJoinEvent = (eventId: string) => {
    const event = mockEvents.find(e => e.id === eventId);
    toast({
      title: "Event Joined!",
      description: `You've successfully joined "${event?.title}". Check your profile for details.`,
    });
  };

  const handleCreateEvent = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Event creation will be available soon. Stay tuned!",
    });
  };

  const filters = [
    { id: "all", label: "All Events", icon: Calendar },
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "festival", label: "Festivals", icon: Calendar },
    { id: "adventure", label: "Adventure", icon: Users },
  ];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = activeFilter === "all" || 
                         event.category.toLowerCase() === activeFilter ||
                         (activeFilter === "trending" && event.attendees > 50);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Events</h1>
          <p className="text-muted-foreground">Discover & create amazing experiences</p>
        </div>
        <Button onClick={handleCreateEvent} size="sm" variant="hero">
          <Plus className="w-4 h-4 mr-1" />
          Create
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {filters.map((filter) => {
          const Icon = filter.icon;
          return (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              className="flex items-center whitespace-nowrap"
            >
              <Icon className="w-4 h-4 mr-1" />
              {filter.label}
            </Button>
          );
        })}
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onJoin={handleJoinEvent}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No Events Found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
            <Button onClick={handleCreateEvent} variant="hero">
              Create Your First Event
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}