import table_factory from './table-factory';

export default async function lifeExpectancyTable() {
//   async marks a function as asynchronous, so that it will always return a promise
  const getData = async () => {
    try {
      // await keyword waits until a variable has a value and then proceeds
      const response = await fetch('data/data.json');
      const raw = await response.json();

      return raw.fact
        .filter(
          d =>
            d.dims.GHO === 'Life expectancy at birth (years)' &&
            d.dims.SEX === 'Both sexes' &&
            d.dims.YEAR === '2014',
        )
        .map(d => [d.dims.COUNTRY, d.Value]);

    } catch (e) {
      console.error(e);
      return undefined;
    }
  };
  
  const data = await getData(); 
  data.unshift(['Country', 'Life expectancy (years from birth)']); 
  return table_factory(data);
}
