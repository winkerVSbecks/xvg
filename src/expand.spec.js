import test from 'tape';
import { expand } from './expand';

const squareSegments = [
  ['M', 10, 10],
  ['H', 90 ],
  ['V', 90],
  ['H', 10],
  ['H', 10],
  ['V', 20],
  ['V', 30],
  ['L', 10, 10],
];

const arcSegments = [
  ['M', 80, 230],
  ['A', 45, 45, 0, 0, 1, 125, 275],
  ['H', 30],
  ['A', 45, 45, 0, 0, 1, 125, 275],
  ['V', 30],
  ['L', 125, 230],
  ['Z'],
];

test('Expand: should add y coordinate for H segment', (t) => {
  t.deepEqual(
    expand(['H', 10], 3, squareSegments),
    ['H', 10, 90],
  );

  t.deepEqual(
    expand(['H', 90], 1, squareSegments),
    ['H', 90, 10],
  );

  t.deepEqual(
    expand(['H', 30], 2, arcSegments),
    ['H', 30, 275],
  );

  t.end();
});

test('Expand: should add x coordinate for V segment', (t) => {
  t.deepEqual(
    expand(['V', 90], 2, squareSegments),
    ['V', 90, 90],
  );

  t.deepEqual(
    expand(['V', 30], 6, squareSegments),
    ['V', 10, 30],
  );

  t.deepEqual(
    expand(['V', 30], 4, arcSegments),
    ['V', 125, 30],
  );

  t.end();
});
