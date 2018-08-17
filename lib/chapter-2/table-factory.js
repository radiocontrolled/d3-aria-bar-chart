import { select, selectAll} from 'd3-selection';

export default function table_factory(_rows) {
    const rows = Array.from(_rows);
    const header = rows.shift(); // remove first row
    const data = rows; // rows are data now

    const table = select('body')
        .append('table')
        .attr('class', 'table');
    
    const tableHeader = select('.table')
        .append('thead')
        .append('tr');
    
    const tableBody = select('.table')
        .append('tbody');
    

    header.forEach(value => { 
        tableHeader.append('th') 
        .text(value); 
    }); 

    // Each element in "data" is an array 
    data.forEach(row => { 
        const tableRow = tableBody.append('tr'); 

        row.forEach(value => { 
        // Now, each element in "row" is a string 
        tableRow.append('td') 
            .text(value)
            .style('color', 'red');
        }); 
    });

    return {
        table, 
        header, 
        data
    }
}