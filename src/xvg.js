import R from 'ramda';
import { xRay } from './x-ray';
import { addZoomStyles, attachZoom } from './zoom';

const cssQuery = R.invoker(1, 'querySelectorAll');

R.compose(
  R.forEach(xRay),
  R.tap(R.forEach(attachZoom)),
  R.tap(addZoomStyles),
  cssQuery('svg'),
)(document);
