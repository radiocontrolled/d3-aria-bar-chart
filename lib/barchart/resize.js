import { select, selectAll } from 'd3-selection';
import getDimensions from '../utilities/getDimensions';

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

  opts.y.rangeRound([0, HEIGHT - MARGINS.bottom]);
  opts.x.range([0, WIDTH - MARGINS.left - MARGINS.right]);
  opts.yAxis.scale(opts.y);
  opts.xAxis.scale(opts.x);

  select(`.${opts.yAxisClass}`)
    .attr('transform', `translate(${MARGINS.right}, 0)`)
    .call(opts.yAxis);

  select(`.${opts.xAxisClass}`)
    .attr('transform', `translate(${MARGINS.left}, 0)`)
    .call(opts.xAxis);

  selectAll(`.${opts.rectangle}`)
    .attr('y', d => opts.y(d.date))
    .attr('height', opts.y.bandwidth())
    .attr('width', d => opts.x(d.ratio));
  
  selectAll(`.${opts.xAxisLabel}`)
    .attr('y', d => opts.y(d.date) - (opts.y.bandwidth() / 2))
    .attr('dy', '5%')
    .attr('x', d => opts.x(d.ratio))
  
}
