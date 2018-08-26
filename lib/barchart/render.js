import resize from './resize';
import { debounce } from 'debounce';
import { select, selectAll } from 'd3-selection';
import { json } from 'd3-fetch';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisTop, axisLeft } from 'd3-axis';
import getDimensions from './getDimensions';

export default function render(element, className) {
  const { WIDTH, HEIGHT, MARGINS } = getDimensions(element);

  const opts = {
    canvas: 'canvas',
    xAxisClass: 'x-axis',
    yAxisClass: 'y-axis',
    rectangle: 'rectangle',
    rectangles: 'rectangles',
    element,
    className,
    y: '',
    x: '',
    yAxis: '',
    xAxis: '',
  };

  // request
  json('../data/londonMedianHousepriceToMedianGrossIncome.json')
    .then(rawData => {
      return rawData.figures.map(el => {
        const date = Object.keys(el)[0];
        return {
          ratio: el[`${date}`],
          date,
        };
      });
    })
    .then(d => render(d));

  // render
  function render(data) {
    const maxRatio = data[0].ratio + 1;

    const y = scaleBand()
      .domain(data.map(obj => obj.date))
      .rangeRound([0, HEIGHT - MARGINS.bottom])
      .padding(0.1);

    const x = scaleLinear()
      .domain([0, maxRatio])
      .range([0, WIDTH - MARGINS.left - MARGINS.right]);

    const yAxis = axisLeft()
      .ticks(data.length - 1)
      .scale(y);

    const xAxis = axisTop().scale(x);

    const canvas = select(element)
      .append('svg')
      .attr('class', className)
      .attr('width', WIDTH)
      .attr('height', HEIGHT)
      .append('g')
      .attr('class', `.${opts.canvas}`)
      .attr('width', WIDTH - MARGINS.right - MARGINS.left)
      .attr('height', HEIGHT - MARGINS.top - MARGINS.bottom)
      .attr('transform', `translate(0, ${MARGINS.top})`);

    canvas
      .append('g')
      .attr('class', `${opts.yAxisClass}`)
      .attr('transform', `translate(${MARGINS.right}, 0)`)
      .call(yAxis);

    canvas
      .append('g')
      .attr('class', `${opts.xAxisClass}`)
      .attr('transform', `translate(${MARGINS.left}, 0)`)
      .call(xAxis);

    canvas
      .append('g')
      .attr('class', `${opts.rectangles}`)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', `${opts.rectangle}`)
      .attr('y', d => y(d.date))
      .attr('height', y.bandwidth())
      .attr('x', MARGINS.left)
      .attr('width', d => x(d.ratio));

    opts.y = y;
    opts.x = x;
    opts.xAxis = xAxis;
    opts.yAxis = yAxis;
  }

  // resize
  window.onresize = debounce(() => resize(opts), 250);
}
