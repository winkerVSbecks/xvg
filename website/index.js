import R from 'ramda';
import './index.css';
import { xRay } from '../src/x-ray';

const cssQuery = R.invoker(1, 'querySelectorAll');

setTimeout(() =>
  R.compose(
    R.forEach(xRay),
    cssQuery('.js-icon'),
  )(document),
  1000,
);
