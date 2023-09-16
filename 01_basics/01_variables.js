const accountId = 144553
let accountEmail = "avnishkarn@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accoundId = 2 //not allowed because variable  is constant
accountEmail = "hc@hc.com"
accountPassword = "212112"
accountCity = "Bengaluru"
let accountState;
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);