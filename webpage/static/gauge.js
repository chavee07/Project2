

///////DROPDOWN//////////
function init() {
    d3.json("/landing").then((data)=> {
    console.log( data);
    

    //set dropdown menu w/ id//
    data.forEach((d) => {
        var countries = data.map(d => d.Country);
        // console.log(countries)

        var scores =data.map(d =>d.Score);
        // console.log(scores)

d3.select("#selDataset").append("option").text(d.Country).property("value");



var data_guage = [{
    domain: {x: [0, 1], y: [0, 1]},
    value: parseFloat(d.Country),
    title: {text: `Country Happiness`},
    type: "indicator",
    mode: "gauge+number",
    gauge: { axis: { range: [null, 9] },
    bar : { color: "red" },
    steps: [
    {range: [0, 3], color: "cyan"},
    {range: [3, 7], color: "royalBlue"},
    {range: [7, 9], color: "blue"},
    ]}
    }];


var layout_guage = { 
width: 700, 
height: 600, 
margin: { t: 20, b: 40, l:100, r:100 } 
};

Plotly.newPlot("gauge", data_guage, layout_guage);



});





    // countries(data.Country);
    // scores(data.Score);

    
})};




//create function demographic data//
function scoreInfo(id) {
    d3.json("/landing").then((data)=> {
        //call in metadata to demographic panel//
    
    
    var result = data.filter(data => data.Country.toString() === id)[0];
        //select demographic panel from html//
    var info = d3.select("#sample-metadata");
        //empty the demographic panel for new data//
    info.html("");
   
    
    
    Object.entries(result).forEach((key) => {   
        info.append("h5").text(key[0]+ ": " + key[1]);   
        });
    });

};



//create function for data//
function countries(id) {
    d3.json("/landing").then((data)=> {
        // console.log(data)
        
    
var countryName = data.Country.filter(c => c.id.toString() === id)[0];
// console.log(`Country Name: ${countryName}`)
     
        
var countryScore = data.Score.filter(s => s.id.toString() === id)[0];
// console.log(`Country Score: ${countryScore}`)
    
  
    
     






  
        //guage chart//
    var data_guage = [{
        domain: {x: [0, 1], y: [0, 1]},
        value: parseFloat(d.Score),
        title: {text: `Country Happiness`},
        type: "indicator",
        mode: "gauge+number",
        gauge: { axis: { range: [null, 9] },
        bar : { color: "red" },
        steps: [
        {range: [0, 3], color: "cyan"},
        {range: [3, 7], color: "royalBlue"},
        {range: [7, 9], color: "blue"},
        ]}
        }];


    var layout_guage = { 
    width: 700, 
    height: 600, 
    margin: { t: 20, b: 40, l:100, r:100 } 
    };

    Plotly.newPlot("gauge", data_guage, layout_guage);

});
}  

init();

//change function// 
    function optionChanged(id){
    countries(id);
    scoreInfo(id);
}