const name = "avnish"
const repoCount = 50

//console.log(name+repoCount+"value");
console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('avnishkarn')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString  = gameName.slice(-8,4)
console.log(anotherString);

const newStringone = "    avnish    ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://avnish.com/avnish%20karn"
console.log(url.replace('%20','-'))
console.log(url.includes('avnish'))  //check krega avnish hai ya nhi
console.log(url.split('%'))