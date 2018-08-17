import table_factory from './table-factory';

export default async function lifeExpectancyTable() {
//   async marks a function as asynchronous, so that it will always return a promise
  const getData = async () => {
    try {
      // await keyword waits until a variable has a value and then proceeds
      const response = await fetch('data/data.json');
      const raw = await response.json();

      console.log(raw.fact
        .filter(
          d =>
            d.dim.GHO === 'Life expectancy at birth (years)' &&
            d.dim.SEX === 'Both sexes' &&
            d.dim.YEAR === '2014',
        )
        .map(d => [d.dim.COUNTRY, d.Value]));

    } catch (e) {
      console.error(e);
      return undefined;
    }
  };
  
  const data = await getData(); 
  console.log('data', data);
//   data.unshift(['Country', 'Life expectancy (years from birth)']); 
//   return table_factory(data);
}
