import R from 'ramda';
import { xRay } from './x-ray';
import { attachZoom } from './zoom';

const cssQuery = R.invoker(1, 'querySelectorAll');

R.compose(
  R.forEach(xRay),
  R.tap(attachZoom),
  cssQuery('svg'),
)(document);
