const position = { x: 0, y: 0 };

export default [
  {
    id: '1',
    type: 'input',
    data: { label: 'Rule' },
    position,
  },
  {
    id: '2',
    data: { label: 'Rule' },
    position,
  },
  {
    id: '2a',
    data: { label: 'Outcome' },
    position,
  },
  {
    id: '2b',
    data: { label: 'Outcome' },
    position,
  },
  {
    id: '3',
    data: { label: 'Rule' },
    position,
  },
  {
    id: '3a',
    data: { label: 'Outcome' },
    position,
  },
  {
    id: '3b',
    data: { label: 'Risk profile' },
    position,
  },
  {
    id: '3ba',
    data: { label: 'RP Outcome' },
    position,
  },
  {
    id: '3bb',
    data: { label: 'RP Outcome' },
    position,
  },
  {
    id: '3bc',
    data: { label: 'RP Outcome' },
    position,
  },
  { id: 'e12', source: '1', target: '2', type: 'step' },
  { id: 'e13', source: '1', target: '3', type: 'step' },
  { id: 'e22a', source: '2', target: '2a', type: 'step' },
  { id: 'e22b', source: '2', target: '2b', type: 'step' },
  { id: 'e22be', source: '3', target: '3a', type: 'step' },
  { id: 'e22bee', source: '3', target: '3b', type: 'step' },
  { id: 'e22beee', source: '3b', target: '3ba', type: 'step' },
  { id: 'e22beee', source: '3b', target: '3bb', type: 'step' },
  { id: 'e22beee', source: '3b', target: '3bc', type: 'step' },
];
