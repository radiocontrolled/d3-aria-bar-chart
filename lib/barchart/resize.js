import { select } from 'd3-selection';
import getDimensions from './getDimensions';

export default function resize(element) {
  const { WIDTH } = getDimensions(element);
  select(element)
    .select('svg')
    .attr('width', WIDTH);
}
