d3.json("/landing").then(function(data) {

  // console.log(data);

  // log a list of names
  var countries = data.map(d => d.Country);
  console.log(countries)

//   // Cast each hours value in tvData as a number using the unary + operator
//   data.forEach(function(i) {
//     console.log("Country:", i.Country);
//   });
// }).catch(function(error) {
//   console.log(error);
});


