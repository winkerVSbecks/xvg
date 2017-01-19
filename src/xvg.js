import R from 'ramda';
import { xRay } from './x-ray';
import { attachZoom } from './zoom';
import settings from './settings';

const removeNulls = R.filter(R.complement(R.isNil));
const cssQuery = R.invoker(1, 'querySelectorAll');

const getSubDocument = R.ifElse(R.has('contentDocument'),
  R.prop('contentDocument'),
  R.invoker(0, 'getSVGDocument'),
);

const findSvgElements = R.compose(
  R.compose(
    removeNulls,
    R.flatten,
  ),
  R.map(cssQuery('svg')),
  R.converge(R.concat, [
    R.of,
    R.compose(
      removeNulls,
      R.map(getSubDocument),
      cssQuery('object, embed, iframe'),
    ),
  ]),
);

if (process.env.NODE_ENV === 'development') {
  window.onload = function onload() {
    R.compose(
      R.forEach(xRay),
      R.tap(attachZoom),
      findSvgElements,
    )(document);
  };
} else {
  chrome.storage.sync.get(settings.xvg, userSettings => {
    settings.set(userSettings);
    R.compose(
      R.forEach(xRay),
      R.tap(attachZoom),
      findSvgElements,
    )(document);
  });
}
