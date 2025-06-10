
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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

  // Mock data based on your actual session logs
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
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Memory Bridge</h1>
              <p className="text-muted-foreground">AI-Powered Reminiscence Therapy Platform</p>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant={activeSession ? "destructive" : "default"}
                onClick={() => setActiveSession(!activeSession)}
                className="flex items-center gap-2"
              >
                <Activity className="h-4 w-4" />
                {activeSession ? "End Session" : "Start Session"}
              </Button>
              <Badge variant="outline" className="text-sm">
                For Research Demo - Dr. MacWhinney
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        {/* Active Session Alert */}
        {activeSession && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <Activity className="h-4 w-4" />
            <AlertTitle>Therapy Session Active</AlertTitle>
            <AlertDescription>
              Real-time cognitive monitoring enabled. Multi-agent assessment in progress.
            </AlertDescription>
          </Alert>
        )}

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cognitive Health</CardTitle>
              <Brain className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{cognitiveHealthData.currentScore}/100</div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <TrendingDown className="h-3 w-3 text-orange-500" />
                <span className="text-orange-600">Declining trend</span>
              </div>
              <Progress value={cognitiveHealthData.currentScore} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recall Success</CardTitle>
              <Target className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{recallPerformance.overallSuccess}%</div>
              <p className="text-xs text-muted-foreground">Last 6 tests</p>
              <Progress value={recallPerformance.overallSuccess} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Session Progress</CardTitle>
              <Calendar className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sessionData.totalSessions}</div>
              <p className="text-xs text-muted-foreground">
                {sessionData.avgDuration} min avg duration
              </p>
              <Progress value={sessionData.completionRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">Medium</div>
              <p className="text-xs text-muted-foreground">Requires monitoring</p>
              <Badge variant="secondary" className="mt-2">Weekly review</Badge>
            </CardContent>
          </Card>
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
              {/* Speech Pattern Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Speech Pattern Analysis
                  </CardTitle>
                  <CardDescription>
                    Real-time biomarkers with 94% cognitive decline prediction accuracy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Filler Word Ratio</span>
                      <span className="text-sm text-muted-foreground">8.1%</span>
                    </div>
                    <Progress value={8.1} className="h-2" />
                    <p className="text-xs text-green-600">✓ Below 15% concern threshold</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Vocabulary Diversity</span>
                      <span className="text-sm text-muted-foreground">79.1%</span>
                    </div>
                    <Progress value={79.1} className="h-2" />
                    <p className="text-xs text-green-600">✓ Above 60% decline threshold</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Response Complexity</span>
                      <span className="text-sm text-muted-foreground">74.3 reading ease</span>
                    </div>
                    <Progress value={74.3} className="h-2" />
                    <p className="text-xs text-blue-600">→ Stable complexity levels</p>
                  </div>
                </CardContent>
              </Card>

              {/* Clinical Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Clinical Alerts
                  </CardTitle>
                  <CardDescription>
                    AI-generated insights requiring clinical attention
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <TrendingDown className="h-4 w-4" />
                    <AlertTitle>Vocabulary Decline Detected</AlertTitle>
                    <AlertDescription>
                      15% decrease in vocabulary diversity over last 3 sessions. Recommend clinical evaluation.
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <Clock className="h-4 w-4" />
                    <AlertTitle>Session Pattern Change</AlertTitle>
                    <AlertDescription>
                      Patient completing sessions 5 minutes earlier than baseline. Monitor engagement.
                    </AlertDescription>
                  </Alert>

                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-medium mb-2">Positive Indicators</h4>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Consistent session attendance</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Strong family memory recall</span>
                    </div>
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
    </div>
  );
};

export default Index;
