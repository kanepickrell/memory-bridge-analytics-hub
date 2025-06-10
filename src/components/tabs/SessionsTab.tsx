
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Heart } from "lucide-react";

interface SessionsTabProps {
  sessionData: any;
}

const SessionsTab: React.FC<SessionsTabProps> = ({ sessionData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Session Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Session Analytics
          </CardTitle>
          <CardDescription>
            Therapeutic engagement and completion patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">Total Sessions</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold">28 min</div>
              <div className="text-sm text-muted-foreground">Avg Duration</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Completion Rate</span>
              <span className="text-sm text-muted-foreground">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Weekly Goal Progress</span>
              <span className="text-sm text-muted-foreground">2/3 sessions</span>
            </div>
            <Progress value={67} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Therapeutic Effectiveness */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Therapeutic Effectiveness
          </CardTitle>
          <CardDescription>
            AI-assessed engagement and emotional response
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Positive Emotional Engagement</span>
              <span className="text-sm text-muted-foreground">72%</span>
            </div>
            <Progress value={72} className="h-2" />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Memory Sharing Frequency</span>
              <span className="text-sm text-muted-foreground">3.2 per session</span>
            </div>
            <Progress value={64} className="h-2" />
          </div>

          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <h4 className="text-sm font-medium text-green-900 mb-1">Most Effective Triggers</h4>
            <ul className="text-xs text-green-700 space-y-1">
              <li>• Family photographs (85% success)</li>
              <li>• Childhood activities (78% success)</li>
              <li>• Music from formative years (71% success)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SessionsTab;
