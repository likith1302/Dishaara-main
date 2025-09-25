import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Tag, 
  MapPin, 
  Calendar, 
  IndianRupee, 
  Eye, 
  Edit, 
  Trash2,
  Plus,
  Search,
  TrendingUp
} from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Hidden Gems of Old Delhi",
    location: "Delhi",
    discount: "30%",
    originalPrice: 2000,
    discountedPrice: 1400,
    validUntil: "2024-01-15",
    bookings: 45,
    status: "active",
    category: "Hidden Spot"
  },
  {
    id: 2,
    title: "Sunrise at Hampi Ruins",
    location: "Karnataka", 
    discount: "25%",
    originalPrice: 1500,
    discountedPrice: 1125,
    validUntil: "2024-01-20",
    bookings: 23,
    status: "active",
    category: "Hidden Spot"
  },
  {
    id: 3,
    title: "Festival Special - Holi Package",
    location: "Mathura",
    discount: "40%", 
    originalPrice: 3000,
    discountedPrice: 1800,
    validUntil: "2024-03-15",
    bookings: 67,
    status: "scheduled",
    category: "Seasonal Offer"
  }
];

export function AdminOffers() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700">Active</Badge>;
      case "scheduled":
        return <Badge variant="outline" className="text-blue-600">Scheduled</Badge>;
      case "expired":
        return <Badge variant="secondary">Expired</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Offers & Hidden Spots</h1>
          <p className="text-muted-foreground">Manage tourism offers and highlight lesser-known attractions</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Create New Offer
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Offers</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <Tag className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Hidden Spots</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <MapPin className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-2xl font-bold">1,247</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">₹2.3L</p>
              </div>
              <IndianRupee className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Offers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search offers by title or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </CardContent>
      </Card>

      {/* Offers Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Offers & Hidden Spots</CardTitle>
          <CardDescription>Manage tourism offers and promote lesser-known destinations</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title & Category</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Pricing</TableHead>
                <TableHead>Validity</TableHead>
                <TableHead>Bookings</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {offers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{offer.title}</div>
                      <Badge variant="outline" className="text-xs mt-1">{offer.category}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-muted-foreground" />
                      {offer.location}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="flex items-center">
                        <span className="text-lg font-bold text-green-600">₹{offer.discountedPrice}</span>
                        <Badge className="ml-2 bg-red-100 text-red-700">{offer.discount} OFF</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground line-through">₹{offer.originalPrice}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{offer.validUntil}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <div className="text-lg font-bold">{offer.bookings}</div>
                      <div className="text-xs text-muted-foreground">bookings</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(offer.status)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-3 h-3" />
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
            <CardTitle>Popular Hidden Spots</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Mehrangarh Fort Secret Chambers</span>
              <Badge variant="secondary">89 views</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Hampi Boulder Climbing</span>
              <Badge variant="secondary">67 views</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Spiti Valley Hidden Lakes</span>
              <Badge variant="secondary">45 views</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Promotional Campaigns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 rounded-lg bg-blue-50 border">
              <p className="text-sm font-medium">Winter Special Campaign</p>
              <p className="text-xs text-muted-foreground">Running until Jan 31, 2024</p>
              <div className="mt-2">
                <Badge className="bg-blue-100 text-blue-700">156 bookings</Badge>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border">
              <p className="text-sm font-medium">Heritage Walk Offers</p>
              <p className="text-xs text-muted-foreground">Promoting cultural sites</p>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-700">89 bookings</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}