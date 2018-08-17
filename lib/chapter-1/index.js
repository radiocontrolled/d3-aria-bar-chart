import { select, selectAll } from 'd3-selection';
import { csvParse } from 'd3-dsv';
import { mean, max } from 'd3-array';
import { nest } from 'd3-collection';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import * as styles from '../styles/index.css'; // fix me.

const chart = select('body')
  .append('svg')
  .attr('id', 'chart');

const req = new window.XMLHttpRequest();
req.addEventListener('load', mungeData);
req.open('GET', 'data/EU-referendum-result-data.csv');
req.send();

function renderChart(data) {
  chart.attr('width', window.innerWidth).attr('height', window.innerHeight);

  chart.attr('viewbox', '0 0 100 100')

  // x scale is band scale with output divided into sections
  const x = scaleBand()
    .domain(data.map(d => d.region)) // input domain of region names
    .rangeRound([50, window.innerWidth - 50]) // outpur range of 50 to width of viewport - 50
    .padding(0.1);

  // y scale is a linear scale
  const y = scaleLinear()
    .domain([0, max(data, d => d.meanPctTurnout)]) // input domain of to max of data
    // output range - inverting the range is important
    // because D3 considers the top of a graph to be y=0
    .range([window.innerHeight - 50, 0]);

  const xAxis = axisBottom().scale(x);
  const yAxis = axisLeft().scale(y);

  chart
    .append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0, ${window.innerHeight - 50})`)
    .call(xAxis);

  chart
    .append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(50, 0)')
    .call(yAxis);

  chart
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => x(d.region))
    .attr('y', window.innerHeight - 50)
    .attr('width', x.bandwidth())
    .attr('height', 0)
    // .transition()
    // .delay((d, i) => i * 20)
    // .duration(800)
    .attr('y', d => y(d.meanPctTurnout))
    .attr('height', d => window.innerHeight - 50 - y(d.meanPctTurnout));
}

function mungeData() {
  const data = csvParse(this.responseText);
  const regions = data.reduce((last, row) => {
    if (!last[row.Region]) last[row.Region] = [];
    last[row.Region].push(row);
    return last;
  }, {});
  const regionsPctTurnout = Object.entries(regions).map(([region, areas]) => ({
    region,
    meanPctTurnout: mean(areas, d => d.Pct_Turnout),
  }));

  renderChart(regionsPctTurnout);
}
