
var btcimg = document.getElementById("btc1");
var btcimg2 = document.getElementById("btc2");
var btcimg3 = document.getElementById("btc3");
var btcimg4 = document.getElementById("btc4");
var btcimg5 = document.getElementById("btc");
var ethimg = document.getElementById("eth1");
var ethimg2 = document.getElementById("eth2");
var ethimg3 = document.getElementById("eth3");
var ethimg4 = document.getElementById("eth4");
var ethimg5 = document.getElementById("eth");
var dogeimg = document.getElementById("doge1");
var dogeimg2 = document.getElementById("doge2");
var dogeimg3 = document.getElementById("doge3");
var dogeimg4 = document.getElementById("doge4");
var dogeimg5 = document.getElementById("doge");

ethimg.style.display = "none";
ethimg2.style.display = "none";
ethimg3.style.display = "none";
ethimg4.style.display = "none";
ethimg5.style.display = "none";
dogeimg.style.display = "none";
dogeimg2.style.display = "none";
dogeimg3.style.display = "none";
dogeimg4.style.display = "none";
dogeimg5.style.display = "none";

function updatePlotly() {

// This function is called when a dropdown menu item is selected
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  console.log(dataset);
  
  
  if (dataset === "Dataset1"){
    btcimg.style.display = "block";
    btcimg2.style.display = "block";
    btcimg3.style.display = "block";
    btcimg4.style.display = "block";
    btcimg5.style.display = "block";
    ethimg.style.display = "none";
    ethimg2.style.display = "none";
    ethimg3.style.display = "none";
    ethimg4.style.display = "none";
    ethimg5.style.display = "none";
    dogeimg.style.display = "none";
    dogeimg2.style.display = "none";
    dogeimg3.style.display = "none";
    dogeimg4.style.display = "none";
    dogeimg5.style.display = "none";


  }
  
  else if (dataset === "Dataset2"){
    console.log("test2");
    ethimg.style.display = "block";
    ethimg2.style.display = "block";
    ethimg3.style.display = "block";
    ethimg4.style.display = "block";
    ethimg5.style.display = "block";
    btcimg.style.display = "none";
    btcimg2.style.display = "none";
    btcimg3.style.display = "none";
    btcimg4.style.display = "none";
    btcimg5.style.display = "none";
    dogeimg.style.display = "none";
    dogeimg2.style.display = "none";
    dogeimg3.style.display = "none";
    dogeimg4.style.display = "none";
    dogeimg5.style.display = "none";

  }
  
  else {
    console.log("test3");
    dogeimg.style.display = "block";
    dogeimg2.style.display = "block";
    dogeimg3.style.display = "block";
    dogeimg4.style.display = "block";
    dogeimg5.style.display = "block";
    btcimg.style.display = "none";
    btcimg2.style.display = "none";
    btcimg3.style.display = "none";
    btcimg4.style.display = "none";
    btcimg5.style.display = "none";
    ethimg.style.display = "none";
    ethimg2.style.display = "none";
    ethimg3.style.display = "none";
    ethimg4.style.display = "none";
    ethimg5.style.display = "none";
    
  };

  

}
d3.selectAll("#selDataset").on("change", updatePlotly);
updatePlotly();
