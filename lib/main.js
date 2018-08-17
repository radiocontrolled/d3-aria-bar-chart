import table_factory from './chapter-2/table-factory';
import lifeExpectancyTable from './chapter-2/index';

const header = ['one', 'two', 'three', 'four', 'five'];
const rows = [
  header, 
  ['q', 'w', 'e', 'r', 't', 'y'],
];

table_factory(rows);

lifeExpectancyTable();