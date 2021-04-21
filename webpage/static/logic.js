d3.json("/landing").then(function(data) {

  console.log(data);


//  // log countries
 var countries = data.map(d => d.Country);
 console.log(countries)

// log scores
var scores= data.map(d=>d.Score);
  console.log(scores)

//log countries and score
  var countries = data.map(d => [d.Country,d.Score])
  console.log(countries)

});