
const user = {
    username : "avnish",      
    price : 999,

    welcomeMessage:function(){   //this is user for current context here , username is in same variable 
        console.log(`${this.username}, Welcome to website`)
        console.log(this)   //this current context ki baat krta hai
    }
}
//user.welcomeMessage()
//user.username = "sam"   //changing context of username
//user.welcomeMessage()

//console.log(this)  //{} empty obj print krega kyuki current environment me koi code he nhi hai
// browser k ander sabse jada jo global object hai wo hai window obj

function chai(){
    let username = "hitesh"
    console.log(this)   // agr empty func k ander this ko print krenge to bahut saari value dega like fetch,performance,
}
//chai()

// const addTwo = (num1, num2) =>{          //Arrow function humne func keyword hta diya
//       return num1+num2   //explicitly return 
// }
 //const addTwo = (num1, num2) => num1+num2  //curly bracket nhi daala to return bhi nhi likhna pda
 //const addTwo = (num1, num2) => (num1+num2)
 const addTwo = (num1, num2) => ({username : "avnish"})  //for storing object
 console.log(addTwo(3,4))