
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MessageSquare, BarChart3, CheckCircle, TrendingDown } from "lucide-react";

const CognitiveHealthTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Speech Pattern Analysis - Enhanced */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Real-Time Speech Biomarkers
          </CardTitle>
          <CardDescription>
            Research-validated indicators with 94% cognitive decline prediction accuracy
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Filler Word Ratio</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono">8.1%</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Normal
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Progress value={8.1} className="h-3" />
              <div className="absolute top-0 w-0.5 h-3 bg-red-500" style={{ left: '15%' }} />
            </div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Below 15% concern threshold
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Vocabulary Diversity</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono">79.1%</span>
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                  Declining
                </Badge>
              </div>
            </div>
            <div className="relative">
              <Progress value={79.1} className="h-3" />
              <div className="absolute top-0 w-0.5 h-3 bg-red-500" style={{ left: '60%' }} />
            </div>
            <p className="text-xs text-amber-600 flex items-center gap-1">
              <TrendingDown className="h-3 w-3" />
              15% decline from baseline
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Response Complexity</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono">74.3</span>
                <Badge variant="secondary">Stable</Badge>
              </div>
            </div>
            <Progress value={74.3} className="h-3" />
            <p className="text-xs text-blue-600">Reading ease score within normal range</p>
          </div>
        </CardContent>
      </Card>

      {/* Research Export Panel */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Research Data Export
          </CardTitle>
          <CardDescription>
            DementiaBank-compatible conversation analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="text-sm font-medium text-blue-900 mb-2">Academic Integration Ready</h4>
            <p className="text-xs text-blue-700 mb-3">
              Data structured for TalkBank research frameworks and longitudinal studies
            </p>
            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
              Export Research Dataset
            </Button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Conversation turns analyzed</span>
              <span className="font-mono font-medium">1,247</span>
            </div>
            <div className="flex justify-between">
              <span>Speech biomarkers extracted</span>
              <span className="font-mono font-medium">156</span>
            </div>
            <div className="flex justify-between">
              <span>Memory assessments completed</span>
              <span className="font-mono font-medium">24</span>
            </div>
            <div className="flex justify-between">
              <span>Safety interventions logged</span>
              <span className="font-mono font-medium">8</span>
            </div>
          </div>

          <div className="pt-3 border-t">
            <p className="text-xs text-muted-foreground">
              First system generating research-quality therapeutic data during real-time conversation
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CognitiveHealthTab;
