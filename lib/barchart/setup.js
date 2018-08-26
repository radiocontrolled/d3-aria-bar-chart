import { select, selectAll } from 'd3-selection';
import { json } from 'd3-fetch';
import { scaleTime, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import getDimensions from './getDimensions';

export default function setup(element, className) {
  const { WIDTH, HEIGHT, MARGINS } = getDimensions(element);

  // request
  json('../data/londonMedianHousepriceToMedianGrossIncome.json')
    .then(rawData => {
      return rawData.figures.map(el => {
        const year = parseInt(Object.keys(el)[0]);
        const date = new Date(year, 0, 1);
        return {
          date,
          ratio: el[`${year}`],
        };
      });
    })
    .then(d => render(d));

  // render
  function render(data) {
    console.log('data', data);

    const minDate = data[0].date;
    const maxDate = data[data.length - 1].date;
    const maxRatio = data[data.length - 1].ratio + 1;

    const y = scaleTime()
      .domain([minDate, maxDate])
      .range([HEIGHT - MARGINS.top - MARGINS.bottom, 0]);

    const x = scaleLinear()
      .domain([0, maxRatio])
      .range([0, WIDTH - MARGINS.right]);

    const yAxis = axisLeft()
      .ticks(data.length - 1)
      .scale(y);

    const xAxis = axisBottom().scale(x);

    const canvas = select(element)
      .append('svg')
      .attr('class', className)
      .attr('width', WIDTH)
      .attr('height', HEIGHT)
      .append('g')
      .attr('class', 'canvas')
      .attr('width', WIDTH - MARGINS.right - MARGINS.left)
      .attr('height', HEIGHT - MARGINS.top - MARGINS.bottom)
      .attr('transform', `translate(0, ${MARGINS.top})`);

    canvas
      .append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${MARGINS.right}, 0)`)
      .call(yAxis);

    canvas
      .append('g')
      .attr('class', 'x-axis')
      .attr(
        'transform',
        `translate(${MARGINS.right}, ${HEIGHT -
          MARGINS.top -
          MARGINS.bottom}) `,
      )
      .call(xAxis);

    canvas
      .append('g')
      .attr('class', 'bars')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('y', d => y(d.date))
      .attr('x', d => x(d.ratio))
      .attr('width', d => x(d.ratio))
      .attr('height', 20);

    // chart
    // .selectAll('rect')
    // .data(data)
    // .enter()
    // .append('rect')
    // .attr('class', 'bar')
    // .attr('x', d => x(d.region))
    // .attr('y', window.innerHeight - 50)
    // .attr('width', x.bandwidth())
    // .attr('height', 0)
    // // .transition()
    // // .delay((d, i) => i * 20)
    // // .duration(800)
    // .attr('y', d => y(d.meanPctTurnout))
    // .attr('height', d => window.innerHeight - 50 - y(d.meanPctTurnout));
  }
}
