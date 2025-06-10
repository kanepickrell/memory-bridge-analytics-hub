
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, BarChart3, CheckCircle, XCircle } from "lucide-react";

interface RecallTabProps {
  recallPerformance: any;
}

const RecallTab: React.FC<RecallTabProps> = ({ recallPerformance }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Memory Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Memory Recall Performance
          </CardTitle>
          <CardDescription>
            Semantic similarity and completeness scoring
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-blue-600">24.6%</div>
              <div className="text-sm text-muted-foreground">Semantic Similarity</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-purple-600">40%</div>
              <div className="text-sm text-muted-foreground">Completeness Score</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Memory Category Performance</h4>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Childhood (Ages 5-15)</span>
                <Badge variant="secondary">85%</Badge>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Formative Years (15-30)</span>
                <Badge variant="secondary">78%</Badge>
              </div>
              <Progress value={78} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Recent Events (Last year)</span>
                <Badge variant="destructive">30%</Badge>
              </div>
              <Progress value={30} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Recall Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Recent Recall Tests
          </CardTitle>
          <CardDescription>
            Natural conversation-based memory assessment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recallPerformance.recentTests.map((test: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {test.success ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                  <div>
                    <div className="font-medium text-sm">{test.topic}</div>
                    <div className="text-xs text-muted-foreground">{test.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{Math.round(test.similarity * 100)}%</div>
                  <div className="text-xs text-muted-foreground">similarity</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-medium text-blue-900 mb-1">Clinical Note</h4>
            <p className="text-xs text-blue-700">
              Patient consistently recalls core memory elements (people, activities) but loses specific details (times, places, emotional context).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecallTab;
