//importing data from data.js
//declare tableData as a constant - don't need to change it ever

const tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }


  function handleClick() {

// establishing data variable, using d3 to select datetime value from datetime tag in HTML

    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

// doing the actual filtering based on data. filtering data to only return rows where row.datetime = date

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuilding table with just filtered data
    // If there is no date entered, then filteredData will just be TableData
    buildTable(filteredData);
  }

// Listener for the form button

  d3.selectAll("#filter-btn").on("click", handleClick);

// build table when the page loads

  buildTable(tableData);