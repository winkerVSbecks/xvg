import R from 'ramda';

const SVG_NS = 'http://www.w3.org/2000/svg';

export function createElement(type) {
  return document.createElementNS(SVG_NS, type);
}

export const isArc = R.compose(R.equals('A'), R.head);

export const hasControlPoints = R.test(/(q|t|c|s)/ig);
export const hasX = R.test(/(m|l|h|q|t|c|s|a)/ig);
export const hasY = R.test(/(m|l|v|q|t|c|s|a)/ig);

export const getCommandOrigin = R.compose(
  R.takeLast(2),
  (idx, segments) => segments[idx - 1],
);

export const removeZ = R.filter(R.compose(R.not, R.equals('Z'), R.head));

export function getAttribute(type) {
  return path => path.getAttribute(type);
}

export function getNodes(type) {
  return (svg) => svg.querySelectorAll(type);
}
