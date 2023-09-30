//const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item)=>                  //for each by default kuch v return nhi krta hai
//  { console.log(item)
//    return item
// })

// console.log(values)


//+++++++++++++++++Filter ++++++++++
//Filter v call back leta hai for each ki tarah but ye value return krta hai
//isme condition ki need hoti hai

const myNums = [1,2,3,4,5,6,7,8,9]

//const newnum = myNums.filter( (nums) => nums>4)
//agar hum curly bracket(scope) ka use krte hai to return keyword likna he pdega
//const newnum = myNums.filter( (nums) => { return nums>4})

//console.log(newnum)

// const newnum = []
// myNums.forEach( (nums)=> {
//     if(nums>4)
//     {
//         newnum.push(nums)
//     }
// })
// console.log(newnum)     aise v kr skte hai for each se jaruri nhi hai filter he use kre

const books  = [
   {title: 'Book One', genre : 'Fiction', publish : 1981, edition :2004},
   
   {title: 'Book Two', genre : 'Non-Fiction', publish : 1992, edition :2008},
   
   {title: 'Book Three', genre : 'History', publish : 1999, edition :2007},
   
   {title: 'Book Four', genre : 'Non-Fiction', publish : 1989, edition :2010},

   {title: 'Book Five', genre : 'Science', publish : 2009, edition :2014},
   
   {title: 'Book Six', genre : 'Fiction', publish : 1987, edition :2010},
   
   {title: 'Book Seven', genre : 'History', publish : 1986, edition :1996},
   
   {title: 'Book Eight', genre : 'Science', publish : 2011, edition :2016},
   
   {title: 'Book Nine', genre : 'Non-Fiction', publish : 1981, edition :1989},

]

//const userBooks = books.filter( (bk)=>bk.genre==='History' )
const userBooks = books.filter( (bk)=> bk.publish>2000)
console.log(userBooks)