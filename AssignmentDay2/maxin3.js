const prompt=require("prompt-sync")();
let a=parseInt(prompt("Enter your first number"));
let b=parseInt(prompt("Enter your second number"));

let c=parseInt(prompt("Enter your third number"));
if(a>b){
    if(a>c){
        console.log(a);
    }
    else{
        console.log(c);

    }

}
else{
    if(b>c){
        console.log(b);
    }
    else{
        console.log(c);

    }
}
