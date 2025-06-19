
import { useCallback } from 'react';
import {
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
} from '@xyflow/react';
import { initialNodes, initialEdges } from './data';

export const useKnowledgeGraph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
  };
};
