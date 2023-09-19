//singleton   
//Object.create    this is of the way of object creation using construtor 

//object literals
//object consists of key and value pair

const mysym = Symbol("key1") //add symbol in objext
const jsUSer = {
    name: "Avnish",
    age :18,
    [mysym] : "mykey1",
    //[mysum]  braket lgana he pdega tvi pta chlega ye symbol hai nhi to string value ko string ki tarah lega js
    location : "Noida",
    email : "karnavnish@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["mondat","saturday"]
}
//accessing of object
//console.log(jsUSer.age)  //1 way
//console.log(jsUSer["email"]) //2nd way
//console.log(jsUSer[mysym])  printing symbol

//changing value in object
//jsUSer.email = "avnish@chatgpt.com"
//if you want to freez your obj so that no one can change your obj use
//Object.freeze(jsUSer)
//jsUSer.email = "avnish@microsoft.com"
//console.log(jsUSer)

jsUSer.greeting = function(){
    console.log("hello js user")
}
console.log(jsUSer.greeting())

jsUSer.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);    
}
console.log(jsUSer.greetingTwo());