
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Network } from "lucide-react";
import KnowledgeGraph from "@/components/KnowledgeGraph";

interface AIInsightsTabProps {
  data?: any;
}

const AIInsightsTab: React.FC<AIInsightsTabProps> = ({ data }) => {
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

      {/* Knowledge Graph Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-5 w-5" />
            Memory Relationship Map
          </CardTitle>
          <CardDescription>
            Interactive knowledge graph of conversation entities and relationships
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="text-sm font-medium text-purple-900 mb-2">LightRAG Visualization</h4>
            <p className="text-xs text-purple-700 mb-3">
              Real-time entity extraction and relationship mapping from conversations
            </p>
            <div className="flex justify-between text-xs text-purple-600 mb-2">
              <span>Entities: {data?.entities || 15}</span>
              <span>Relationships: {data?.relationships || 15}</span>
              <span>Sessions: {data?.sessions || 1}</span>
            </div>
          </div>

          <KnowledgeGraph data={data} />

          <div className="pt-3 border-t">
            <p className="text-xs text-muted-foreground">
              Drag nodes to explore relationships. The graph updates in real-time as new 
              memories and connections are discovered during conversations.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIInsightsTab;
