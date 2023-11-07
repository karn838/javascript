 let myDate  = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString());
// console.log(myDate)
//  console.log( typeof myDate);

let createdDate = new Date(2023 , 0 , 23)
//let createdDate = new Date(2023 , 0 , 23, 5 ,3)
//let createdDate = new Date("2023-01-13");
//let createdDate = new Date("11-23-2023")
//console.log(createdDate.toLocaleString());

// let mytimeStamp = Date.now();
// console.log(mytimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate  = new Date()
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getDay())

//`{newDate.getDAy()} and the time`
newDate.toLocaleString('default',{
    weekday: "long",
})