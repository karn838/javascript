// const promiseOne = new Promise(function(resolve,reject)
// {
//     //Do an async task
//     //DB calls, cryptographgy, network

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()  //resolve() likne ki wajah se ye .then se connect hua hai or promise consumed bhi print hua hai
//     },1000)
// })
// const pro = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log('Async task is complete')
//     resolve()
//     },1000)
// })
// pro.then(function(){
//     console.log('this is pro then')
// })
// promiseOne.then(function(){
//     console.log("promise consumed")
// })

//withour storing promise in variable
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is called")
//         resolve()
//     },1000)
// }).then(function(){   //direct .then lga k ek or funtion print ho gya kyuki humne 1st wale promise ko variable me store nhi kra
//       console.log("Async 2 resolved")
// })

// const promiseThree = new Promise(function(resolve,reject){
    
//     setTimeout(function(){
//         resolve({username: "avnish",email:"karnavnsish78@gmail.com"})   //resolve have value
//     })
// })
// promiseThree.then(function(user){
//          console.log(user);
// })
 new Promise(function(resolve,reject){
    setTimeout(function(){
           let error=false
        if(!error){
            resolve({username:'avnish',password:"karjadf"})
        }
        else{
            reject('Error')
        }
           
    },1000)
 }).then(function(user){
    console.log(user.username,user.password)
 }).catch(function(error){console.log(error)})

// const promisefour = new Promise(function(resolve,reject){

//     setTimeout(function(){
//            let error = false;
//            if(!error){
//             resolve({username:"avnish",passoword:"123"})
//            }
//            else{
//             reject("ERROR: Something is wrong")
//            }
//     },1000)
// })
// promisefour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//    console.log(error)
// })
// .finally(()=>console.log("The Promise is either resolved or rejected"))



// const promisefive = new Promise(function(resolve,reject){

//     setTimeout(function(){
//      let error = true
//      if(!error){
//         resolve({username:"javascript",passoword:"123"})
//      }
//      else{
//         reject("ERROR: js went wrong")
//      }
//     },1000)
// })

// async function consumePromisefive(){
//     //   const response= await promisefive
//     //   console.log(response)     //direct likne k baad ye suggestion dega try catch se handle kr skte hai error ko

//     try {
//         const response = await promisefive
//         console.log(response)
//     } catch (error) {
//          console.log(error)
//     }
// }
// consumePromisefive()

//fetch using try catch
// async function getallUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      const data =  await response.json()
//      console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }
// getallUsers()

//using then
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error)) 