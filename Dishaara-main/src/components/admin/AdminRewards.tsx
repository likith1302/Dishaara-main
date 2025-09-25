import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Gift, 
  Users, 
  TrendingUp, 
  IndianRupee, 
  Star,
  Crown,
  Award,
  ArrowUpDown
} from "lucide-react";

const loyaltyStats = [
  {
    tier: "Gold",
    users: 234,
    pointsEarned: 125600,
    pointsRedeemed: 89400,
    color: "bg-yellow-500"
  },
  {
    tier: "Silver", 
    users: 567,
    pointsEarned: 234500,
    pointsRedeemed: 156700,
    color: "bg-gray-400"
  },
  {
    tier: "Bronze",
    users: 1290,
    pointsEarned: 567800,
    pointsRedeemed: 345600,
    color: "bg-orange-600"
  }
];

const recentTransactions = [
  {
    id: 1,
    user: "Priya Sharma",
    action: "Earned",
    points: 150,
    reason: "Hotel Booking",
    date: "2024-01-15"
  },
  {
    id: 2,
    user: "Rajesh Kumar",
    action: "Redeemed",
    points: -500,
    reason: "Tour Guide Discount",
    date: "2024-01-15"
  },
  {
    id: 3,
    user: "Amit Patel",
    action: "Earned", 
    points: 200,
    reason: "Event Attendance",
    date: "2024-01-14"
  },
  {
    id: 4,
    user: "Sunita Rao",
    action: "Transfer",
    points: -300,
    reason: "To Friend",
    date: "2024-01-14"
  }
];

export function AdminRewards() {
  const getActionBadge = (action: string) => {
    switch (action) {
      case "Earned":
        return <Badge className="bg-green-100 text-green-700">Earned</Badge>;
      case "Redeemed":
        return <Badge className="bg-blue-100 text-blue-700">Redeemed</Badge>;
      case "Transfer":
        return <Badge className="bg-purple-100 text-purple-700">Transfer</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Loyalty & Rewards</h1>
          <p className="text-muted-foreground">Manage points system, redemptions, and user tiers</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Gift className="w-4 h-4 mr-2" />
          Create Reward
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">2,091</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Points Earned</p>
                <p className="text-2xl font-bold">927,900</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Points Redeemed</p>
                <p className="text-2xl font-bold">591,700</p>
              </div>
              <Gift className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Value (INR)</p>
                <p className="text-2xl font-bold">₹59,170</p>
              </div>
              <IndianRupee className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Loyalty Tiers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="w-5 h-5 mr-2 text-yellow-500" />
            Loyalty Tiers Overview
          </CardTitle>
          <CardDescription>User distribution across loyalty tiers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {loyaltyStats.map((tier) => (
              <div key={tier.tier} className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded ${tier.color} mr-2`}></div>
                    <h3 className="font-semibold">{tier.tier} Tier</h3>
                  </div>
                  <Users className="w-5 h-5 text-muted-foreground" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Users</span>
                    <span className="font-medium">{tier.users.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Points Earned</span>
                    <span className="font-medium text-green-600">+{tier.pointsEarned.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Points Redeemed</span>
                    <span className="font-medium text-blue-600">-{tier.pointsRedeemed.toLocaleString()}</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${tier.color}`}
                      style={{ width: `${(tier.pointsRedeemed / tier.pointsEarned) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <ArrowUpDown className="w-5 h-5 mr-2" />
            Recent Transactions
          </CardTitle>
          <CardDescription>Latest points earned, redeemed, and transferred</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.user}</TableCell>
                  <TableCell>
                    {getActionBadge(transaction.action)}
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${
                      transaction.points > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.points > 0 ? '+' : ''}{transaction.points}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{transaction.reason}</TableCell>
                  <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Rewards & Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-purple-500" />
              Popular Rewards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Tour Guide 20% Discount</p>
                <p className="text-xs text-muted-foreground">500 points</p>
              </div>
              <Badge variant="secondary">234 redeemed</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Hotel Booking Cashback</p>
                <p className="text-xs text-muted-foreground">1000 points</p>
              </div>
              <Badge variant="secondary">156 redeemed</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Event Entry Free Pass</p>
                <p className="text-xs text-muted-foreground">750 points</p>
              </div>
              <Badge variant="secondary">89 redeemed</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Point Earning Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Hotel Booking</span>
              <Badge className="bg-green-100 text-green-700">+100-300 pts</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Tour Guide Booking</span>
              <Badge className="bg-green-100 text-green-700">+50-150 pts</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Event Attendance</span>
              <Badge className="bg-green-100 text-green-700">+200 pts</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Review & Rating</span>
              <Badge className="bg-green-100 text-green-700">+25 pts</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Referral Bonus</span>
              <Badge className="bg-green-100 text-green-700">+500 pts</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}