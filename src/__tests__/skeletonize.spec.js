import test from 'tape';
import { getHandleDescriptions } from '../skeletonize';
import { mdnCubic, mdnReflect, mdnQuad, mdnChain } from './fixtures';

test('skeletonize.getHandleDescriptions', (t) => {
  t.deepEqual(
    getHandleDescriptions({ segments: mdnCubic }),
    ' M 10 10 L 20 20 M 40 20 L 50 10  M 70 10 L 70 20 M 120 20 L 120 10  M 130 10 L 120 20 M 180 20 L 170 10  M 10 60 L 20 80 M 40 80 L 50 60  M 70 60 L 70 80 M 110 80 L 110 60  M 130 60 L 120 80 M 180 80 L 170 60  M 10 110 L 20 140 M 40 140 L 50 110  M 70 110 L 70 140 M 110 140 L 110 110  M 130 110 L 120 140 M 180 140 L 170 110',
  );

  t.deepEqual(
    getHandleDescriptions({ segments: mdnReflect }),
    ' M 10 80 L 40 10 M 65 10 L 95 80 M 150 150 L 180 80',
  );

  t.deepEqual(
    getHandleDescriptions({ segments: mdnQuad }),
    ' M 10 80 L 95 10 L 180 80',
  );

  t.deepEqual(
    getHandleDescriptions({ segments: mdnChain }),
    ' M 10 80 L 52.5 10 L 95 80 ',
  );
  t.end();
});
