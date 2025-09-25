import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Users, 
  UserCheck, 
  MessageCircle, 
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CreditCard,
  AlertTriangle
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const users = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya@email.com",
    phone: "+91 9876543210",
    location: "Mumbai, Maharashtra",
    joinDate: "2023-08-15",
    totalBookings: 12,
    totalSpent: 45600,
    kycStatus: "verified",
    accountStatus: "active",
    loyaltyTier: "Gold",
    supportTickets: 1,
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "John Smith", 
    email: "john@email.com",
    phone: "+1 555-0123",
    location: "New York, USA",
    joinDate: "2023-11-20",
    totalBookings: 5,
    totalSpent: 23400,
    kycStatus: "pending",
    accountStatus: "active",
    loyaltyTier: "Silver",
    supportTickets: 0,
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    email: "rajesh@email.com", 
    phone: "+91 9876543211",
    location: "Delhi, India",
    joinDate: "2023-06-10",
    totalBookings: 25,
    totalSpent: 89300,
    kycStatus: "verified",
    accountStatus: "suspended",
    loyaltyTier: "Gold",
    supportTickets: 3,
    avatar: "/placeholder.svg"
  }
];

export function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [kycFilter, setKycFilter] = useState("all");

  const getKycBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-700">Verified</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-600">Pending</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Not Started</Badge>;
    }
  };

  const getAccountBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-700">Active</Badge>;
      case "suspended":
        return <Badge variant="destructive">Suspended</Badge>;
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getTierBadge = (tier: string) => {
    const colors: { [key: string]: string } = {
      "Gold": "bg-yellow-100 text-yellow-700",
      "Silver": "bg-gray-100 text-gray-700",
      "Bronze": "bg-orange-100 text-orange-700"
    };
    return <Badge className={colors[tier] || "bg-gray-100 text-gray-700"}>{tier}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Users Management</h1>
          <p className="text-muted-foreground">Manage user profiles, KYC verification, and support tickets</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">12,847</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">KYC Verified</p>
                <p className="text-2xl font-bold">9,234</p>
              </div>
              <UserCheck className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending KYC</p>
                <p className="text-2xl font-bold text-orange-600">356</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Support Tickets</p>
                <p className="text-2xl font-bold">89</p>
              </div>
              <MessageCircle className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search users by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Account Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <Select value={kycFilter} onValueChange={setKycFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="KYC Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All KYC</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>Manage user accounts and their verification status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Account Info</TableHead>
                <TableHead>KYC Status</TableHead>
                <TableHead>Loyalty Tier</TableHead>
                <TableHead>Support</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          Joined {user.joinDate}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center">
                        <Mail className="w-3 h-3 mr-1 text-muted-foreground" />
                        {user.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-3 h-3 mr-1 text-muted-foreground" />
                        {user.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{user.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center">
                        <CreditCard className="w-3 h-3 mr-1 text-muted-foreground" />
                        {user.totalBookings} bookings
                      </div>
                      <div className="font-medium text-green-600">₹{user.totalSpent.toLocaleString()}</div>
                      <div>{getAccountBadge(user.accountStatus)}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getKycBadge(user.kycStatus)}
                  </TableCell>
                  <TableCell>
                    {getTierBadge(user.loyaltyTier)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1 text-muted-foreground" />
                      <span className="text-sm font-medium">{user.supportTickets}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageCircle className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* User Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Registration Trends</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">This Month</span>
              <Badge className="bg-green-100 text-green-700">+1,247 users</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Last Month</span>
              <Badge variant="secondary">+989 users</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Growth Rate</span>
              <Badge className="bg-blue-100 text-blue-700">+26.1%</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top User Locations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Mumbai, Maharashtra</span>
              <Badge variant="secondary">2,341 users</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Delhi, NCR</span>
              <Badge variant="secondary">1,987 users</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Bangalore, Karnataka</span>
              <Badge variant="secondary">1,654 users</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}