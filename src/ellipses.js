import R from 'ramda';
import { getCommandOrigin, isArc, createElement } from './utils';

function makeArc(d) {
  const arc = createElement('path');

  arc.setAttributeNS(null, 'd', d);
  arc.setAttributeNS(null, 'fill', '#fff');
  arc.setAttributeNS(null, 'stroke', '#96CCFF');
  arc.setAttributeNS(null, 'stroke-width', '0.25%');

  return arc;
}

// 1 ↔️ 0
const flip = R.ifElse(R.equals(0), R.always(1), R.always(0));

const reflect = R.compose(
  R.adjust(flip, 4),
  R.adjust(flip, 5),
);

const makeArcs = R.compose(
  makeArc,
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

const makeEllipse = R.converge(
  makeArcs,
  [
    R.converge(
      getCommandOrigin,
      [R.nthArg(1), R.nthArg(2)],
    ),
    R.identity,
  ],
);

const makeEllipses = R.compose(
  R.reject(R.isNil),
  R.addIndex(R.map)(
    R.ifElse(isArc,
      makeEllipse,
      R.always(undefined),
    ),
  ),
  R.prop('segments'),
);

export const drawArcEllipses = R.converge(
  (ellipses, path) => {
    ellipses.forEach(e => {
      path.parentElement.insertBefore(e, path);
    });
  },
  [makeEllipses, R.prop('node')],
);
