
import { Node } from '@xyflow/react';

export const getNodeColor = (node: Node) => {
  return node.style?.backgroundColor || '#ddd';
};
