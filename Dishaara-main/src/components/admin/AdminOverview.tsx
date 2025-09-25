import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { 
  Users, 
  Car, 
  IndianRupee, 
  Calendar, 
  Shield, 
  Star, 
  TrendingUp, 
  MapPin,
  Clock,
  AlertTriangle
} from "lucide-react";

// Enhanced sample data for charts
const monthlyRevenueData = [
  { month: "Jan", revenue: 2450000, users: 1240 },
  { month: "Feb", revenue: 2870000, users: 1456 },
  { month: "Mar", revenue: 3420000, users: 1789 },
  { month: "Apr", revenue: 3980000, users: 2134 },
  { month: "May", revenue: 4560000, users: 2567 },
  { month: "Jun", revenue: 5230000, users: 2890 },
];

const categoryDistribution = [
  { name: "Tour Bookings", value: 45, color: "hsl(221, 83%, 53%)", count: 12450 },
  { name: "Hotel Stays", value: 25, color: "hsl(142, 76%, 36%)", count: 6890 },
  { name: "Guide Services", value: 20, color: "hsl(262, 83%, 58%)", count: 5520 },
  { name: "Events & Shows", value: 10, color: "hsl(346, 77%, 49%)", count: 2760 },
];

const growthTrendsData = [
  { month: "Jan", bookings: 2400, revenue: 245, users: 1240 },
  { month: "Feb", bookings: 2800, revenue: 287, users: 1456 },
  { month: "Mar", bookings: 3200, revenue: 342, users: 1789 },
  { month: "Apr", bookings: 3800, revenue: 398, users: 2134 },
  { month: "May", bookings: 4200, revenue: 456, users: 2567 },
  { month: "Jun", bookings: 4800, revenue: 523, users: 2890 },
];

const heatmapData = [
  { location: "Mumbai", morning: 85, afternoon: 120, evening: 95, night: 45, total: 345 },
  { location: "Delhi", morning: 78, afternoon: 110, evening: 88, night: 40, total: 316 },
  { location: "Goa", morning: 65, afternoon: 95, evening: 125, night: 60, total: 345 },
  { location: "Bangalore", morning: 72, afternoon: 105, evening: 82, night: 35, total: 294 },
  { location: "Jaipur", morning: 55, afternoon: 80, evening: 70, night: 30, total: 235 },
  { location: "Kerala", morning: 48, afternoon: 75, evening: 85, night: 25, total: 233 },
];

const chartConfig = {
  revenue: { label: "Revenue (₹ Lakhs)", color: "hsl(221, 83%, 53%)" },
  users: { label: "New Users", color: "hsl(142, 76%, 36%)" },
  bookings: { label: "Bookings", color: "hsl(262, 83%, 58%)" },
};

export function AdminOverview() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Dashboard Overview</h1>
          <p className="text-muted-foreground">Real-time insights into your tourism platform</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Clock className="w-4 h-4 mr-2" />
            Last 24 Hours
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              Total Users
              <Users className="w-4 h-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,283</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +12.3% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              Active Guides
              <Users className="w-4 h-4 text-blue-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +8.7% verified guides
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              Total Bookings
              <Calendar className="w-4 h-4 text-green-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23,156</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +18.5% this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-sm font-medium">
              Revenue (INR)
              <IndianRupee className="w-4 h-4 text-purple-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,45,890</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              +25.2% growth
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Enhanced Monthly Revenue & User Sign-ups Bar Chart */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              Monthly Performance
            </CardTitle>
            <CardDescription>Revenue growth and user acquisition trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <BarChart data={monthlyRevenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                />
                <YAxis 
                  yAxisId="left" 
                  orientation="left"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                  tickFormatter={(value) => `₹${(value/100000).toFixed(1)}L`}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                  tickFormatter={(value) => `${(value/1000).toFixed(1)}K`}
                />
                <ChartTooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-3 shadow-lg">
                          <p className="font-medium mb-2">{label}</p>
                          {payload.map((entry, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: entry.color }}
                              />
                              <span>{entry.dataKey === 'revenue' ? 'Revenue:' : 'Users:'}</span>
                              <span className="font-medium">
                                {entry.dataKey === 'revenue' 
                                  ? `₹${(Number(entry.value)/100000).toFixed(2)}L` 
                                  : `${Number(entry.value).toLocaleString()}`
                                }
                              </span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  yAxisId="left" 
                  dataKey="revenue" 
                  fill="url(#revenueGradient)" 
                  name="Revenue" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={60}
                />
                <Bar 
                  yAxisId="right" 
                  dataKey="users" 
                  fill="url(#usersGradient)" 
                  name="New Users" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={60}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Enhanced Category Distribution Pie Chart */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-600">
                <IndianRupee className="w-4 h-4 text-white" />
              </div>
              Booking Categories
            </CardTitle>
            <CardDescription>Revenue distribution by service type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <defs>
                  {categoryDistribution.map((entry, index) => (
                    <linearGradient key={index} id={`gradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={entry.color} />
                      <stop offset="100%" stopColor={entry.color} stopOpacity={0.7} />
                    </linearGradient>
                  ))}
                </defs>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
                  outerRadius={120}
                  innerRadius={40}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={`url(#gradient-${index})`}
                      stroke="hsl(var(--background))"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <ChartTooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="rounded-lg border bg-background p-3 shadow-lg">
                          <p className="font-medium mb-2">{data.name}</p>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Percentage:</span>
                              <span className="font-medium">{data.value}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Count:</span>
                              <span className="font-medium">{data.count.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {categoryDistribution.map((entry, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="truncate">{entry.name}</span>
                  <span className="ml-auto text-muted-foreground">{entry.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Growth Trends & Heatmap */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Enhanced Growth Trends Line Chart */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              Growth Analytics
            </CardTitle>
            <CardDescription>Multi-metric growth trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <LineChart data={growthTrendsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="bookingsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="usersLineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="revenueLineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis 
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                />
                <ChartTooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-3 shadow-lg">
                          <p className="font-medium mb-2">{label}</p>
                          {payload.map((entry, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: entry.color }}
                              />
                              <span className="capitalize">{entry.dataKey}:</span>
                              <span className="font-medium">
                                {entry.dataKey === 'revenue' 
                                  ? `₹${Number(entry.value)}L` 
                                  : Number(entry.value).toLocaleString()
                                }
                              </span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="bookings" 
                  stroke="hsl(262, 83%, 58%)" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(262, 83%, 58%)', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(262, 83%, 58%)', strokeWidth: 2 }}
                  fillOpacity={1}
                  fill="url(#bookingsGradient)"
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="hsl(142, 76%, 36%)" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(142, 76%, 36%)', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(142, 76%, 36%)', strokeWidth: 2 }}
                  fillOpacity={1}
                  fill="url(#usersLineGradient)"
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(221, 83%, 53%)" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(221, 83%, 53%)', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'hsl(221, 83%, 53%)', strokeWidth: 2 }}
                  fillOpacity={1}
                  fill="url(#revenueLineGradient)"
                />
              </LineChart>
            </ChartContainer>
            <div className="mt-4 flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[hsl(262,83%,58%)]" />
                <span>Bookings</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[hsl(142,76%,36%)]" />
                <span>Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[hsl(221,83%,53%)]" />
                <span>Revenue</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced User Activity Heatmap */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              Activity Heatmap
            </CardTitle>
            <CardDescription>User engagement by location and time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {heatmapData.map((location) => (
                <div key={location.location} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold">{location.location}</span>
                      <Badge variant="outline" className="text-xs">
                        {location.total} total users
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Peak: {Math.max(location.morning, location.afternoon, location.evening, location.night)}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { period: 'Morning', value: location.morning, icon: '🌅' },
                      { period: 'Afternoon', value: location.afternoon, icon: '☀️' },
                      { period: 'Evening', value: location.evening, icon: '🌆' },
                      { period: 'Night', value: location.night, icon: '🌙' }
                    ].map((timeSlot) => {
                      const intensity = timeSlot.value / 150;
                      const maxValue = Math.max(location.morning, location.afternoon, location.evening, location.night);
                      const isMax = timeSlot.value === maxValue;
                      
                      return (
                        <div key={timeSlot.period} className="text-center space-y-1">
                          <div 
                            className={`h-12 rounded-lg flex flex-col items-center justify-center text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-md relative overflow-hidden ${
                              isMax ? 'ring-2 ring-yellow-400 ring-opacity-60' : ''
                            }`}
                            style={{ 
                              backgroundColor: `hsl(221, 83%, ${53 + (intensity * 20)}%)`,
                              color: intensity > 0.5 ? 'white' : 'hsl(var(--foreground))',
                              opacity: 0.7 + (intensity * 0.3)
                            }}
                          >
                            <span className="text-lg mb-1">{timeSlot.icon}</span>
                            <span className="font-bold">{timeSlot.value}</span>
                            {isMax && (
                              <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground font-medium">
                            {timeSlot.period}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${(location.total / 400) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Activity Scale:</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs">Low</span>
                  <div className="flex gap-1">
                    {[0.2, 0.4, 0.6, 0.8, 1.0].map((opacity, i) => (
                      <div 
                        key={i}
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: `hsl(221, 83%, 53%, ${opacity})` }}
                      />
                    ))}
                  </div>
                  <span className="text-xs">High</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2 text-primary" />
              Guides Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Online Guides</span>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                247 Active
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Pending Verification</span>
              <Badge variant="outline">12 Pending</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Average Rating</span>
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-500 mr-1" />
                <span className="text-sm font-medium">4.8</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-sm">
              <Car className="w-4 h-4 mr-2 text-blue-500" />
              Vehicle Pooling
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Active Rides</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                89 Live
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Eco-Friendly</span>
              <Badge variant="outline" className="text-green-600">34%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Cost Saved</span>
              <span className="text-sm font-medium">₹45,230</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-2 text-purple-500" />
              Events & Offers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Active Events</span>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                23 Live
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Hidden Spots</span>
              <Badge variant="outline">156 Featured</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Attendance</span>
              <span className="text-sm font-medium">2,341 Today</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            Recent Activities
          </CardTitle>
          <CardDescription>Latest system activities and alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 border-l-4 border-l-red-500">
              <div className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-red-500 mr-3" />
                <div>
                  <p className="text-sm font-medium">SOS Alert Received</p>
                  <p className="text-xs text-muted-foreground">Tourist in distress near India Gate, Delhi</p>
                </div>
              </div>
              <Badge variant="destructive">URGENT</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border-l-4 border-l-blue-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm font-medium">New Guide Registration</p>
                  <p className="text-xs text-muted-foreground">Rajesh Kumar applied for Mumbai tour guide</p>
                </div>
              </div>
              <Badge variant="secondary">NEW</Badge>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border-l-4 border-l-green-500">
              <div className="flex items-center">
                <Car className="w-4 h-4 text-green-500 mr-3" />
                <div>
                  <p className="text-sm font-medium">Pool Ride Completed</p>
                  <p className="text-xs text-muted-foreground">Delhi to Agra - 4 tourists, ₹1,200 saved</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">SUCCESS</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}