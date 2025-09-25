import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, CreditCard, Smartphone, Building } from "lucide-react";

export function AdminPayments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Payments & Wallets</h1>
        <p className="text-muted-foreground">Manage UPI, cards, refunds, and settlements</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Total Revenue</p><p className="text-2xl font-bold">₹12.3L</p></div><IndianRupee className="w-8 h-8 text-green-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">UPI Payments</p><p className="text-2xl font-bold">67%</p></div><Smartphone className="w-8 h-8 text-blue-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Card Payments</p><p className="text-2xl font-bold">28%</p></div><CreditCard className="w-8 h-8 text-purple-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Net Banking</p><p className="text-2xl font-bold">5%</p></div><Building className="w-8 h-8 text-orange-500" /></div></CardContent></Card>
      </div>
      
      <Card>
        <CardHeader><CardTitle>Payment Methods Distribution</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>UPI Payments</span><Badge className="bg-blue-100 text-blue-700">₹8.2L (67%)</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span>Credit/Debit Cards</span><Badge className="bg-purple-100 text-purple-700">₹3.4L (28%)</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span>Net Banking</span><Badge className="bg-orange-100 text-orange-700">₹0.6L (5%)</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}