import { MapPin, Users, Calendar, Car, Star, Gift, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImg from "@/assets/hero-tourism.jpg";

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onAdminAccess?: () => void;
}

export function HomePage({ onNavigate, onAdminAccess }: HomePageProps) {
  const quickActions = [
    { 
      id: "guides", 
      label: "Find Guide", 
      icon: Users, 
      description: "Book in 15 mins", 
      color: "bg-primary" 
    },
    { 
      id: "events", 
      label: "Events", 
      icon: Calendar, 
      description: "Join & Create", 
      color: "bg-secondary" 
    },
    { 
      id: "safety", 
      label: "Safety", 
      icon: AlertTriangle, 
      description: "Emergency SOS", 
      color: "bg-destructive" 
    },
    { 
      id: "vehicles", 
      label: "Car Pool", 
      icon: Car, 
      description: "Share rides", 
      color: "bg-accent" 
    },
  ];

  const featuredOffers = [
    {
      title: "Rajasthan Desert Safari",
      discount: "30% OFF",
      location: "Jaisalmer",
      rating: 4.8,
      originalPrice: 2500,
      discountedPrice: 1750,
    },
    {
      title: "Kerala Backwater Cruise",
      discount: "25% OFF", 
      location: "Alleppey",
      rating: 4.9,
      originalPrice: 3000,
      discountedPrice: 2250,
    },
    {
      title: "Himalayan Trek Package",
      discount: "40% OFF",
      location: "Manali",
      rating: 4.7,
      originalPrice: 5000,
      discountedPrice: 3000,
    }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative h-64 rounded-b-3xl overflow-hidden">
        <img
          src={heroImg}
          alt="India Tourism"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Discover Incredible India</h1>
          <p className="text-sm opacity-90">Experience the magic with local guides & authentic adventures</p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">Currently in Delhi</span>
            </div>
            {onAdminAccess && (
              <Button
                onClick={onAdminAccess}
                variant="secondary"
                size="sm"
                className="text-xs"
              >
                Admin
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4">
        <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                onClick={() => onNavigate(action.id)}
                variant="card"
                className="h-22 flex-col space-y-2 p-4"
              >
                <div className={`p-2 rounded-full ${action.color} text-white`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">{action.label}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Featured Offers */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Featured Offers</h2>
          <Button variant="ghost" size="sm">View All</Button>
        </div>
        <div className="space-y-4">
          {featuredOffers.map((offer, index) => (
            <Card key={index} className="p-4 bg-gradient-card shadow-card hover:shadow-warm transition-smooth">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{offer.title}</h3>
                  <div className="flex items-center mt-1">
                    <MapPin className="w-4 h-4 text-muted-foreground mr-1" />
                    <span className="text-sm text-muted-foreground">{offer.location}</span>
                    <div className="flex items-center ml-3">
                      <Star className="w-4 h-4 text-primary fill-current" />
                      <span className="text-sm font-medium ml-1">{offer.rating}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="destructive" className="ml-2">
                  {offer.discount}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-primary">₹{offer.discountedPrice}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{offer.originalPrice}</span>
                </div>
                <Button size="sm" variant="hero">
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Rewards Section */}
      <div className="px-4">
        <Card className="p-4 bg-gradient-primary text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <Gift className="w-5 h-5 mr-2" />
                <span className="font-semibold">Rewards Points</span>
              </div>
              <p className="text-2xl font-bold">2,450 pts</p>
              <p className="text-sm opacity-90">₹245 value</p>
            </div>
            <Button variant="secondary" size="sm">
              Redeem
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}