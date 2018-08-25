import { select } from 'd3-selection';
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

    const minDate = data[0].date; console.log('minDate', minDate);
    const maxDate = data[data.length - 1].date;
    const maxRatio = data[data.length - 1].ratio + 1;

    const y = scaleTime()
      .domain([minDate, maxDate]) // fix me
      .range([HEIGHT - MARGINS.top - MARGINS.bottom, 0]);

    const x = scaleLinear()
      .domain([0, maxRatio])
      .range([0, WIDTH - MARGINS.right]);

    const xAxis = axisBottom().scale(x);
    const yAxis = axisLeft().scale(y);

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
      .attr('class', 'axis')
      .attr('transform', `translate(${MARGINS.right}, 0)`)
      .call(yAxis);

    canvas
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${MARGINS.right}, ${HEIGHT - MARGINS.top - MARGINS.bottom}) `)
      .call(xAxis);


  }
}
