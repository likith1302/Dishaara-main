import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Calendar, 
  Users, 
  MapPin, 
  IndianRupee, 
  Clock, 
  MessageCircle,
  Check,
  X,
  Eye,
  Edit
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Holi Festival Celebration",
    organizer: "Delhi Tourism Board",
    location: "India Gate, Delhi",
    date: "2024-03-13",
    time: "10:00 AM",
    attendees: 450,
    maxCapacity: 500,
    entryFee: 200,
    status: "approved",
    category: "Festival",
    groupChats: 3
  },
  {
    id: 2,
    title: "Rajasthan Cultural Night",
    organizer: "Rajesh Kumar",
    location: "City Palace, Jaipur",
    date: "2024-02-20",
    time: "07:00 PM",
    attendees: 120,
    maxCapacity: 200,
    entryFee: 500,
    status: "pending",
    category: "Cultural",
    groupChats: 1
  },
  {
    id: 3,
    title: "Goa Beach Party",
    organizer: "Coastal Events Pvt Ltd",
    location: "Baga Beach, Goa",
    date: "2024-02-25",
    time: "08:00 PM",
    attendees: 300,
    maxCapacity: 400,
    entryFee: 800,
    status: "approved",
    category: "Party",
    groupChats: 5
  }
];

export function AdminEvents() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-700">Approved</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-600">Pending</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      case "completed":
        return <Badge className="bg-blue-100 text-blue-700">Completed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    const colors: { [key: string]: string } = {
      "Festival": "bg-purple-100 text-purple-700",
      "Cultural": "bg-blue-100 text-blue-700",
      "Party": "bg-pink-100 text-pink-700",
      "Adventure": "bg-green-100 text-green-700"
    };
    return <Badge className={colors[category] || "bg-gray-100 text-gray-700"}>{category}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Events Manager</h1>
          <p className="text-muted-foreground">Approve events, manage attendees, and moderate group discussions</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Calendar className="w-4 h-4 mr-2" />
          Create Event
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Live Events</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <Calendar className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Attendees</p>
                <p className="text-2xl font-bold">2,341</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
                <p className="text-2xl font-bold text-orange-600">5</p>
              </div>
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">₹4.2L</p>
              </div>
              <IndianRupee className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search events by title, organizer, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Events Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Events</CardTitle>
          <CardDescription>Manage event approvals and monitor activities</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Details</TableHead>
                <TableHead>Organizer</TableHead>
                <TableHead>Location & Time</TableHead>
                <TableHead>Attendees</TableHead>
                <TableHead>Entry Fee</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Group Chats</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="mt-1">
                        {getCategoryBadge(event.category)}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{event.organizer}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="flex items-center mb-1">
                        <MapPin className="w-3 h-3 mr-1 text-muted-foreground" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1 text-muted-foreground" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 text-muted-foreground" />
                        {event.time}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <div className="font-medium">{event.attendees}/{event.maxCapacity}</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${(event.attendees / event.maxCapacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <IndianRupee className="w-4 h-4 mr-1 text-green-500" />
                      <span className="font-medium">₹{event.entryFee}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(event.status)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
                      <span className="text-sm font-medium">{event.groupChats}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      {event.status === "pending" && (
                        <>
                          <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700">
                            <Check className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="destructive">
                            <X className="w-3 h-3" />
                          </Button>
                        </>
                      )}
                      <Button size="sm" variant="outline">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Event Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Event Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                <span className="text-sm">Festivals</span>
              </div>
              <Badge variant="secondary">8 events</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm">Cultural</span>
              </div>
              <Badge variant="secondary">12 events</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-pink-500 rounded mr-2"></div>
                <span className="text-sm">Parties</span>
              </div>
              <Badge variant="secondary">6 events</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-sm">Adventure</span>
              </div>
              <Badge variant="secondary">4 events</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 rounded-lg border">
              <p className="text-sm font-medium">Holi Festival - Tomorrow</p>
              <p className="text-xs text-muted-foreground">450 registered attendees</p>
              <Badge className="mt-1 bg-green-100 text-green-700">Ready</Badge>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="text-sm font-medium">Cultural Night - Feb 20</p>
              <p className="text-xs text-muted-foreground">120 registered attendees</p>
              <Badge variant="outline" className="mt-1 text-orange-600">Pending Approval</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}