import { select } from 'd3-selection';
import getDimensions from './getDimensions';

export default function resize(element) {
  const { WIDTH, HEIGHT, MARGINS } = getDimensions(element);

  select(element)
    .select('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT);

  select('.canvas')
    .attr('width', WIDTH - MARGINS.right - MARGINS.left)
    .attr('height', HEIGHT - MARGINS.top - MARGINS.bottom)
    .attr('transform', `translate(0, ${MARGINS.top})`);
}
