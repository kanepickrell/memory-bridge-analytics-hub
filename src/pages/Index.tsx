
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "@/components/DashboardHeader";
import MetricsOverview from "@/components/MetricsOverview";
import CognitiveHealthTab from "@/components/tabs/CognitiveHealthTab";
import RecallTab from "@/components/tabs/RecallTab";
import SessionsTab from "@/components/tabs/SessionsTab";
import AIInsightsTab from "@/components/tabs/AIInsightsTab";
import EnhancedAlert from "@/components/EnhancedAlert";
import SessionControlFAB from "@/components/SessionControlFAB";
import ChatNavButton from "@/components/ChatNavButton";

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
      <DashboardHeader />

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

        {/* Key Metrics Overview */}
        <MetricsOverview
          cognitiveHealthData={cognitiveHealthData}
          recallPerformance={recallPerformance}
          sessionData={sessionData}
          activeSession={activeSession}
        />

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
            <CognitiveHealthTab />
          </TabsContent>

          <TabsContent value="recall" className="space-y-6">
            <RecallTab recallPerformance={recallPerformance} />
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <SessionsTab sessionData={sessionData} />
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-6">
            <AIInsightsTab />
          </TabsContent>
        </Tabs>
      </div>

      {/* Session Control FAB */}
      <SessionControlFAB 
        isActive={activeSession}
        onToggle={() => setActiveSession(!activeSession)}
      />

      {/* Chat Navigation Button */}
      <ChatNavButton />
    </div>
  );
};

export default Index;
