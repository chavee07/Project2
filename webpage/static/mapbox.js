data = d3.json("/landing")

// preview data
var json = JSON.parse(data);
  console.log(json);
  var Country=json.Country;
  console.log(Object.values(Country))