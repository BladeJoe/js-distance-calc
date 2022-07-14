var walkTime = document.querySelector("#walkTime");
var bikeTime = document.querySelector("#bikeTime");
var carTime = document.querySelector("#carTime");
var planeeTime = document.querySelector("#planeTime");

var form = document.querySelector("#form");
form.addEventListener("submit", function (evt) {
       evt.preventDefault();
       var input = document.querySelector("#input");

       if (!isNaN(input.value) && input.value > 0) {

              walkTime.value = time(input.value,3.6)
              bikeTime.value = time(input.value,20.1)
              carTime.value = time(input.value,70)
              planeeTime.value = time(input.value,800) 
       } else {
              alert("Enter a number")
       }

       function time(a, b) {
              var string = `${Math.floor((a / b)/24).toFixed(0) } days 
${Math.floor((a / b).toFixed(2))%24 } Hours
 ${(((( a / b).toFixed(2) % 1 )%100)*60).toFixed(0) } mins`;



              return string;

       }


})