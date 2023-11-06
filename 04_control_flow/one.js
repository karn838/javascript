//control flow   1.If

// const isUserloggedIn = true
// const temperature = 41
// if(temperature===41){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("executed")

// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);

// const balance =1000
// if(balance>500) console.log("test"), //can also write control flow for multiple line with comma without semicolon
// console.log("test2");  //but this is not recommended way

const UserloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail= true

if(UserloggedIn && debitcard){
    console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}