//Immediately Invoked Function Expression (IIFE)
//JO function immediately exicute ho jae
//global scope k  pollution se problem hoti hai  kayi baar global scope k vaiable ya declariation ko
//k pollution ko htane k liye IIFE
//
(function chai(){   //this is Named iife because function have name
    console.log(`DB CONNECTED`);
})();  //semicolon jaruri hai nhi to kvi kvi function ko pta nhi hota hai exiution rokna kha hia

( (name)=>{
    console.log(`db connected again ${name}`)
})("avnish")