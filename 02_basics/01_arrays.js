//array

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4,)
//console.log(myArr);

//Array Methods
//console.log(myArr.push(9));
//console.log(myArr.pop())

 //console.log(myArr.unshift(6));
 //console.log(myArr.shift());

//  console.log(myArr.includes(9))
//  console.log(myArr.indexOf(4));
// console.log(myArr);

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//slice, splice
console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log("C",myArr)  //splice k baad orginal array mese splice part remove kr deta hai splice
console.log(myn2)