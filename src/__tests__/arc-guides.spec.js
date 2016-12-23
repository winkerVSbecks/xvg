import test from 'tape';
import { makeArcGuides } from '../arc-guides';
import { mdnArcs, mdnArcs2 } from './fixtures';

test('ellipses.makeArcGuides', (t) => {
  t.deepEqual(
    makeArcGuides({ segments: mdnArcs }),
    [
      'M 80 80 A 45 45 0 0 0 125 125 M 80 80 A 45 45 0 1 1 125 125',
      'M 230 80 A 45 45 0 1 0 275 125 M 230 80 A 45 45 0 0 1 275 125',
      'M 80 230 A 45 45 0 0 1 125 275 M 80 230 A 45 45 0 1 0 125 275',
      'M 230 230 A 45 45 0 1 1 275 275 M 230 230 A 45 45 0 0 0 275 275',
    ],
  );

  t.deepEqual(
    makeArcGuides({ segments: mdnArcs2 }),
    [
      'M 110 215 A 30 50 0 0 1 162.55 162.45 M 110 215 A 30 50 0 1 0 162.55 162.45',
      'M 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 M 172.55 152.45 A 30 50 -45 1 0 215.1 109.9',
    ],
  );

  t.end();
});
