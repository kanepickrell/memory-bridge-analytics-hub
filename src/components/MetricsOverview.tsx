
import React from 'react';
import ClinicalMetricCard from "@/components/ClinicalMetricCard";
import { Brain, Target, Calendar, AlertTriangle } from "lucide-react";

interface MetricsOverviewProps {
  cognitiveHealthData: any;
  recallPerformance: any;
  sessionData: any;
  activeSession: boolean;
}

const MetricsOverview: React.FC<MetricsOverviewProps> = ({
  cognitiveHealthData,
  recallPerformance,
  sessionData,
  activeSession
}) => {
  return (
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
  );
};

export default MetricsOverview;
