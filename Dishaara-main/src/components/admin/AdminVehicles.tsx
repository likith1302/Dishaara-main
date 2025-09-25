import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, MapPin, User, Clock, CheckCircle, XCircle, Eye } from "lucide-react";

export function AdminVehicles() {
  const vehicles = [
    { id: 1, driver: "Suresh Kumar", vehicle: "Toyota Innova", license: "DL-01-AB-1234", status: "Active", location: "Delhi", rating: 4.8, rides: 156 },
    { id: 2, driver: "Ramesh Patel", vehicle: "Mahindra Scorpio", license: "MH-02-CD-5678", status: "Pending", location: "Mumbai", rating: 4.6, rides: 89 },
    { id: 3, driver: "Vikram Singh", vehicle: "Maruti Ertiga", license: "UP-03-EF-9012", status: "Under Review", location: "Agra", rating: 4.7, rides: 234 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Vehicle Management</h1>
          <p className="text-muted-foreground">Manage drivers, vehicles, and ride tracking</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Car className="w-4 h-4 mr-2" />
          Add Vehicle
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Vehicles</p>
                <p className="text-2xl font-bold">847</p>
              </div>
              <Car className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Rides</p>
                <p className="text-2xl font-bold">89</p>
              </div>
              <MapPin className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Approvals</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Disputes</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-orange-500" />
            Pending Vehicle Approvals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {vehicles.filter(v => v.status !== "Active").map((vehicle) => (
              <div key={vehicle.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">{vehicle.driver}</h4>
                      <p className="text-sm text-muted-foreground">{vehicle.vehicle} • {vehicle.license}</p>
                      <p className="text-xs text-muted-foreground">{vehicle.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{vehicle.status}</Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive">
                      <XCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Vehicles */}
      <Card>
        <CardHeader>
          <CardTitle>All Vehicles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Car className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{vehicle.driver}</h4>
                      <p className="text-sm text-muted-foreground">{vehicle.vehicle} • {vehicle.license}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground">📍 {vehicle.location}</span>
                        <span className="text-xs text-muted-foreground">⭐ {vehicle.rating}</span>
                        <span className="text-xs text-muted-foreground">{vehicle.rides} rides</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={vehicle.status === "Active" ? "default" : "secondary"}>
                    {vehicle.status}
                  </Badge>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      Track
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}