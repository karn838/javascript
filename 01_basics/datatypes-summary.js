//Primitive
//7 types : String,Number, Boolean, Null, Undefined, Symbol,BigInt

//Javascript is dynamically typed language. this means that variable types are determined at runtime


const isLoggedIn = false;
const outsideTemp =null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)
const bigNumber = 238943804389403n

//Reference(No primitive)
//Array, Objects, Functions
const heros = ["saktiman","doga","naagraj"]
 let myobj = {
    name:"avnish",
    age : 22
}

const myFunction = function(){
   console.log("hello world");
}

/*
   type of val                          result
    undefined                           undefined
    Null                                 object
    Boolean                              boolean
    Number                                number
    String                               string
    function                             object function
    array                                  function

*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) when stack is used we get copy of variable
//Heap (Non-Primitive)  we get reference of value