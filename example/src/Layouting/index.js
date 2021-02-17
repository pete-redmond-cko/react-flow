import React, { useState } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls, isNode } from 'react-flow-renderer';
import dagre from 'dagre';

import initialElements from './initial-elements';

import './layouting.css';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeExtent = [
  [0, 0],
  [1000, 1000],
];

const LayoutFlow = () => {
  const [elements, setElements] = useState(initialElements);

  const onLayout = (direction) => {
    dagreGraph.setGraph({ rankdir: 'LR', align: 'UL' });

    elements.forEach((el) => {
      if (isNode(el)) {
        dagreGraph.setNode(el.id, { width: 150, height: 0 });
      } else {
        dagreGraph.setEdge(el.source, el.target);
      }
    });

    dagre.layout(dagreGraph);

    const layoutedElements = elements.map((el) => {
      if (isNode(el)) {
        const nodeWithPosition = dagreGraph.node(el.id);
        el.targetPosition = 'left';
        el.sourcePosition = 'right';
        // we need to pass a slighltiy different position in order to notify react flow about the change
        // @TODO how can we change the position handling so that we dont need this hack?
        el.position = { x: nodeWithPosition.x + Math.random() / 1000, y: nodeWithPosition.y };
      }

      return el;
    });

    setElements(layoutedElements);
  };

  return (
    <div className="layoutflow">
      <ReactFlowProvider>
        <ReactFlow
          elements={elements}
          onLoad={() => onLayout('LR')}
          nodesDraggable={false}
        >
          <Controls />
        </ReactFlow>
        <div className="controls">
          <button onClick={() => onLayout('TB')} style={{ marginRight: 10 }}>
            vertical layout
          </button>
          <button onClick={() => onLayout('LR')}>horizontal layout</button>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default LayoutFlow;
