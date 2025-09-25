import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdminAudit() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Audit Logs</h1>
          <p className="text-muted-foreground">Track system activities and user actions</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Logs
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Total Logs</p><p className="text-2xl font-bold">45,672</p></div><FileText className="w-8 h-8 text-blue-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Admin Actions</p><p className="text-2xl font-bold">1,234</p></div><User className="w-8 h-8 text-green-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">User Activities</p><p className="text-2xl font-bold">44,438</p></div><User className="w-8 h-8 text-purple-500" /></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Today</p><p className="text-2xl font-bold">892</p></div><Calendar className="w-8 h-8 text-orange-500" /></div></CardContent></Card>
      </div>
    </div>
  );
}