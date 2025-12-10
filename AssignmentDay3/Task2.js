let num=[1,2,3,4,5,6,7,8,9];
let even=num.filter((n)=>{
    return n%2==0;
}

)
for(let val of even){
    console.log(val);
}