// const user={
//     username : "avnish",
//     loginCount :8,
//     signedIn : true,

//     getUserDetails: function(){
//         //console.log("Got user details from database")
//         console.log(`username ${this.username}`);  //this provides the  value of current context 
//         //isko is function  me nhi mila username to phir upar se leke aaya function
//         console.log(this)
//     }

// }
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);  //global context me run krega 

// const promiseOne = new Promise()
// const date  = new Date()

function Users(username,loginCount,isLoggedIn){
   // this=object
   //variable = value
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;
  // return this      jarurat nhi hai but likh v doge to thik hai
}

const userOne =new Users("avnish",12,true)
console.log(userOne)
const userTwo = new Users("avnish code",11, false)
console.log(userTwo)

