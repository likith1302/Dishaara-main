import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  UserCheck, 
  MessageCircle, 
  Ban, 
  Star, 
  MapPin, 
  Clock, 
  Phone,
  Car,
  Languages
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const guides = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@email.com",
    phone: "+91 9876543210",
    city: "Delhi",
    languages: ["Hindi", "English", "Punjabi"],
    rating: 4.8,
    reviews: 125,
    status: "verified",
    lastActive: "2 min ago",
    vehicleType: "Car",
    experience: "5 years",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@email.com",
    phone: "+91 9876543211",
    city: "Mumbai",
    languages: ["Hindi", "English", "Marathi"],
    rating: 4.9,
    reviews: 89,
    status: "pending",
    lastActive: "5 min ago",
    vehicleType: "Bike",
    experience: "3 years",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@email.com",
    phone: "+91 9876543212",
    city: "Ahmedabad",
    languages: ["Hindi", "English", "Gujarati"],
    rating: 4.7,
    reviews: 203,
    status: "verified",
    lastActive: "1 hour ago",
    vehicleType: "Auto",
    experience: "7 years",
    avatar: "/placeholder.svg"
  },
];

export function AdminGuides() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-700">Verified</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-600">Pending</Badge>;
      case "suspended":
        return <Badge variant="destructive">Suspended</Badge>;
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
          <h1 className="text-3xl font-bold text-primary">Tour Guides Management</h1>
          <p className="text-muted-foreground">Manage guide verifications, ratings, and assignments</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <UserCheck className="w-4 h-4 mr-2" />
          Add New Guide
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Guides</p>
                <p className="text-2xl font-bold">247</p>
              </div>
              <UserCheck className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Online Now</p>
                <p className="text-2xl font-bold text-green-600">89</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending KYC</p>
                <p className="text-2xl font-bold text-orange-600">12</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold">4.8</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Guides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search guides..."
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
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>

            <Select value={cityFilter} onValueChange={setCityFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Guides Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Tour Guides</CardTitle>
          <CardDescription>Manage and verify tour guide accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Guide</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Languages</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guides.map((guide) => (
                <TableRow key={guide.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={guide.avatar} alt={guide.name} />
                        <AvatarFallback>{guide.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{guide.name}</div>
                        <div className="text-sm text-muted-foreground">{guide.experience} experience</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{guide.email}</div>
                      <div className="text-muted-foreground flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {guide.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-muted-foreground" />
                      {guide.city}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Languages className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{guide.languages.join(', ')}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-medium">{guide.rating}</span>
                      <span className="text-muted-foreground text-sm ml-1">({guide.reviews})</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {getVehicleIcon(guide.vehicleType)}
                      <span className="ml-1 text-sm">{guide.vehicleType}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(guide.status)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {guide.lastActive}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <MessageCircle className="w-3 h-3" />
                      </Button>
                      {guide.status === "pending" && (
                        <Button size="sm" variant="default">
                          <UserCheck className="w-3 h-3" />
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        <Ban className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}