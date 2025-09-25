import { Calendar, MapPin, Users, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import eventsImg from "@/assets/events-festival.jpg";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    entryFee: number;
    category: string;
    attendees: number;
    maxAttendees: number;
    image?: string;
    description: string;
  };
  onJoin: (eventId: string) => void;
}

export function EventCard({ event, onJoin }: EventCardProps) {
  const isAlmostFull = event.attendees / event.maxAttendees > 0.8;
  
  return (
    <div className="bg-gradient-card rounded-xl shadow-card border border-border overflow-hidden transition-smooth hover:shadow-warm">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image || eventsImg}
          alt={event.title}
          className="w-full h-full object-cover transition-smooth hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-black/60 text-white border-0">
            {event.category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge 
            variant={event.entryFee === 0 ? "default" : "outline"} 
            className="bg-black/60 text-white border-0"
          >
            {event.entryFee === 0 ? "FREE" : `₹${event.entryFee}`}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span className="truncate">{event.location}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2 text-primary" />
            <span>{event.attendees}/{event.maxAttendees} attending</span>
            {isAlmostFull && (
              <Badge variant="destructive" className="ml-2 text-xs">
                Almost Full
              </Badge>
            )}
          </div>
        </div>
        
        <Button 
          onClick={() => onJoin(event.id)}
          className="w-full"
          variant="hero"
          disabled={event.attendees >= event.maxAttendees}
        >
          {event.attendees >= event.maxAttendees ? "Event Full" : "Join Event"}
        </Button>
      </div>
    </div>
  );
}