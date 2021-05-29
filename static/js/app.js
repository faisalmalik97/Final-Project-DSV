// from data.js
var tableData = data;

//Select table body
var tbody =  d3.select("tbody");

//1 .function for building table

function Tablebuildingfun(data) {
  tbody.html("");
  // Adding table row
  data.forEach((dataRow) => {
    var trow = tbody.append("tr");
    // Adding table cell data
    Object.values(dataRow).forEach((cell) => {
      var Tcell = trow.append("td");
        Tcell.text(cell);  
      }
      );
  });
}

// Keep Track of all filters
var filters = {};

function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // Update the track of filter in filter objedt with ID and value
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();

}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop and match the data

  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  //Apply the function using filtered data
  Tablebuildingfun(filteredData);
}

//listen for changes in each filter class
d3.selectAll(".filter").on("change", updateFilters);

//Applying the talbe building function
Tablebuildingfun(tableData);
