var walkTime = document.querySelector("#walkTime");
var bikeTime = document.querySelector("#bikeTime");
var carTime = document.querySelector("#carTime");
var planeeTime = document.querySelector("#planeTime");

var form = document.querySelector("#form");
form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var input = document.querySelector("#input");
    
    if (!isNaN(input.value) && input.value <= 9999999999999 && input.value > 0) {

        walkTime.value = `${Math.floor((input.value / 3.2).toFixed(2))} Hours
 ${(((( input.value / 3.2).toFixed(2) % 1 )%100)*60).toFixed(0) } mins`;
        bikeTime.value = `${Math.floor((input.value / 20.1).toFixed(2))} Hours
 ${(((( input.value / 20.1).toFixed(2) % 1 )%100)*60).toFixed(0) } mins`;
        carTime.value = `${Math.floor((input.value / 80).toFixed(2))} Hours
 ${(((( input.value / 80).toFixed(2) % 1 )%100)*60).toFixed(0) } mins`;
        planeeTime.value = `${Math.floor((input.value / 500).toFixed(2))} Hours
 ${(((( input.value / 500).toFixed(2) % 1 )%100)*60).toFixed(0) } mins`;
    } else {
        alert("Enter a number")
    } 



})