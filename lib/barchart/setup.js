import { select } from 'd3-selection';
import getDimensions from './getDimensions';

export default function setup(element, className) {
  const { WIDTH, HEIGHT, MARGINS } = getDimensions(element);

  select(element)
    .append('svg')
    .attr('class', className)
    .attr('width', WIDTH)
    .attr('height', HEIGHT)
    .append('g')
    .attr('class', 'canvas')
    .attr('width', WIDTH - MARGINS.right - MARGINS.left)
    .attr('height', HEIGHT - MARGINS.top - MARGINS.bottom)
    .attr('transform', `translate(0, ${MARGINS.top})`);
}
