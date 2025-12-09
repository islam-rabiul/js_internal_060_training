const prompt=require("prompt-sync")();
let cel=parseInt(prompt("Enter the temperature in celcius:"));
let f=(cel*9/5)+32;
console.log("Fahrenheit",f);