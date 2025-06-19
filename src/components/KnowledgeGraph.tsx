
import React, { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Background,
  Controls,
  MiniMap,
  Node,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface KnowledgeGraphProps {
  data?: any;
}

const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ data }) => {
  // Mock data based on your lightRAG example
  const initialNodes: Node[] = useMemo(() => [
    {
      id: 'grandmother',
      type: 'default',
      position: { x: 400, y: 50 },
      data: { label: 'grandmother' },
      style: { 
        backgroundColor: '#ff6b6b', 
        color: 'white',
        border: '2px solid #ff5252',
        borderRadius: '8px',
        fontSize: '12px',
        padding: '8px'
      },
    },
    {
      id: 'sarah',
      type: 'default',
      position: { x: 600, y: 300 },
      data: { label: 'Sarah' },
      style: { 
        backgroundColor: '#ff6b6b', 
        color: 'white',
        border: '2px solid #ff5252',
        borderRadius: '8px',
        fontSize: '12px',
        padding: '8px'
      },
    },
    {
      id: 'work',
      type: 'default',
      position: { x: 350, y: 200 },
      data: { label: 'Work' },
      style: { 
        backgroundColor: '#4ecdc4', 
        color: 'white',
        border: '2px solid #26a69a',
        borderRadius: '8px',
        fontSize: '12px',
        padding: '8px'
      },
    },
    {
      id: 'cooking',
      type: 'default',
      position: { x: 550, y: 150 },
      data: { label: 'cooking' },
      style: { 
        backgroundColor: '#4ecdc4', 
        color: 'white',
        border: '2px solid #26a69a',
        borderRadius: '8px',
        fontSize: '12px',
        padding: '8px'
      },
    },
    {
      id: 'kitchen',
      type: 'default',
      position: { x: 150, y: 200 },
      data: { label: 'kitchen' },
      style: { 
        backgroundColor: '#45b7d1', 
        color: 'white',
        border: '2px solid #2196f3',
        borderRadius: '8px',
        fontSize: '12px',
        padding: '8px'
      },
    },
    {
      id: 'stress',
      type: 'default',
      position: { x: 500, y: 50 },
      data: { label: 'stress' },
      style: { 
        backgroundColor: '#96ceb4', 
        color: 'white',
        border: '2px solid #4caf50',
        borderRadius: '8px',
        fontSize: '12px',
        padding: '8px'
      },
    },
    {
      id: 'calmness',
      type: 'default',
      position: { x: 50, y: 300 },
      data: { label: 'calmness' },
      style: { 
        backgroundColor: '#96ceb4', 
        color: 'white',
        border: '2px solid #4caf50',
        borderRadius: '8px',
        fontSize: '12px',
        padding: '8px'
      },
    },
    {
      id: 'apple-pie',
      type: 'default',
      position: { x: 600, y: 200 },
      data: { label: 'apple pie' },
      style: { 
        backgroundColor: '#feca57', 
        color: 'white',
        border: '2px solid #ff9800',
        borderRadius: '8px',
        fontSize: '12px',
        padding: '8px'
      },
    },
    {
      id: 'manager',
      type: 'default',
      position: { x: 400, y: 350 },
      data: { label: 'Manager' },
      style: { 
        backgroundColor: '#ff6b6b', 
        color: 'white',
        border: '2px solid #ff5252',
        borderRadius: '8px',
        fontSize: '12px',
        padding: '8px'
      },
    },
    {
      id: 'patience',
      type: 'default',
      position: { x: 300, y: 400 },
      data: { label: 'patience' },
      style: { 
        backgroundColor: '#96ceb4', 
        color: 'white',
        border: '2px solid #4caf50',
        borderRadius: '8px',
        fontSize: '12px',
        padding: '8px'
      },
    },
  ], []);

  const initialEdges: Edge[] = useMemo(() => [
    {
      id: 'grandmother-stress',
      source: 'grandmother',
      target: 'stress',
      type: 'straight',
      style: { stroke: '#4caf50', strokeWidth: 2, strokeDasharray: '5,5' },
      animated: true,
    },
    {
      id: 'grandmother-cooking',
      source: 'grandmother',
      target: 'cooking',
      type: 'straight',
      style: { stroke: '#4caf50', strokeWidth: 2 },
    },
    {
      id: 'cooking-apple-pie',
      source: 'cooking',
      target: 'apple-pie',
      type: 'straight',
      style: { stroke: '#4caf50', strokeWidth: 2 },
    },
    {
      id: 'work-sarah',
      source: 'work',
      target: 'sarah',
      type: 'straight',
      style: { stroke: '#ff5252', strokeWidth: 2, strokeDasharray: '5,5' },
    },
    {
      id: 'work-manager',
      source: 'work',
      target: 'manager',
      type: 'straight',
      style: { stroke: '#ff5252', strokeWidth: 2 },
    },
    {
      id: 'kitchen-calmness',
      source: 'kitchen',
      target: 'calmness',
      type: 'straight',
      style: { stroke: '#4caf50', strokeWidth: 2 },
    },
    {
      id: 'manager-patience',
      source: 'manager',
      target: 'patience',
      type: 'straight',
      style: { stroke: '#4caf50', strokeWidth: 2 },
    },
  ], []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

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
          nodeColor={(node) => node.style?.backgroundColor || '#ddd'}
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
