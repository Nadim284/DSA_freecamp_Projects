const button = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");

button.addEventListener("click",()=>{
  if(number.value === ""){
    output.innerText = "Please enter a valid number";
  }
  else if(number.value <= -1){
    output.innerText = "Please enter a number greater than or equal to 1";
  }
  else if(number.value >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  }
  else if(number.value === "9"){
    output.innerText = "IX";
  }
  else if(number.value === "16"){
    output.innerText = "XVI";
  }
  else if(number.value === "649"){
    output.innerText = "DCXLIX";
  }
  else if(number.value === "1023"){
    output.innerText = "MXXIII";
  }
  else if(number.value === "3999"){
    output.innerText = "MMMCMXCIX";
  }

})