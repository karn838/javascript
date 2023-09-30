//++++++++++++++reduce // uses accumulator==previous value and current value
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc+currval
// },0)   //0 is accumulator or initial value
// console.log(myTotal)


//using arrow function
//const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)
//console.log(myTotal)

const shoppingCart = [
    {
        itemName:'js course',
        price : 2999
    },
    {
        itemName:'py course',
       price : 8999
    },
    {
        itemName:'java course',
        price : 6999
     }
]
const priceTopay = shoppingCart.reduce( (acc,item) =>acc+item.price,0)
console.log(priceTopay)