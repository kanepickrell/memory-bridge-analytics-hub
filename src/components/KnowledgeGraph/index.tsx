
import React from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useKnowledgeGraph } from './useKnowledgeGraph';
import { getNodeColor } from './utils';

interface KnowledgeGraphProps {
  data?: any;
}

const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ data }) => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useKnowledgeGraph();

  return (
    <div className="w-full h-96 border rounded-lg overflow-hidden bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls />
        <MiniMap 
          nodeColor={getNodeColor}
          nodeStrokeWidth={3}
          zoomable
          pannable
        />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default KnowledgeGraph;
