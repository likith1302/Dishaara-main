import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Star, 
  Flag, 
  Eye, 
  Trash2, 
  Search,
  Filter,
  MessageCircle,
  User,
  Calendar
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    id: 1,
    reviewer: "Priya Sharma",
    reviewerAvatar: "/placeholder.svg",
    target: "Rajesh Kumar (Guide)",
    targetType: "guide",
    rating: 5,
    comment: "Excellent guide! Very knowledgeable about Delhi's history and took us to amazing hidden spots.",
    date: "2024-01-15",
    status: "approved",
    flagged: false,
    helpful: 12
  },
  {
    id: 2,
    reviewer: "John Smith",
    reviewerAvatar: "/placeholder.svg", 
    target: "Taj Heritage Hotel",
    targetType: "hotel",
    rating: 2,
    comment: "Room was not clean and service was poor. Would not recommend this hotel to anyone.",
    date: "2024-01-14",
    status: "flagged",
    flagged: true,
    helpful: 3
  },
  {
    id: 3,
    reviewer: "Amit Patel",
    reviewerAvatar: "/placeholder.svg",
    target: "Holi Festival Celebration",
    targetType: "event",
    rating: 4,
    comment: "Great event with authentic celebrations. Only issue was overcrowding at some spots.",
    date: "2024-01-13",
    status: "approved",
    flagged: false,
    helpful: 8
  }
];

export function AdminReviews() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-700">Approved</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-orange-600">Pending</Badge>;
      case "flagged":
        return <Badge variant="destructive">Flagged</Badge>;
      case "removed":
        return <Badge variant="secondary">Removed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors: { [key: string]: string } = {
      "guide": "bg-blue-100 text-blue-700",
      "hotel": "bg-purple-100 text-purple-700",
      "event": "bg-green-100 text-green-700",
      "attraction": "bg-orange-100 text-orange-700"
    };
    return <Badge className={colors[type] || "bg-gray-100 text-gray-700"}>{type}</Badge>;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-medium">{rating}.0</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Reviews & Moderation</h1>
          <p className="text-muted-foreground">Monitor and moderate reviews for guides, hotels, events, and attractions</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Reviews</p>
                <p className="text-2xl font-bold">3,456</p>
              </div>
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold">4.6</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Flagged Reviews</p>
                <p className="text-2xl font-bold text-red-600">23</p>
              </div>
              <Flag className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Review</p>
                <p className="text-2xl font-bold text-orange-600">8</p>
              </div>
              <Eye className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search reviews..."
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
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="flagged">Flagged</SelectItem>
                <SelectItem value="removed">Removed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="guide">Guides</SelectItem>
                <SelectItem value="hotel">Hotels</SelectItem>
                <SelectItem value="event">Events</SelectItem>
                <SelectItem value="attraction">Attractions</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reviews Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Reviews</CardTitle>
          <CardDescription>Monitor and moderate user reviews across the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reviewer</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Review</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={review.reviewerAvatar} alt={review.reviewer} />
                        <AvatarFallback>
                          {review.reviewer.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm">{review.reviewer}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-sm">{review.target}</div>
                      <div className="mt-1">
                        {getTypeBadge(review.targetType)}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {renderStars(review.rating)}
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <div className="text-sm">
                      <p className="line-clamp-2">{review.comment}</p>
                      <div className="flex items-center mt-1">
                        <User className="w-3 h-3 mr-1 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{review.helpful} found helpful</span>
                        {review.flagged && (
                          <Flag className="w-3 h-3 ml-2 text-red-500" />
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {review.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(review.status)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Flag className="w-3 h-3" />
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

      {/* Review Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Review Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className="text-sm">Tour Guides</span>
              </div>
              <Badge variant="secondary">1,234 reviews</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                <span className="text-sm">Hotels</span>
              </div>
              <Badge variant="secondary">987 reviews</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-sm">Events</span>
              </div>
              <Badge variant="secondary">756 reviews</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                <span className="text-sm">Attractions</span>
              </div>
              <Badge variant="secondary">479 reviews</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rating Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm w-8">{stars}</span>
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full" 
                      style={{ width: `${stars * 20}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{stars * 20}%</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}