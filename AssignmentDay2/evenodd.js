const prompt=require("prompt-sync")();
let a=parseInt(prompt("Enter your number:"));
if(a%2==0){
    console.log("Even");
}
else{
    console.log("odd");
}