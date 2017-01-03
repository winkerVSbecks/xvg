import R from 'ramda';
import './index.css';
import { xRay } from '../src/x-ray';

const cssQuery = R.invoker(1, 'querySelectorAll');

R.compose(
  R.addIndex(R.forEach)((node, idx) => {
    setTimeout(() => xRay(node), 600 + idx * 300);
  }),
  cssQuery('.js-icon'),
)(document);
