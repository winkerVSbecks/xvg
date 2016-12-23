import R from 'ramda';
import svgpath from 'svgpath';
import { drawOutline, drawHandles } from './skeletonize';
import { drawAnchors } from './anchors';
import { drawArcGuides } from './arc-guides';

const toAbsolute = R.invoker(0, 'abs');
const unshort = R.invoker(0, 'unshort');

const getPathSegments = R.compose(
  R.prop('segments'),
  unshort,
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

const drawDebugArtifacts = R.juxt([
  drawOutline,
  drawHandles,
  drawArcGuides,
  drawAnchors,
]);

export const xRay = R.compose(
  R.forEach(drawDebugArtifacts),
  R.map(parseSegments),
  getPaths,
);
