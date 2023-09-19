//function defination
// function print(){

//       console.log('A');
//       console.log('V');
//       console.log('N');
//       console.log('I');
//       console.log('H');
// }
//function calling
//print();

function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}

function addTwoNumbers(num1,num2){
    let result = num1+num2
    return result;
}
//const result = addTwoNumbers(3,4);
//console.log("result ",result)

// function loginUserMessage(Username){
//     return `${username} just logged in`
// }
function loginUserMessage( username="sam"){  //default parameter giving
    return `${username} just logged in`
}

//console.log(loginUserMessage("avnish"));
//console.log(loginUserMessage())  if we do not assign argument it will return undefined


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// when we don't know how many parameter or argument we will get to execute
function calculateCartPrice(...num1){   //... is also called rest operator
    return num1
}
//console.log(calculateCartPrice(200,300,4000))

const user = {
    username:"avnish",
    price :199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user);
// can pass directly object
handleObject({
    username:"sam",
    price: 399
})
const myNewArray = [200,300,4000]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))

