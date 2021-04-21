d3.json("/landing").then(function(data) {
<<<<<<< HEAD
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


// countries.forEach(countries=>console.log(`${countries.Country}: ${countries.Score}`));













=======

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


>>>>>>> c8512bbe0683415c7392ab554e49f41332b1ea6c
