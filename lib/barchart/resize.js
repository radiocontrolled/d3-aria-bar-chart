import { select } from 'd3-selection';
import getDimensions from './getDimensions';

export default function resize(opts) {
  const { WIDTH, HEIGHT, MARGINS } = getDimensions(opts.element);

  select(opts.element)
    .select('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT);

  select(opts.canvas)
    .attr('width', WIDTH - MARGINS.right - MARGINS.left)
    .attr('height', HEIGHT - MARGINS.top - MARGINS.bottom)
    .attr('transform', `translate(0, ${MARGINS.top})`);

  // select(opts.yAxis)
  // .attr('transform', `translate(${MARGINS.right}, 0)`)

    // canvas
    //   .append('g')
    //   .attr('class', 'y-axis')
    //   .attr('transform', `translate(${MARGINS.right}, 0)`)
    //   .call(yAxis);

    // canvas
    //   .append('g')
    //   .attr('class', 'x-axis')
    //   .attr('transform', `translate(${MARGINS.right}, ${HEIGHT - MARGINS.top - MARGINS.bottom}) `)
    //   .call(xAxis);

}
