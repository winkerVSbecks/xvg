import R from 'ramda';
import { insertStyleSheet } from './dom';

function addZoomStyles() {
  insertStyleSheet('xvg-stylesheet', [
    `.xvg-inspect {
      transform: scale3d(1, 1, 1);
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      cursor: zoom-in;
      z-index: 1;
    }`,
    '.xvg-inspect:hover { transform: scale3d(2, 2, 2); }',
  ]);
}

function addZoomClass(node) {
  node.classList.add('xvg-inspect');
}

export const attachZoom = R.compose(
  R.when(
    R.compose(
      R.complement(R.isNil),
      R.always(document.head),
    ),
    R.compose(
      R.tap(R.forEach(addZoomClass)),
      R.tap(addZoomStyles),
    ),
  ),
);
