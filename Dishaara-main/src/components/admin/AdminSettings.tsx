import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Globe, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Settings</h1>
        <p className="text-muted-foreground">Configure system settings and preferences</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center"><Globe className="w-5 h-5 mr-2" />Localization</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Default Language</span><Button variant="outline" size="sm">English</Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Currency</span><Button variant="outline" size="sm">INR (₹)</Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Time Zone</span><Button variant="outline" size="sm">Asia/Kolkata</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader><CardTitle className="flex items-center"><CreditCard className="w-5 h-5 mr-2" />Payment Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>UPI Gateway</span><Button variant="outline" size="sm">Enabled</Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Commission Rate</span><Button variant="outline" size="sm">15%</Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Auto Settlement</span><Button variant="outline" size="sm">Enabled</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}