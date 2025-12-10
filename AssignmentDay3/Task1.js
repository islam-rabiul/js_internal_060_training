let num=[80,90,70,85,95]
acc=0
let sum=num.reduce((acc,n)=>acc+n,0);
let avg=sum/num.length;
console.log(avg);