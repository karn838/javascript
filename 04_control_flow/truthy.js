const userEmail = "a@avnish.ai"

if(userEmail){  //we dont written userEmail ==true it assumes so it is called truthy
    console.log("got user email");
}
else{
    console.log("don,t have user email");
}

//falsy value 
//false,0,-0,BigInt 0n, "",null,undefined,Nan

//truthy value
//true,"0",'false'," ",[],{},function(){}
//String k ander koi v value truthy value hai

if(userEmail.length===0){
    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish coalescing Operator (??): null undefined
//safety purpose se use kiya gya hai jha null or undefined value assign ho variable me
//let val1=5 ?? 10
//let val1 = null 10
var1 = undefined ?? 15
var1 = null ?? 10 ?? 15 //jo v value phle aayi hai whi assign hoga

console.log(var1)

//Terniary Operator
const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("less than 80") : console.log("more than 80");

