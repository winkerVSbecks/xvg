import R from 'ramda';
import svgpath from 'svgpath';
import { drawOutline, drawHandles } from './skeletonize';
import { drawAnchors } from './anchors';
import { drawArcEllipses } from './ellipses';

const toAbsolute = R.invoker(0, 'abs');

const getPathSegments = R.compose(
  R.prop('segments'),
  toAbsolute,
  svgpath,
  getPathDescription,
);

const parseSegments = R.compose(
  R.converge(R.assoc('segments'),
    [getPathSegments, R.objOf('node')],
  ),
);

function getPathDescription(path) {
  return path.getAttribute('d');
}

function getPaths(svg) {
  return svg.querySelectorAll('path');
}

const skeletonizePath = R.juxt([
  drawOutline,
  drawHandles,
  drawArcEllipses,
  drawAnchors,
]);

export const xRay = R.compose(
  R.forEach(skeletonizePath),
  R.map(parseSegments),
  getPaths,
);
