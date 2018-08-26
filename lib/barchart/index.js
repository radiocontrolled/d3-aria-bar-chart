import setup from './setup';
import resize from './resize';
import { debounce } from 'debounce';
import * as styles from './../../styles/index.css';

export default function barchart(opts) {
  const chart = setup(opts.element, opts.className);

  const chartOptions = {
    canvas: '.canvas',
    xAxis: 'x-axis', 
    yAxis: 'y-axis', 
    element: opts.element
  }
  window.onresize = debounce(() => resize(chartOptions), 250);
}
