import setup from './setup';
import resize from './resize';
import { debounce } from 'debounce';
import * as styles from './../../styles/index.css';

export default function barchart(opts) {
  const chart = setup(opts.element, opts.className);

  window.onresize = debounce(() => resize(opts.element), 250);
}
