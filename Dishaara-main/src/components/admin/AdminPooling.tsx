import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Car, 
  Users, 
  MapPin, 
  Clock, 
  IndianRupee, 
  Leaf, 
  Search,
  Filter,
  Navigation,
  Phone
} from "lucide-react";

const poolingData = [
  {
    id: "POOL001",
    route: "Delhi → Agra",
    driver: "Ramesh Kumar",
    vehicle: "Innova Crysta",
    vehicleType: "Car",
    passengers: 3,
    maxCapacity: 6,
    fare: 450,
    status: "active",
    startTime: "09:30 AM",
    eta: "12:30 PM",
    ecoFriendly: false,
    distance: "233 km"
  },
  {
    id: "POOL002",
    route: "Mumbai → Pune",
    driver: "Suresh Patil",
    vehicle: "Honda Activa",
    vehicleType: "Bike",
    passengers: 1,
    maxCapacity: 2,
    fare: 180,
    status: "active",
    startTime: "10:00 AM",
    eta: "01:30 PM",
    ecoFriendly: true,
    distance: "148 km"
  },
  {
    id: "POOL003",
    route: "Bangalore → Mysore",
    driver: "Arun Reddy",
    vehicle: "Electric Tata Nexon",
    vehicleType: "Car",
    passengers: 2,
    maxCapacity: 4,
    fare: 320,
    status: "completed",
    startTime: "08:00 AM",
    eta: "11:00 AM",
    ecoFriendly: true,
    distance: "156 km"
  }
];

export function AdminPooling() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [vehicleFilter, setVehicleFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700">Active</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-600">Pending</Badge>;
      case "completed":
        return <Badge className="bg-blue-100 text-blue-700">Completed</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getVehicleIcon = (vehicleType: string) => {
    return <Car className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Vehicle Pooling Manager</h1>
          <p className="text-muted-foreground">Manage rides, matches, fares, and eco-friendly options</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Car className="w-4 h-4 mr-2" />
          Create Pool Request
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Rides</p>
                <p className="text-2xl font-bold text-green-600">89</p>
              </div>
              <Car className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Passengers</p>
                <p className="text-2xl font-bold">267</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cost Saved</p>
                <p className="text-2xl font-bold text-green-600">₹45,230</p>
              </div>
              <IndianRupee className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Eco-Friendly</p>
                <p className="text-2xl font-bold text-green-600">34%</p>
              </div>
              <Leaf className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Pool Rides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by route or driver..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            <Select value={vehicleFilter} onValueChange={setVehicleFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Vehicle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Vehicles</SelectItem>
                <SelectItem value="car">Cars</SelectItem>
                <SelectItem value="bike">Bikes</SelectItem>
                <SelectItem value="auto">Auto</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pooling Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Pool Rides</CardTitle>
          <CardDescription>Manage all vehicle pooling requests and matches</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pool ID</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Driver & Vehicle</TableHead>
                <TableHead>Passengers</TableHead>
                <TableHead>Fare</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {poolingData.map((pool) => (
                <TableRow key={pool.id}>
                  <TableCell>
                    <div className="font-medium">{pool.id}</div>
                    <div className="text-xs text-muted-foreground">{pool.distance}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="font-medium">{pool.route}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium flex items-center">
                        {getVehicleIcon(pool.vehicleType)}
                        <span className="ml-1">{pool.driver}</span>
                        {pool.ecoFriendly && (
                          <Leaf className="w-3 h-3 ml-1 text-green-500" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">{pool.vehicle}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="font-medium">{pool.passengers}/{pool.maxCapacity}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                      <div 
                        className="bg-blue-500 h-1 rounded-full" 
                        style={{ width: `${(pool.passengers / pool.maxCapacity) * 100}%` }}
                      ></div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <IndianRupee className="w-4 h-4 mr-1 text-green-500" />
                      <span className="font-medium">₹{pool.fare}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">per person</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 text-muted-foreground" />
                        <span>{pool.startTime}</span>
                      </div>
                      <div className="text-muted-foreground text-xs">ETA: {pool.eta}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(pool.status)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Navigation className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="w-5 h-5 mr-2 text-green-500" />
              Eco-Friendly Initiatives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Electric Vehicles</span>
              <Badge className="bg-green-100 text-green-700">23 Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Bike Sharing</span>
              <Badge className="bg-green-100 text-green-700">45 Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Carbon Saved</span>
              <span className="text-sm font-medium text-green-600">2.3 tons</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <IndianRupee className="w-5 h-5 mr-2 text-blue-500" />
              Revenue & Savings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Total Revenue</span>
              <span className="text-sm font-medium">₹1,23,450</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Tourist Savings</span>
              <span className="text-sm font-medium text-green-600">₹45,230</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Commission Earned</span>
              <span className="text-sm font-medium">₹12,345</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}