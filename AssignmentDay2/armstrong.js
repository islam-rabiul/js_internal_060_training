
function arms(n){
    let temp=n;
let k=count(n);
let sum=0;
while(temp!=0){
    let d=temp%10;
    sum=sum+Math.pow(d,k);
    temp=Math.floor(temp/10);
}
return sum==n;
}
function count (n){
let c=0;
while(n!=0){
    n=Math.floor(n/10);
    c++;
}
return c;
}
console.log(arms(153));