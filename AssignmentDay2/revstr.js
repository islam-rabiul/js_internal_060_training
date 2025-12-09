const prompt=require("prompt-sync")();
let a=prompt("Enter your string:");
let n=a.length-1;
let f="";
for(let i=n;i>=0;i--){
    f=f+a[i];
}
console.log(f);