//for of

//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
//map.set('IN',"India")        Map only print unique values no repeation allow and print in predefined order
//console.log(map);

for (const [key,value] of map) {     //[key,value] to print alag alag key value pair
   // console.log(key, ':-', value)
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key,value] of myObject) {  //[key,value] object is not iterable like this 
    console.log(key,':-',value)
}

