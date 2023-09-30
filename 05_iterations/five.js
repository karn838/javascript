const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function(val){     //function ka name likne ki jarurat nhi hai callback hai to khud he le leaga apne hisab se
//   console.log(val)
// })

//for each using arrow function
//coding.forEach((val)=>{console.log(val)})

//can pass function in reference
// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

//can pass item, index or arr as a reference
// coding.forEach((item,index,arr)=>{
//      console.log(item,index,arr);
// })


const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java",
    },
    {
        languageName : "python",
        languageFileName : "py"
    }

]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})