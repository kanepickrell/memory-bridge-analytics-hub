
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ClinicalMetricCard from "@/components/ClinicalMetricCard";
import EnhancedAlert from "@/components/EnhancedAlert";
import SessionControlFAB from "@/components/SessionControlFAB";
import { 
  Brain, 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Activity,
  BarChart3,
  Clock,
  Target,
  CheckCircle,
  XCircle,
  MessageSquare,
  Heart,
  Calendar
} from "lucide-react";

const Index = () => {
  const [activeSession, setActiveSession] = useState(false);

  // Mock data based on actual session logs
  const cognitiveHealthData = {
    currentScore: 67,
    trend: "declining",
    riskLevel: "medium",
    speechMetrics: {
      fillerRatio: 0.081,
      vocabularyDiversity: 0.791,
      avgSentenceLength: 17.2,
      readingEase: 74.3
    }
  };

  const recallPerformance = {
    overallSuccess: 33,
    semanticSimilarity: 0.246,
    completenessScore: 0.4,
    recentTests: [
      { date: "2025-06-10", success: false, similarity: 0.246, topic: "Grandfather & bicycle repair" },
      { date: "2025-06-09", success: true, similarity: 0.578, topic: "Family holidays" },
      { date: "2025-06-08", success: false, similarity: 0.312, topic: "School memories" }
    ]
  };

  const sessionData = {
    totalSessions: 12,
    avgDuration: 28,
    completionRate: 85,
    lastSession: "2025-06-10",
    weeklyGoal: 3
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      <div className="container mx-auto px-6 py-6">
        {/* Active Session Alert */}
        {activeSession && (
          <EnhancedAlert
            severity="info"
            title="Therapy Session Active"
            description="Real-time cognitive monitoring enabled. Multi-agent assessment in progress."
            timestamp="Live"
          />
        )}

        {/* Key Metrics Overview - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <ClinicalMetricCard
            title="Cognitive Health Score"
            value={cognitiveHealthData.currentScore}
            unit="/100"
            trend="down"
            currentProgress={cognitiveHealthData.currentScore}
            threshold={70}
            status="warning"
            icon={Brain}
            researchContext="94% accuracy in predicting cognitive decline"
            isLive={activeSession}
          />

          <ClinicalMetricCard
            title="Memory Recall Success"
            value={recallPerformance.overallSuccess}
            unit="%"
            trend="down"
            currentProgress={recallPerformance.overallSuccess}
            threshold={50}
            status="critical"
            icon={Target}
            researchContext="Validated against RAVLT standards"
          />

          <ClinicalMetricCard
            title="Session Engagement"
            value={sessionData.completionRate}
            unit="%"
            trend="stable"
            currentProgress={sessionData.completionRate}
            status="normal"
            icon={Calendar}
            researchContext="30-min structured sessions optimal"
          />

          <ClinicalMetricCard
            title="Risk Assessment"
            value="Medium"
            trend="up"
            status="warning"
            icon={AlertTriangle}
            researchContext="Multi-dimensional clinical assessment"
          />
        </div>

        {/* Clinical Alerts Section */}
        <div className="mb-8 space-y-4">
          <EnhancedAlert
            severity="warning"
            title="Vocabulary Decline Detected"
            description="15% decrease in vocabulary diversity over last 3 sessions. Speech biomarkers indicating concern."
            actionRequired="Schedule Clinical Evaluation"
            timestamp="2 hours ago"
          />
          
          <EnhancedAlert
            severity="critical"
            title="Recall Performance Below Threshold"
            description="Recent memory tests showing 33% success rate. Semantic similarity scores declining."
            actionRequired="Immediate Assessment Recommended"
            timestamp="1 day ago"
          />
        </div>

        {/* Main Dashboard */}
        <Tabs defaultValue="cognitive" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="cognitive">Cognitive Health</TabsTrigger>
            <TabsTrigger value="recall">Memory Performance</TabsTrigger>
            <TabsTrigger value="sessions">Session Analytics</TabsTrigger>
            <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="cognitive" className="space-y-6">
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
          </TabsContent>

          <TabsContent value="recall" className="space-y-6">
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
                    {recallPerformance.recentTests.map((test, index) => (
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
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
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
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI Agent Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Multi-Agent Collaboration
                  </CardTitle>
                  <CardDescription>
                    Real-time AI agent assessment and coordination
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Safety Agent</div>
                        <div className="text-xs text-muted-foreground">Emotional monitoring</div>
                      </div>
                      <Badge variant="secondary">3 interventions</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Cognitive Agent</div>
                        <div className="text-xs text-muted-foreground">Speech analysis</div>
                      </div>
                      <Badge variant="secondary">Active monitoring</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Recall Agent</div>
                        <div className="text-xs text-muted-foreground">Memory testing</div>
                      </div>
                      <Badge variant="secondary">12 tests conducted</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">Dialogue Agent</div>
                        <div className="text-xs text-muted-foreground">Conversation flow</div>
                      </div>
                      <Badge variant="secondary">78% satisfaction</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Research Data Export */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Research Data Generation
                  </CardTitle>
                  <CardDescription>
                    Academic-quality longitudinal conversation analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-900 mb-2">DementiaBank Compatible</h4>
                    <p className="text-xs text-blue-700 mb-3">
                      Data structured for integration with TalkBank research frameworks
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Export Research Dataset
                    </Button>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Conversation turns analyzed</span>
                      <span className="font-medium">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Speech biomarkers extracted</span>
                      <span className="font-medium">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Memory assessments</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Safety interventions logged</span>
                      <span className="font-medium">8</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="text-xs text-muted-foreground">
                      Real-time cognitive assessment during natural conversation - 
                      the first system of its kind generating research-quality therapeutic data.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Session Control FAB */}
      <SessionControlFAB 
        isActive={activeSession}
        onToggle={() => setActiveSession(!activeSession)}
      />
    </div>
  );
};

export default Index;
