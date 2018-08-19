import { select } from 'd3-selection';
import getDimensions from './getDimensions';

export default function setup(element, className) {
  const { WIDTH } = getDimensions(element);

  select(element)
    .append('svg')
    .attr('class', className)
    .attr('width', WIDTH)
    .attr('height', WIDTH * .333); // 4:3
}
