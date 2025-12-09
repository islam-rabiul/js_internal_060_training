const prompt=require("prompt-sync")();
let a=parseInt(prompt("Enter your number"));
if(a>0){
    console.log("Positive")

}
else if(a<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}