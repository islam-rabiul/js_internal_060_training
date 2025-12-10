const arr=["Apple","Banana","Mango","Grapes","Pineapple"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.push("Papaya")
// console.log("After Push:");
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.pop();
// console.log("After Pop:")
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.unshift("Kiwi")
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.shift();
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for(let i of arr){
//     console.log(i);
// }
// let number=[1,2,3];
// let double=number.map(n=>n*2);
// for(let val of double){
//     console.log(val);
// }
// console.log("-------")

// let nums=number.filter(n=>n>2);
// for(let val of nums){
//     console.log(val);
// }
let number=[2,4,6,8];
acc=0;
let sum=number.reduce((acc,n)=>acc+n,0);
console.log(sum);