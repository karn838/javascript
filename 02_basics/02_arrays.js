const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["Superman","flash","batman"]

// marvel_heros.push(dc_heros); //place array inside array 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  //stores in a new array
// console.log(allHeros)

//const all_new_heros = [...marvel_heros, ...dc_heros]  //...converted array into individual element and get store in an array
//above we have spread the array
//console.log(all_new_heros)

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

//console.log(Array.isArray("Hitesh")) //check input is array or not return boolean value
//console.log(Array.from("Hitesh"))  //convert any type value in array

//console.log(Array.from({name: "hitesh"})) //interesting
//in above case hume btana pdega hum key ka array bnana chahte hai ya value ka nhi to empty array return krega

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //different value ko v array me store kr skte hai

