
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, BarChart3, Download } from "lucide-react";
import { generateResearchDataset, exportToJSON, exportToCSV } from "@/utils/dataExporter";
import { useToast } from "@/hooks/use-toast";

interface AIInsightsTabProps {
  data?: any;
}

const AIInsightsTab: React.FC<AIInsightsTabProps> = ({ data }) => {
  const { toast } = useToast();

  const handleExportJSON = () => {
    try {
      const dataset = generateResearchDataset({ aiInsights: data });
      exportToJSON(dataset, 'ai-insights-research-data');
      
      toast({
        title: "Export Successful",
        description: "Complete research dataset exported as JSON file",
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Unable to export research dataset",
        variant: "destructive",
      });
    }
  };

  const handleExportCSV = () => {
    try {
      const dataset = generateResearchDataset({ aiInsights: data });
      exportToCSV(dataset, 'ai-insights-research-data');
      
      toast({
        title: "Export Successful",
        description: "Complete research dataset exported as CSV file", 
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Unable to export research dataset",
        variant: "destructive",
      });
    }
  };

  return (
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
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={handleExportJSON}
              >
                <Download className="h-4 w-4 mr-1" />
                Export JSON
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                className="flex-1"
                onClick={handleExportCSV}
              >
                <Download className="h-4 w-4 mr-1" />
                Export CSV
              </Button>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Conversation turns analyzed</span>
              <span className="font-medium">
                {data?.conversationTurns || 1247}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Speech biomarkers extracted</span>
              <span className="font-medium">
                {data?.speechBiomarkersExtracted || 156}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Memory assessments</span>
              <span className="font-medium">
                {data?.memoryAssessmentsCompleted || 24}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Safety interventions logged</span>
              <span className="font-medium">
                {data?.safetyInterventions || 8}
              </span>
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
  );
};

export default AIInsightsTab;
