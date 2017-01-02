import R from 'ramda';
import { expand } from './expand';
import { hasControlPoints, getCommandOrigin } from './utils';

/**
 * Draw outlines for a shape
 */
export function drawOutline({ node }) {
  node.setAttribute('stroke', '#5E2CA5');
  node.setAttribute('stroke-width', '1%');
  node.setAttribute('fill', 'transparent');
  node.setAttribute(
    'style',
    'stroke: #5E2CA5; fill: transparent; stroke-width: 1%;',
  );
}

const handleDescriptions = {
  'C': (s, o) => (
    `M ${o[0]} ${o[1]} L ${s[1]} ${s[2]} M ${s[3]} ${s[4]} L ${s[5]} ${s[6]}`
  ),
  'S': (s) => (`M ${s[1]} ${s[2]} L ${s[3]} ${s[4]}`),
  'Q': (s, o) => (`M ${o[0]} ${o[1]} L ${s[1]} ${s[2]} L ${s[3]} ${s[4]}`),
};

function handleDescriptionFn(segment, origin) {
  const segmentType = R.head(segment);
  const descriptionFn = handleDescriptions[segmentType];
  return descriptionFn ? descriptionFn(segment, origin) : '';
}

const getHandleDescription = R.ifElse(hasControlPoints,
  R.converge(handleDescriptionFn,
    [
      R.nthArg(0),
      R.compose(
        R.apply(getCommandOrigin),
        R.juxt([R.nthArg(1), R.nthArg(2)]),
      ),
    ],
  ),
  R.always(''),
);

export const getHandleDescriptions = R.compose(
  R.join(' '),
  R.addIndex(R.map)(getHandleDescription),
  R.addIndex(R.map)(expand),
  R.prop('segments'),
);

/**
 * Draw handles for control points
 */
export const drawHandles = R.converge(
  (handle, path) => {
    if (handle) {
      const handleNode = path.cloneNode();
      handleNode.setAttribute('stroke', '#FF41B4');
      handleNode.setAttribute('stroke-width', '0.5%');
      handleNode.setAttribute('fill', 'transparent');
      handleNode.setAttribute('d', handle);
      handleNode.setAttribute(
        'style',
        'stroke: #FF41B4; fill: transparent; stroke-width: 0.5%',
      );

      path.parentElement.appendChild(handleNode);
    }
  },
  [getHandleDescriptions, R.prop('node')],
);
