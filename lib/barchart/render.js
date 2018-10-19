import { debounce } from 'debounce';
import { select, selectAll } from 'd3-selection';
import { json } from 'd3-fetch';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisTop, axisLeft } from 'd3-axis';
import getDimensions from '../utilities/getDimensions';
import resize from './resize';

export default function render(element, className) {
  const { WIDTH, HEIGHT, MARGINS } = getDimensions(element);

  const opts = {
    canvas: 'canvas',
    xAxisClass: 'x-axis',
    yAxisClass: 'y-axis',
    rectangle: 'rectangle',
    rectangles: 'rectangles',
    xAxisLabel: 'x-axis-label',
    bargroup: 'bargroup',
    element,
    className,
    y: '',
    x: '',
    yAxis: '',
    xAxis: '',
  };

  
  // request
  json('https://radiocontrolled.github.io/d3-aria-bar-chart/data/londonMedianHousepriceToMedianGrossIncome.json')
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
      .range([0, HEIGHT - MARGINS.bottom])
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
      .attr('class', `${opts.canvas}`)
      .attr('role', 'table')
      .attr('width', WIDTH - MARGINS.right - MARGINS.left)
      .attr('height', HEIGHT - MARGINS.top - MARGINS.bottom)
      .attr('transform', `translate(0, ${MARGINS.top})`);

    canvas
      .append('g')
      .attr('role', 'rowgroup')
      .attr('class', 'tableheader')
      .append('g')
      .attr('role', 'row')
      .attr('class', 'header')
      .append('g')
      .attr('role', 'columnheader')
      .append('text')
      .text('year')
      .attr('class', 'a11yHidden');

    canvas
      .select('.header')
      .append('g')
      .attr('role', 'columnheader')
      .append('text')
      .text('ratio')
      .attr('class', 'a11yHidden');

    canvas
      .append('g')
      .attr('role', 'rowgroup')
      .attr('class', 'tablebody')

    canvas
      .select('.tablebody')
      .append('g')
      .attr('class', `${opts.yAxisClass}`)
      .attr('role', 'row')
      .attr('transform', `translate(${MARGINS.right}, 0)`)
      .attr('aria-hidden', true)
      .call(yAxis);

    canvas
      .select('.tablebody')
      .append('g')
      .attr('class', `${opts.xAxisClass}`)
      .attr('transform', `translate(${MARGINS.left}, 0)`)
      .attr('aria-hidden', true)
      .call(xAxis);

    canvas
      .select('.tablebody')
      .append('g')
      .attr('class', `${opts.rectangles}`)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('g')
      .attr('class', `${opts.bargroup}`)
      .attr('role', 'row')
      .append('rect')
      .attr('class', `${opts.rectangle}`)
      .attr('role', 'presentation')
      .attr('y', d => y(d.date))
      .attr('x', MARGINS.left)
      .attr('height', y.bandwidth())
      .attr('width', d => x(d.ratio));

    canvas
      .select('.tablebody')
      .selectAll(`g.${opts.bargroup}`)
      .append('text')
      .text(d => d.date)
      .attr('role', 'cell')
      .attr('class', 'a11yHidden')

    canvas
      .select('.tablebody')
      .selectAll(`g.${opts.bargroup}`)
      .append('text')
      .text(d => d.ratio)
      .attr('y', d => y(d.date) - (y.bandwidth() / 2))
      .attr('dy', '5%')
      .attr('x', d => x(d.ratio))
      .attr('class', `${opts.xAxisLabel}`)
      .attr('role', 'cell');


    opts.y = y;
    opts.x = x;
    opts.xAxis = xAxis;
    opts.yAxis = yAxis;
  }

  // resize
  window.onresize = debounce(() => resize(opts), 250);
}
