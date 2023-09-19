//non singleton way   const tinderuser = {}
//2nd way of declaring object using singleton object or you can say constructor way
//const tinderuser = new Object()
//tinderuser.id = "123abc";
// tinderuser.name = "sammy";
// tinderuser.isLoggedIn = false;

// console.log(tinderuser)

// const regularuser = {
//     email : "karnahafs@gmail.com",
//     userfullname :{
//         firstname : "anvish",
  //      lastname : "karn"
   // }
//}
//console.log(regularuser)

//const obj1 = { 1 : "a", 2 : "b"};
//const obj2 = { 3 : "a", 4 : "b"}

//one way to combine objects
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

//2nd way to join objects using spread
//const obj3 = {...obj1,...obj2}
//console.log(obj3)

//accessing key , values and entries
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//to check the properties exists or not
//console.log(tinderUser.hasOwnPropertry('isLoggedIn'));

const course = {
  coursename: "js in hindi",
  price : "999",
  courseInstructor: "avnish"
}

//course.courseInstructor
//can also do like this below
const {courseInstructor :instructor} = course   //object destructuring
console.log(instructor);
