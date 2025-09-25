import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Car, 
  Calendar, 
  Shield, 
  Navigation,
  Zap,
  AlertTriangle
} from "lucide-react";

export function AdminLiveMap() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Live Map Dashboard</h1>
          <p className="text-muted-foreground">Real-time tracking of guides, vehicles, events, and safety</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Navigation className="w-4 h-4 mr-2" />
            Fullscreen Map
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <Card className="h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Live India Tourism Map
              </CardTitle>
              <CardDescription>Real-time locations and activities across India</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              {/* Map Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden">
                {/* Mock Map Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-green-100/30"></div>
                
                {/* Mock Pins */}
                <div className="absolute top-20 left-32 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Users className="w-3 h-3 text-white" />
                </div>
                
                <div className="absolute top-40 left-48 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Car className="w-3 h-3 text-white" />
                </div>
                
                <div className="absolute top-32 right-40 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Calendar className="w-3 h-3 text-white" />
                </div>
                
                <div className="absolute bottom-32 left-24 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Shield className="w-3 h-3 text-white" />
                </div>

                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary">Interactive Live Map</h3>
                  <p className="text-muted-foreground mt-2">Tracking 247 guides, 89 vehicles, 23 events</p>
                  <p className="text-sm text-muted-foreground mt-1">Across Delhi, Mumbai, Bangalore, Chennai</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Stats Panel */}
        <div className="space-y-4">
          {/* Legend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Map Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Online Guides</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">247</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm">Active Vehicles</span>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">89</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm">Live Events</span>
                </div>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">23</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm">SOS Alerts</span>
                </div>
                <Badge variant="destructive">3</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Live Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Zap className="w-4 h-4 mr-2" />
                Live Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-red-50 border-l-4 border-l-red-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                    <div>
                      <p className="text-sm font-medium">SOS Alert</p>
                      <p className="text-xs text-muted-foreground">India Gate, Delhi</p>
                    </div>
                  </div>
                  <Button size="sm" variant="destructive">Respond</Button>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-l-blue-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Car className="w-4 h-4 text-blue-500 mr-2" />
                    <div>
                      <p className="text-sm font-medium">High Demand</p>
                      <p className="text-xs text-muted-foreground">Connaught Place</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-green-50 border-l-4 border-l-green-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-green-500 mr-2" />
                    <div>
                      <p className="text-sm font-medium">Guide Available</p>
                      <p className="text-xs text-muted-foreground">Taj Mahal, Agra</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Assign</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Heatmap Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Demand Heatmap</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Delhi NCR</span>
                  <Badge className="bg-red-100 text-red-700">High</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Mumbai</span>
                  <Badge className="bg-orange-100 text-orange-700">Medium</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Bangalore</span>
                  <Badge className="bg-green-100 text-green-700">Low</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}