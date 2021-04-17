// set up json url
// url = "http://127.0.0.1/landing"

d3.json("/landing").then(function(data) {
  console.log(data);
});
