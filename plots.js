
var btcimg = document.getElementById("btc1");
// btcimg.style.display = "block";
var ethimg = document.getElementById("eth1");
ethimg.style.display = "none";

function updatePlotly() {

// This function is called when a dropdown menu item is selected
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  console.log(dataset);
  
  
  if (dataset === "Dataset1"){
    console.log("test");
    // var img = document.getElementById("btc1");
    btcimg.style.display = "block";
    btcimg2.style.display = "block";

  }
  
  else if (dataset === "Dataset2"){
    console.log("test2");
    // var ethimg = document.getElementById("eth1");
    ethimg.style.display = "block";
    btcimg.style.display = "none";
  }
  
  else {
    console.log("test3");
    var img = document.getElementById("btc1");
    img.style.display = "none";
  };

  

}
d3.selectAll("#selDataset").on("change", updatePlotly);
// updatePlotly();
