import { Star, Clock, MapPin, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import tourGuideImg from "@/assets/tour-guide.jpg";

interface TourGuideCardProps {
  guide: {
    id: string;
    name: string;
    rating: number;
    reviews: number;
    languages: string[];
    specialties: string[];
    pricePerHour: number;
    location: string;
    availableIn: string;
    verified: boolean;
  };
  onBook: (guideId: string) => void;
}

export function TourGuideCard({ guide, onBook }: TourGuideCardProps) {
  return (
    <div className="bg-gradient-card rounded-xl shadow-card border border-border overflow-hidden transition-smooth hover:shadow-warm">
      <div className="flex p-4 space-x-4">
        <div className="relative">
          <img
            src={guide.image}
            alt={guide.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
          />
          {guide.verified && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
              <Star className="w-3 h-3 text-white fill-current" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-foreground truncate">{guide.name}</h3>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="ml-1 text-sm font-medium">{guide.rating}</span>
                <span className="ml-1 text-sm text-muted-foreground">({guide.reviews})</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">₹{guide.pricePerHour}</div>
              <div className="text-xs text-muted-foreground">per hour</div>
            </div>
          </div>
          
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="truncate">{guide.location}</span>
          </div>
          
          <div className="flex items-center mt-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            <span>Available in {guide.availableIn}</span>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {guide.languages.slice(0, 2).map((lang) => (
              <Badge key={lang} variant="secondary" className="text-xs">
                {lang}
              </Badge>
            ))}
            {guide.languages.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{guide.languages.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      <div className="px-4 pb-4">
        <Button 
          onClick={() => onBook(guide.id)}
          className="w-full"
          variant="hero"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}