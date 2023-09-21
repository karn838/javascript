//var c=300
let a =300
// if(true){
//     let a=10   //let ka scope local hai
//     const b =20
//     console.log("inner",a);
// }

// for(let i=0;i<array.length;i++){
//     const element  = arr[i]
// }
//console.log(a);
//console.log(a);
//console.log(c);


//+++++++++++++++++++++++++++++++++++++++Scope inside nested function

function one(){
    const username = "avnish";
    function two(){
        const website = "youtube";
        console.log(username);
    }
   // console.log(website);
    two()
}
one();