import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp, IndianRupee, Users, Calendar, FileText } from "lucide-react";

export function AdminReports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Reports & Analytics</h1>
          <p className="text-muted-foreground">Revenue, engagement, and booking insights</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
        </div>
      </div>
      
      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                <p className="text-2xl font-bold">₹12,45,890</p>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +25.2% vs last month
                </p>
              </div>
              <IndianRupee className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-2xl font-bold">23,156</p>
                <p className="text-xs text-blue-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +18.5% growth
                </p>
              </div>
              <Calendar className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">User Engagement</p>
                <p className="text-2xl font-bold">78.5%</p>
                <p className="text-xs text-purple-600">Daily active rate</p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Rating</p>
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-xs text-orange-600">Platform rating</p>
              </div>
              <div className="text-2xl">⭐</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
            <p className="text-muted-foreground">Revenue Chart (Integration needed)</p>
          </div>
        </CardContent>
      </Card>

      {/* Top Performing Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Destinations by Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Rajasthan Desert Tours</span>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">₹3,45,678</Badge>
                  <span className="text-xs text-green-600">+15%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Kerala Backwaters</span>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">₹2,89,432</Badge>
                  <span className="text-xs text-green-600">+12%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Goa Beach Tours</span>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">₹2,34,567</Badge>
                  <span className="text-xs text-green-600">+8%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Himachal Adventures</span>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">₹1,98,765</Badge>
                  <span className="text-xs text-red-600">-3%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Trends by Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">November 2024</span>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">3,456 bookings</Badge>
                  <span className="text-xs text-green-600">+22%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">October 2024</span>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">2,834 bookings</Badge>
                  <span className="text-xs text-green-600">+18%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">September 2024</span>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">2,401 bookings</Badge>
                  <span className="text-xs text-green-600">+5%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">August 2024</span>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">2,289 bookings</Badge>
                  <span className="text-xs text-red-600">-2%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">45,283</div>
              <p className="text-sm text-muted-foreground">Total Registered Users</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1,247</div>
              <p className="text-sm text-muted-foreground">Verified Tour Guides</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">89.2%</div>
              <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}