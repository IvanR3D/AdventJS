/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
    if (data.length === 0) return '';
    const sortData = (data, sortBy) => {
      const sortType = typeof data[0][sortBy];
      const compareFn = sortType === 'number'
        ? (a, b) => a[sortBy] - b[sortBy]
        : (a, b) => String(a[sortBy]).localeCompare(String(b[sortBy]));
      
      return [...data].sort(compareFn);
    };
    const calculateColumnWidths = (data, columns) => {
      return columns.map(col => {
        let maxWidth = 1;
        for (const row of data) {
          const valueLength = String(row[col]).length;
          if (valueLength > maxWidth) {
            maxWidth = valueLength;
          }
        }
        return maxWidth;
      });
    };
    const createBorder = (widths) => {
      let border = '+';
      for (const width of widths) {
        border += '-'.repeat(width + 2) + '+';
      }
      return border;
    };
    const createRow = (values, widths) => {
      let row = '|';
      for (let i = 0; i < values.length; i++) {
        const value = String(values[i]);
        const padding = widths[i] - value.length;
        row += ' ' + value + ' '.repeat(padding) + ' |';
      }
      return row;
    };
    const sortedData = sortData(data, sortBy);
    const columns = Object.keys(sortedData[0]);
    const widths = calculateColumnWidths(sortedData, columns);
    const border = createBorder(widths);
    let table = border + '\n';
    const headerValues = columns.map((_, i) => String.fromCharCode(65 + i));
    table += createRow(headerValues, widths) + '\n';
    table += border + '\n';
    for (const row of sortedData) {
      const rowValues = columns.map(col => row[col]);
      table += createRow(rowValues, widths) + '\n';
    }
    table += border;
    return table;
  }