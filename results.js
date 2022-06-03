
var btcimg = document.getElementById("btc5");
var btcimg2 = document.getElementById("btc6");
var btcimg3 = document.getElementById("btc7");
// var btcimg4 = document.getElementById("btc8");
var ethimg = document.getElementById("eth5");
var ethimg2 = document.getElementById("eth6");
var ethimg3 = document.getElementById("eth7");
// var ethimg4 = document.getElementById("eth8");
var dogeimg = document.getElementById("doge5");
var dogeimg2 = document.getElementById("doge6");
var dogeimg3 = document.getElementById("doge7");
// var dogeimg4 = document.getElementById("doge8");
ethimg.style.display = "none";
ethimg2.style.display = "none";
ethimg3.style.display = "none";
// ethimg4.style.display = "none";
dogeimg.style.display = "none";
dogeimg2.style.display = "none";
dogeimg3.style.display = "none";
// dogeimg4.style.display = "none";

function updatePlotly() {

// This function is called when a dropdown menu item is selected
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  console.log(dataset);
  
  
  if (dataset === "Dataset1"){

  }
  
  else if (dataset === "Dataset2"){
    console.log("test2");
    ethimg.style.display = "block";
    ethimg2.style.display = "block";
    ethimg3.style.display = "block";
    // ethimg4.style.display = "block";
    btcimg.style.display = "none";
    btcimg2.style.display = "none";
    btcimg3.style.display = "none";
    // btcimg4.style.display = "none";
    dogeimg.style.display = "none";
    dogeimg2.style.display = "none";
    dogeimg3.style.display = "none";
    // dogeimg4.style.display = "none";

  }
  
  else {
    console.log("test3");
    dogeimg.style.display = "block";
    dogeimg2.style.display = "block";
    dogeimg3.style.display = "block";
    // dogeimg4.style.display = "block";
    btcimg.style.display = "none";
    btcimg2.style.display = "none";
    btcimg3.style.display = "none";
    // btcimg4.style.display = "none";
    ethimg.style.display = "none";
    ethimg2.style.display = "none";
    ethimg3.style.display = "none";
    // ethimg4.style.display = "none";
    
  };

  

}
d3.selectAll("#selDataset").on("change", updatePlotly);
// updatePlotly();
