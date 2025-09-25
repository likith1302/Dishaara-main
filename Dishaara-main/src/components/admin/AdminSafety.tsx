import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Phone, MapPin } from "lucide-react";

export function AdminSafety() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Safety Center</h1>
        <p className="text-muted-foreground">Monitor SOS alerts and emergency responses</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Active SOS</p><p className="text-2xl font-bold text-red-600">3</p></div><AlertTriangle className="w-8 h-8 text-red-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Resolved Today</p><p className="text-2xl font-bold">7</p></div><Shield className="w-8 h-8 text-green-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Police Stations</p><p className="text-2xl font-bold">156</p></div><Phone className="w-8 h-8 text-blue-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Hospitals</p><p className="text-2xl font-bold">89</p></div><MapPin className="w-8 h-8 text-purple-500" /></div></CardContent></Card>
      </div>
      
      <Card>
        <CardHeader><CardTitle>Recent SOS Alerts</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 bg-red-50 border-l-4 border-l-red-500 rounded">
            <p className="font-medium">Tourist in Distress - India Gate</p>
            <p className="text-sm text-muted-foreground">Emergency response dispatched</p>
            <Badge variant="destructive">ACTIVE</Badge>
          </div>
          <div className="p-3 bg-green-50 border-l-4 border-l-green-500 rounded">
            <p className="font-medium">Medical Emergency - Goa Beach</p>
            <p className="text-sm text-muted-foreground">Resolved with medical assistance</p>
            <Badge className="bg-green-100 text-green-700">RESOLVED</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}