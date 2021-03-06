import R from 'ramda';
import { getCommandOrigin, isArc } from './utils';
import { make } from './dom';
import { expand } from './expand';
import settings from './settings';

const makeArcGuide = make('path', (d) => [
  ['d', d],
  ['fill', 'transparent'],
  ['stroke', settings.xvg.xvgArcGuideColour],
  ['stroke-width', '0.25%'],
  ['style', `stroke: ${settings.xvg.xvgArcGuideColour}; fill: transparent; stroke-width: ${settings.xvg.xvgArcGuideSize}`],
]);

// 1 ↔️ 0
const flip = R.ifElse(R.equals(0), R.always(1), R.always(0));

const reflect = R.compose(
  R.adjust(flip, 4),
  R.adjust(flip, 5),
);

const makeArcs = R.compose(
  R.join(' '),
  R.useWith((moveToOrigin, arc) => {
    return [
      ...moveToOrigin,
      ...arc,
      ...moveToOrigin,
      ...reflect(arc),
    ];
  }, [R.prepend('M'), R.identity]),
);

const makeArcGuideDef = R.converge(
  makeArcs,
  [
    R.converge(
      getCommandOrigin,
      [R.nthArg(1), R.nthArg(2)],
    ),
    R.identity,
  ],
);

export const makeArcGuides = R.compose(
  R.reject(R.isNil),
  R.addIndex(R.map)(
    R.ifElse(isArc,
      makeArcGuideDef,
      R.always(undefined),
    ),
  ),
  R.addIndex(R.map)(expand),
  R.prop('segments'),
);

export const drawArcGuides = R.converge(
  (ellipses, path) => {
    ellipses.forEach(e => {
      path.parentElement.insertBefore(e, path);
    });
  },
  [R.pipe(makeArcGuides, R.map(makeArcGuide)), R.prop('node')],
);
