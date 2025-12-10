let user={name:"Aman",age:21,course:"JS"};
let jsonobj=JSON.stringify(user);
console.log(jsonobj);
console.log("---");
let obj=JSON.parse(jsonobj);
console.log(obj);