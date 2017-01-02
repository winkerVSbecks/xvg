import test from 'tape';
import { isArc, getCommandOrigin, removeZ } from '../utils';
import { complexPath, qAndTPath } from './fixtures';

test('utils.isArc', (t) => {
  t.ok(isArc(['A', 30, 50, 0, 0, 1, 162.55, 162.45]));
  t.notOk(isArc(['V', 10, 30]));
  t.notOk(isArc([]));
  t.end();
});

test('utils.getCommandOrigin', (t) => {
  t.deepEqual(getCommandOrigin(1, qAndTPath), [10, 80]);
  t.deepEqual(getCommandOrigin(2, qAndTPath), [95, 80]);
  t.end();
});

test('utils.removeZ', (t) => {
  t.deepEqual(
    removeZ(complexPath),
    complexPath.slice(0, complexPath.length - 1),
  );
  t.end();
});
