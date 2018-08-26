import { select, selectAll } from 'd3-selection';
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
  
    // const opts = {
    //   canvas: 'canvas',
    //   xAxis: 'x-axis', 
    //   yAxis: 'y-axis', 
    //   rectangle: 'rectangle',
    //   rectangles: 'rectangles',
    //   element: element,
    //   className: className,
    //   y: null, 
    //   x: null,
    // };

  opts.y.rangeRound([0, HEIGHT - MARGINS.bottom]);
  opts.x.range([0, WIDTH - MARGINS.left - MARGINS.right]);
  opts.yAxis.scale(opts.y);
  opts.xAxis.scale(opts.x);
  
  select(`${opts.yAxis}`)
    .attr('transform', `translate(${MARGINS.right}, 0)`)
    .call(yAxis);

  select(`${opts.xAxis}`)
    .attr('transform', `translate(${MARGINS.left}, 0)`)
    .call(xAxis);
  
  selectAll(`${opts.rectangle}`)
    .attr('y', d => y(d.date))
    .attr('height', y.bandwidth())
    .attr('width', d => x(d.ratio));
}
