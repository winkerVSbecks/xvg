import R from 'ramda';
import { expand } from './expand';
import { hasControlPoints, getCommandOrigin } from './utils';
import { setAttribute } from './dom';
import settings from './settings';

/**
 * Draw outlines for a shape
 */
export const drawOutline = R.converge(R.call,
  [
    () => R.juxt([
      setAttribute('stroke', settings.xvg.xvgOutlineColour),
      setAttribute('stroke-width', settings.xvg.xvgOutlineSize),
      setAttribute('fill', 'transparent'),
      setAttribute(
        'style',
        `stroke: ${settings.xvg.xvgOutlineColour}; fill: transparent; stroke-width: ${settings.xvg.xvgOutlineSize};`,
      ),
    ]),
    R.prop('node'),
  ],
);

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
      handleNode.setAttribute('stroke', settings.xvg.xvgHandleColour);
      handleNode.setAttribute('stroke-width', settings.xvg.xvgHandleSize);
      handleNode.setAttribute('fill', 'transparent');
      handleNode.setAttribute('d', handle);
      handleNode.setAttribute(
        'style',
        `stroke: ${settings.xvg.xvgHandleColour}; fill: transparent; stroke-width: ${settings.xvg.xvgHandleSize}`,
      );

      path.parentElement.appendChild(handleNode);
    }
  },
  [getHandleDescriptions, R.prop('node')],
);
