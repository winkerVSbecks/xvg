import R from 'ramda';
import './index.css';
import { xRay } from '../src/x-ray';
import { addZoomStyles, attachZoom } from '../src/zoom';

const cssQuery = R.invoker(1, 'querySelectorAll');

setTimeout(() =>
  R.compose(
    R.forEach(xRay),
    R.tap(R.forEach(attachZoom)),
    R.tap(addZoomStyles),
    cssQuery('.js-icon'),
  )(document),
  1000,
);
