import test from 'tape';
import { expand } from '../expand';
import { hardEdgePath, pathWithArc } from './fixtures';

test('expand H segment', (t) => {
  t.deepEqual(
    expand(['H', 10], 3, hardEdgePath),
    ['H', 10, 90],
  );

  t.deepEqual(
    expand(['H', 90], 1, hardEdgePath),
    ['H', 90, 10],
  );

  t.deepEqual(
    expand(['H', 30], 2, pathWithArc),
    ['H', 30, 275],
  );

  t.end();
});

test('expand V segment', (t) => {
  t.deepEqual(
    expand(['V', 90], 2, hardEdgePath),
    ['V', 90, 90],
  );

  t.deepEqual(
    expand(['V', 30], 6, hardEdgePath),
    ['V', 10, 30],
  );

  t.deepEqual(
    expand(['V', 30], 4, pathWithArc),
    ['V', 125, 30],
  );

  t.end();
});
