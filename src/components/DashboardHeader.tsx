
import React from 'react';
import { Badge } from "@/components/ui/badge";

const DashboardHeader = () => {
  return (
    <div className="border-b bg-card shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Memory Bridge</h1>
            <p className="text-muted-foreground">AI-Powered Reminiscence Therapy Platform</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-sm bg-blue-50 border-blue-200">
              Clinical Research Demo - Dr. MacWhinney
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
